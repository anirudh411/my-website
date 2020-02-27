import React from "react";
import "./style.scss"
import { Progress, ProgressBar, ProgressThumb } from "../../ui/ProgressBar";
import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";
import * as jsPDF from 'jspdf';


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
	const { title, logo, data } = props.data;
	return (
		<section className="row section my-2">
			<div className="col-sm-12 py-1 d-flex align-items-center section--header">
				<span className="logo">
					<i className="material-icons">{logo}</i>
				</span>
				<span>{title}</span>
			</div>
			<div className="section--body">
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
			</div>
		</section>)
};


export const ResumeContainer = () => {
	const { main } = React.useContext(ResumeContext);

	return (
		<div id="resume" className="resume">
			<button onClick={() => {
				const element = document.getElementById('resume');
				//var element = document.getEl//ementById('element-to-print');
				var opt = {
					margin: 0,
					filename: 'myfile.pdf',
					image: { type: 'jpeg', quality: .98 },
					html2canvas: { scale: 1.2 },
					jsPDF: { unit: 'px', format: 'a4', orientation: 'p' }
				};
				console.log('clicked', element);
				html2canvas(element).then(function (canvas) {
					var pdf = new jsPDF("in", "pt", [canvas.width, canvas.height]);
					var imgData = canvas.toDataURL("image/jpeg", 2.0);
					pdf.addImage(imgData, 0, 0, canvas.width, canvas.height);
					pdf.save("report.pdf");

				});

			}}>Download
			</button>
			<div className="row">
				<main className="col-sm-8 ">
					<ResumeHeader />
					{main.map(section => <ResumeMainSection key={section.title} data={section} />)}
				</main>
				<aside className="ml-3 info col-sm">
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
	// React.useLayoutEffect(() => {
	// 	const animated = document.getElementsByClassName('progress-thumb');

	// 	[].slice.call(animated).forEach((animationElement) => {
	// 		animationElement.addEventListener('animationend', () => {
	// 			//console.log("animation ended", animationElement);
	// 			animationElement.style.width = '40%'
	// 		})
	// 	});
	// }, [])
	return <section className="row section skills-container">
		<div className="col-sm-12 py-1 my-4 d-flex align-items-center section--header">
			<span className="logo">
				<i className="material-icons">color_lens</i>
			</span>
			<span>{'Skills'}</span>
		</div>
		<div className="col-sm-12">
			{skills.map((skill) => {
				return <ul>
					<li className="my-2 pl-0">{skill.title}</li>
					<Progress maxValue={skill.level} />
				</ul>
			})}
			<ul>
			</ul>
		</div>
	</section>
};

const ResumeContext = React.createContext();

export default ({ children, data }) => {
	if (data) {
		return <ResumeContext.Provider value={data}>
			<ResumeContainer />
			{children}
		</ResumeContext.Provider>
	} else return <div>Nothing interesting here</div>


}
