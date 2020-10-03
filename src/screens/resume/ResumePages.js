import React from "react";
import "./style.scss"
import {Section, SectionHeading} from "../../ui/SectionHeading";
import {Progress} from "../../ui/ProgressBar"
import {data} from "../../assets/data";
import {StyledText} from "../../ui/Text";
import {Button} from "../../ui/button";
import {Paper} from "../../ui/components/Paper";
import {motion} from "framer-motion";
import {DELAY_PER_CHILDREN_IN_SEC} from "../../constants";

const ResumeContext = React.createContext();
//
//
// function lastDataIndex(n) {
//     let count = 0;
//     let pageIndex = [0];
//     for (let i = 0; i < data.length; i++) {
//         let item = data[i];
//         count = count + item.text.reduce((a, c) => a + c.split(" ").length, 0);
//         if (count > n) {
//             pageIndex.push(i);
//             count = 0;
//         }
//     }
//     pageIndex.push(data.length);
//     return pageIndex;
// }

function Text({text}) {


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
        body = <a title={simpleText} rel="noopener noreferrer" target="_blank"
                  href={link}>{simpleText} </a>;
    } else {
        body = <StyledText  dangerouslySetInnerHTML={{__html: simpleText}}/>;
    }
    return body;
}

function ResumeElements(item) {
    // const textClassNames = item.fontWeight ? 'font-weight-bold' : '';
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
                    <Text text={text}/></p>)}
            </div>
    }

}

export const ResumePages = () => {
    return <Paper className="row resume p-2 p-md-4">
        <div className="col-12 col-lg-8">
            <main>
                {data.map((item, index) => <ResumeElements key={index} {...item}/>)}
            </main>
        </div>
        <div className="col-12 col-lg-4">
            <PersonalInformation/>
            <SkillsContainer/>
        </div>
    </Paper>
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
            {personal_information.titles.length > 0 && personal_information.titles.map((title, index) => <ResumeElements
                key={index} {...title}/>)}
        </div>
    </div>

};

export const SkillsContainer = () => {
    const container = {
        hidden: {opacity: 1,},
        preserve3d: true,
        show: {
            transition: {
                staggerChildren: DELAY_PER_CHILDREN_IN_SEC - 0.4
            }
        }
    };
    const {skills} = React.useContext(ResumeContext);
    return <section className="row section skills-container ">
        <SectionHeading className="section--heading col-sm-12 mb-2 py-1 d-flex align-items-center">
									<span className="logo">
										<i className="material-icons">color_lens</i>
									</span>
            <span>Skills</span>
        </SectionHeading>
        <div className="col-sm-12 resume-body">
            <motion.ul variants={container} animate='show' initial='hidden'
                       className="pl-0 pl-md-3">{skills.map((skill) => {
                return <React.Fragment key={skill.title}>
                    <li className="my-2 pl-0">{skill.title}</li>
                    <Progress animate maxValue={skill.level}/></React.Fragment>
            })}
            </motion.ul>
        </div>
    </section>
};


const ResumeContainer = ({children, data}) => {
    if (data) {
        return <ResumeContext.Provider value={data}>
            <div className="row">
                <div className="col-4 ml-auto d-flex justify-content-end">
                    <Button animate={{x: 0, y: 0}} initial={{y: -100}}
                            transition={{when: 'beforeChildren'}}
                            outlined
                            className="my-4"
                            onClick={async () => window.open(require("../../assets/anirudh_resume.pdf"))}>Download</Button>
                </div>

                <div id="resume" className="col-12">
                    <ResumePages/>
                </div>
            </div>
            {children}
        </ResumeContext.Provider>
    } else return <div>Nothing interesting here</div>
}
export default ResumeContainer;
