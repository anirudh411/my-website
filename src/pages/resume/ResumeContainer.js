import React from "react";
import "./style.scss"
import html2canvas from "html2canvas";
import * as jsPDF from 'jspdf';
import {Section, SectionBody, SectionHeading} from "../../ui/SectionHeading";
import {List, Map} from "immutable"
import {getMinimumVisibleKeyPathPerPage} from "./utils";
import {Progress} from "../../ui/ProgressBar"
import {data} from "../../assets/data";
import {StyledText} from "../../ui/Text";


export const ResumeHeader = () => {
	const {name, designation, headline} = React.useContext(ResumeContext);
	return (
		<div className="row flex-column">
			<div className="col-sm-12">
				<h1 className="m-0">{name}</h1>
				<h2>{designation}</h2>
				{headline && <p className="resume-headline">{headline}</p>}
			</div>
		</div>)
};

export const ResumeMainSection = (props) => {
	const {title, logo, data, expandable = false} = props.data;
	const [isExpanded, setExpanded] = React.useState(true);


	const handleHeadingClick = (event) => {
		setExpanded(expanded => !expanded);
	};
	const sectionHeadingProps = React.useCallback(() => {
		if (expandable) {
			return {
				onClick: handleHeadingClick
			}
		} else {
			return {}
		}

	}, [expandable]);

	return (
		<Section isExpanded={isExpanded} expandable={expandable} className="row  my-2">
			<SectionHeading {...sectionHeadingProps()}
							className="section--heading col-sm-12 py-1 d-flex align-items-center">
				<span className="logo">
					<i className="material-icons">{logo}</i>
				</span>
				<span>{title}{}</span>
			</SectionHeading>
			<SectionBody isExpanded={isExpanded}>
				<div className="row mt-2">
					{data && data.map(({time, title, subTitle, description}) =>
						(<div key={title} className="col-sm-12">
							{time && <b key={time}>{time}</b>}
							<div className="row" key={title}>
								<div className="col-sm-12">
									<b>{title}</b>
								</div>
								{subTitle && <div className="col-sm-12">
									<p>{subTitle}</p>
								</div>}
								{description.title && <div key={description.title} className="col-sm-12">
									<b>{description.title}</b>
								</div>}
								{(description && (description.data && description.data.length)) &&
								<ul className="col-sm=12 pl-3">
									{description.data.map(item => <li key={item}>{item}</li>)}
								</ul>}
							</div>
						</div>)
					)}
				</div>
			</SectionBody>
		</Section>)
};

function lastDataIndex(n) {
	let count = 0;
	let pageIndex = [0];
	for (let i = 0; i < data.length; i++) {
		let item = data[i];
		count = count + item.text.reduce((a, c) => a + c.split(" ").length, 0);
		if (count > n) {
			pageIndex.push(i);
			count = 0;
		}
	}
	pageIndex.push(data.length);
	return pageIndex;
}

function Text({text}) {

	function handleTextOnHover() {
	}

	let body = '';
	const str = text;
	let simpleText = text;
	let link = '';
	const condition = str[0] === "[" && str[str.lastIndexOf("]") + 1] === "(";
	if (condition) {
		simpleText = simpleText.substring(1, str.lastIndexOf("]"));
		link = text.substring(str.lastIndexOf("]") + 2, str.length - 2);
	}
	if (link) {
		body = <a title={simpleText} onMouseEnter={handleTextOnHover} target="_blank"
				  href={link}>{simpleText} </a>;
	} else {
		body = <StyledText>{simpleText}</StyledText>;
	}
	return body;
}


export const ResumeContainer = () => {
		let {main} = React.useContext(ResumeContext);
		let totalPages = lastDataIndex(220);
		return totalPages.map((sliceValue, index, arr) => {
			let dataArray = [];
			if (index === 0) {
				dataArray = data.slice(0, arr[1]);
			} else if (index === arr.length - 1) return null;
			else dataArray = data.slice(arr[index], arr[index + 1]);
			return <div className="row resume">
				<main className="col-sm-8">
					{dataArray.map((item, index) => {
						switch (item.type) {
							case "h1":
								return <div key={index} className="row flex-column">
									<div className="col-sm-12">{
										item.text.map((text, i) => <h1 key={i}
																	   className="m-0">{text}</h1>)}
									</div>
								</div>;

							case "h2":
								return <div key={index} className="row flex-column mb-1">
									<div className="col-sm-12">
										{item.text.map((text, i) => <h2 key={i} className="mb-1">{text}</h2>)}
									</div>
								</div>;
							case "h3":


								return item.text.map((text, i) => <h3 key={i} className="resume-headline">{text}</h3>);
							case "h4":
								return <div className="mt-3 mb-0" key={index}>
									{item.text.map((text, i) => <h4 key={i}
																	className="resume-headline m-0"><Text text={text}/>
									</h4>)}
								</div>
							default:
								return null;
							case "section":
								return <Section key={index}>
									<SectionHeading
										className="section--heading col-sm-12 mb-2 py-1 d-flex align-items-center">
									<span className="logo">
										<i className="material-icons">{item.leftIcon}</i>
									</span>
										<span>{item.text}</span>
									</SectionHeading>
								</Section>;
							case "p":
								return <div key={index} className="row my-2">
									{item.text.map((text, i) => <p key={i}
																   className="col-sm-12 m-0 resume-headline ">{text}</p>)}
								</div>

						}
					})}
				</main>
				{index == 0 && <aside className="col ml-3 info col-sm position-sticky align-top">
					<PersonalInformation/>
					<SkillsContainer/>
				</aside>}
			</div>
		})

	}
;
export const PersonalInformation = () => {
	const {personal_information} = React.useContext(ResumeContext);
	return <div className="row resume-body">
		<div className="col-sm-12 d-flex align-items-center info--header">
			<span className="logo">
				<i className="material-icons">work</i>
			</span>
			<span>Personal Info</span>
		</div>
		<div className="col-sm-12">
			{personal_information.data.length && personal_information.data.map(({title, description}) => {
				return (
					<div key={title} className="my-2">
						<div><b>{title}</b></div>
						<div className="text-w">{description}</div>
					</div>
				)
			})}
		</div>
	</div>

};

export const SkillsContainer = () => {
	const {skills} = React.useContext(ResumeContext);
	return <section className="row section skills-container ">
		<div className="col-sm-12 py-1 my-4 d-flex align-items-center info--header">
			<span className="logo">
				<i className="material-icons">color_lens</i>
			</span>
			<span>{'Skills'}</span>
		</div>
		<div className="col-sm-12 resume-body">
			<ul>{skills.map((skill) => {
				return <React.Fragment key={skill.title}>
					<li className="my-2 pl-0">{skill.title}</li>
					<Progress maxValue={skill.level}/></React.Fragment>
			})}
			</ul>
		</div>
	</section>
};

const ResumeContext = React.createContext();

export default ({children, data}) => {
	if (data) {
		return <ResumeContext.Provider value={data}>
			<div className="row">
				<div className="col-sm-2  d-flex flex-column">
					<button className="button--sticky-1" onClick={() => {
						const element = document.getElementById('resume');
						//var element = document.getEl//ementById('element-to-print');
						var opt = {
							margin: 0,
							filename: 'myfile.pdf',
							image: {type: 'jpeg', quality: .98},
							html2canvas: {scale: 1.2},
							jsPDF: {unit: 'px', format: 'a4', orientation: 'p'}
						};
						html2canvas(element).then(function (canvas) {
							var pdf = new jsPDF("in", "pt", [canvas.width, canvas.height]);
							var imgData = canvas.toDataURL("image/jpeg", 2.0);
							pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
							pdf.save("report.pdf");

						});

					}}>Download
					</button>
				</div>
				<div className="col">
					<ResumeContainer/>
				</div>

			</div>
			{children}
		</ResumeContext.Provider>
	} else return <div>Nothing interesting here</div>
}
