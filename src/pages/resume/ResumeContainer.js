import React from "react";
import "./style.scss"
import html2canvas from "html2canvas";
import * as jsPDF from 'jspdf';
import {Section, SectionBody, SectionHeading} from "../../ui/SectionHeading";
import {List} from "immutable"
import {getMainSectionExceedingMaxCharacters} from "./utils";
import {Progress} from "../../ui/ProgressBar";


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


export const ResumeContainer = () => {
		let {main} = React.useContext(ResumeContext);
		let visibleContent = List(main);
		const visibleContentKeysArray = getMainSectionExceedingMaxCharacters(main, 118);
		if (visibleContentKeysArray.length) {
			visibleContent = visibleContent.slice(0, visibleContentKeysArray[0] + 1);
			for (let i = 1; i < visibleContentKeysArray.length; i++) {
				let keyPath = visibleContentKeysArray.slice(0, i);
				if (!isNaN(visibleContentKeysArray[i])) {
					let arr = visibleContent.getIn(keyPath);
					arr = arr.slice(0, +visibleContentKeysArray[i] + 1);
					visibleContent = visibleContent.setIn(
						keyPath,
						arr
					);
				} else if ((i === visibleContentKeysArray.length - 1) && isNaN(visibleContentKeysArray[i])) {
					const {description, rest} = visibleContent.getIn(keyPath)[visibleContentKeysArray[i]]
					visibleContent = visibleContent.setIn(keyPath, {...rest, description: {}});
				}
			}
		}

		return (<div id="resume" className="resume">
				<div className="row">
					<main className="col-sm-8">
						<ResumeHeader/>
						{visibleContent.map(section => <ResumeMainSection key={section.title} data={section}/>)}
					</main>
					<aside className="col ml-3 info col-sm">
						<PersonalInformation/>
						<SkillsContainer/>
					</aside>
				</div>
			</div>
		)
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
