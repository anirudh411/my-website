import React from "react";
import "./style.scss"
import {Section, SectionHeading} from "../../ui/SectionHeading";
import {Progress} from "../../ui/ProgressBar"
import {data} from "../../assets/data";
import {StyledText} from "../../ui/Text";
import {Button} from "../../ui/button";


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
        body = <a title={simpleText} onMouseEnter={handleTextOnHover} rel="noopener noreferrer" target="_blank"
                  href={link}>{simpleText} </a>;
    } else {
        body = <StyledText dangerouslySetInnerHTML={{__html: simpleText}}/>;
    }
    return body;
}

function ResumeElements(item) {
    switch (item.type) {
        case "h1":
            return <div className="row flex-column">
                <div className="col-sm-12">{
                    item.text.map((text, i) => <h1 key={i}
                                                   className="m-0">{text}</h1>)}
                </div>
            </div>;
        case "h2":
            return <div className="row flex-column mb-1">
                <div className="col-sm-12">
                    {item.text.map((text, i) => <h2 key={i} className="mb-1">{text}</h2>)}
                </div>
            </div>;
        case "h3":
            return item.text.map((text, i) => <h3 key={i}
                                                  className="resume-headline">{text}</h3>);
        case "h4":
            return <div className="mt-3 mb-0">
                {item.text.map((text, i) => <h4 key={i}
                                                className="resume-headline m-0"><Text
                    text={text}/>
                </h4>)}
            </div>
        default:
            return null
        case "section":
            return <Section>
                <SectionHeading className="section--heading col-sm-12 mb-2 py-1 d-flex align-items-center">
									<span className="logo">
										<i className="material-icons">{item.leftIcon}</i>
									</span>
                    <span>{item.text}</span>
                </SectionHeading>
            </Section>;
        case "p":
            return <div className="row my-2">
                {item.text.map((text, i) => <p key={i}
                                               className="col-sm-12 m-0 resume-headline">
                    <Text
                        text={text}/></p>)}
            </div>
    }

}

export const ResumePages = () => {
    let totalPages = lastDataIndex(170);
    return <div className="row resume">
        <div className="col-12 col-md-8">
            {totalPages.map((sliceValue, index, arr) => {
                let dataArray = [];
                if (index === 0) {
                    dataArray = data.slice(0, arr[1]);
                } else if (index === arr.length - 1) return null;
                else dataArray = data.slice(arr[index], arr[index + 1]);
                return <React.Fragment key={index}>
                    <main>
                        {dataArray.map((item, index) => <ResumeElements key={index} {...item}/>)}
                    </main>
                    {/*<div className="html2pdf__page-break"></div>*/}
                </React.Fragment>
            })}
        </div>
        <div className="col-12 col-md-4">
            <PersonalInformation/>
            <SkillsContainer/>
        </div>
    </div>
}
export const PersonalInformation = () => {
    const {personal_information} = React.useContext(ResumeContext);
    return <div className="row resume-body mt-2 m-md-0">
        <SectionHeading className="section--heading col-sm-12 mb-2 py-1 d-flex align-items-center">
									<span className="logo">
										<i className="material-icons">work</i>
									</span>
            <span>Personal Info</span>
        </SectionHeading>
        <div className="col-sm-12">
            {personal_information.data.length > 0 && personal_information.data.map(({title, description}) => {
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
        <SectionHeading className="section--heading col-sm-12 mb-2 py-1 d-flex align-items-center">
									<span className="logo">
										<i className="material-icons">color_lens</i>
									</span>
            <span>Skills</span>
        </SectionHeading>
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

const ResumeContainer = ({children, data}) => {
    if (data) {
        return <ResumeContext.Provider value={data}>
            <div className="row">
                <div className="col-12 col-md-2  d-flex flex-column">
                    <Button outlined
                            onClick={async () => window.open(require("../../assets/anirudh_resume.pdf"))}>Download</Button>
                </div>
                <div id="resume" className="col">
                    <ResumePages/>
                </div>
            </div>
            {children}
        </ResumeContext.Provider>
    } else return <div>Nothing interesting here</div>
}
export default ResumeContainer;
