import React from "react";
import {StyledText} from "../../ui/Text";
import {motion} from "framer-motion";
import {activites} from "../../assets/data";
import {ActivityCardContainer} from "../../ui/components/Card";
import {getMediaElement} from "../../util";
import {DELAY_PER_CHILDREN_IN_SEC} from "./../../constants/index"

function Activity() {
    return <>
        <h2 className="mb-5">Activities</h2>
        <ActivityList/>
    </>
}


function ActivityList() {
    return activites.map((activity, index) => (
        <ActivityCard key={index}
                      {...activity}
                      index={index}
                      media={getMediaElement(activity.media, activity.title)}/>)
    );
}


function ActivityCard({index, date, title = '', link = '', technologies = [], description = [], media = null}) {
    const variants = {
        visible: {opacity: 1, y: '-2.2rem', x: '-1rem'},
        hidden: {opacity: 0},

    }


    return (
        <ActivityCardContainer className='mb-5'>
            <motion.div style={{position: 'absolute'}}
                        transition={{delay: index * DELAY_PER_CHILDREN_IN_SEC}}
                        variants={variants}
                        animate="visible"
                        initial="hidden">
                <h5 className="m-0">
                    <StyledText color={'primary'}>Date: {date}</StyledText>
                </h5>
            </motion.div>
            <div className="row">
                <div className="col-12 d-flex col-md-4" style={{zIndex: 2}}>
                    {media}
                </div>
                <div className="col-12 col-md-8 ">
                    <div className="content p-md-0  ">
                        <h2 className="font-weight-light">{title}</h2>
                        {description.map((p, i) => <p key={i} className='description'>{p}</p>)}
                        <div className="d-flex mt-5">
                            <div style={{flex: 1}}>
                                {link &&
                                <a target="_blank" rel="noopener noreferrer" href={link}><StyledText color={'primary'}>Learn
                                    More</StyledText></a>}
                            </div>
                            <div className='align-self-end'>
                                <span>  {technologies.map(tech => tech.name).join("|")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ActivityCardContainer>
    )

}


export default Activity
