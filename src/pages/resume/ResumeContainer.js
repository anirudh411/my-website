import React from "react";
import "./style.scss"
import { Progress, ProgressBar, ProgressThumb } from "../../ui/ProgressBar";
import html2canvas from "html2canvas";
import * as jsPDF from 'jspdf';
import { Section, SectionBody, SectionHeading } from "../../ui/SectionHeading";
import { useInView } from 'react-intersection-observer'


export const ResumeHeader = () => {
	const { name, designation, headline } = React.useContext(ResumeContext);
	return (
		<div className="row flex-column">
			<div className="col-sm-12">
				<h1 className="m-0">{name}</h1>
				<h2>{designation}</h2>
				{headline && <p>{headline}</p>}
			</div>
		</div>)
};

export const ResumeMainSection = (props) => {
	const { title, logo, data, expandable = false } = props.data;
	const [isExpanded, setExpanded] = React.useState(false);
	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0,
	})
	React.useEffect(() => {
		console.log("in view",ref.current);
	}, [inView])


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
		<Section ref={ref} isExpanded={isExpanded} expandable={expandable} className="row  my-2">
			<SectionHeading {...sectionHeadingProps()}
				className="section--heading col-sm-12 py-1 d-flex align-items-center">
				<span className="logo">
					<i className="material-icons">{logo}</i>
				</span>
				<span>{title}{}</span>
			</SectionHeading>
			<SectionBody isExpanded={isExpanded}>
				<table className=" mt-2">
					{data && data.map(({ time, title, subTitle, description }) => <tbody key={title}>
						<tr>
							{time && <td key={time} width="25%"><b>{time}</b></td>}
							<td className="" key={title} width="75%">
								<b>{title}</b>
								{subTitle && <p>{subTitle}</p>}
								{description.title && <div>
									<b>{description.title}</b>
								</div>}
								{description.data.length && <ul>
									{description.data.map(item => <li key={item}>{item}</li>)}
								</ul>}
							</td>
						</tr>
					</tbody>
					)}
				</table>
			</SectionBody>
		</Section>)
};


export const ResumeContainer = () => {
	const { main } = React.useContext(ResumeContext);
	return (<div id="resume" className="resume">
		<div className="row">
			<main className="col-sm-8">
				<ResumeHeader />
				{main.map(section => <ResumeMainSection key={section.title} data={section} />)}
			</main>
			<aside className="col ml-3 info col-sm">
				<PersonalInformation />
				<SkillsContainer />
			</aside>
		</div>
	</div>
	)
};
export const PersonalInformation = () => {
	const { personal_information } = React.useContext(ResumeContext);
	return <div className="row ">
		<div className="col-sm-12 d-flex align-items-center info--header">
			<span className="logo">
				<i className="material-icons">work</i>
			</span>
			<span>Personal Info</span>
		</div>
		<div className="col-sm-12">
			{personal_information.data.length && personal_information.data.map(({ title, description }) => {
				return <div key={title} className="my-2">
					<div><b>{title}</b></div>
					<div className="text-w">{description}</div>
				</div>
			})}
		</div>
	</div>

};

export const SkillsContainer = () => {
	const { skills } = React.useContext(ResumeContext);
	return <section className="row section skills-container">
		<div className="col-sm-12 py-1 my-4 d-flex align-items-center info--header">
			<span className="logo">
				<i className="material-icons">color_lens</i>
			</span>
			<span>{'Skills'}</span>
		</div>
		<div className="col-sm-12">
			<ul>{skills.map((skill) => {
				return <React.Fragment key={skill.title}>
					<li className="my-2 pl-0">{skill.title}</li>
					<Progress maxValue={skill.level} /></React.Fragment>
			})}
			</ul>
		</div>
	</section>
};

const ResumeContext = React.createContext();

export default ({ children, data }) => {
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
							image: { type: 'jpeg', quality: .98 },
							html2canvas: { scale: 1.2 },
							jsPDF: { unit: 'px', format: 'a4', orientation: 'p' }
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
					<ResumeContainer />
				</div>

			</div>
			{children}
		</ResumeContext.Provider>
	} else return <div>Nothing interesting here</div>


}
