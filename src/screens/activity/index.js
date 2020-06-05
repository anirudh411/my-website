import React from "react";
import styled from "styled-components";
import { StyledText } from "../../ui/Text";
import { motion } from "framer-motion";
import { activites } from "../../assets/data";

function Activity() {
    return <>
        <h2 className="mb-5">Activities</h2>
        <ActivityList />
    </>
}

const getMediaElement = ({ type, data }) => {
    switch (type) {
        case 'image':
            return < motion.img
                whileTap={{ scale: 2, marginRight: 10, zIndex: 999, marginLeft: 10 }}
                whileHover={{ scale: 2, marginRight: 10, zIndex: 999, marginLeft: 10 }}
                src={data[0]} alt="" />

        case 'iframe': return <motion.iframe frameBorder="none" src={data[0]} title={type} />
        default: return null;



    }
}

function ActivityList() {
    return activites.map((activity, index) => <ActivityCard {...activity} key={index} media={getMediaElement(activity.media)} />)
}

const ActivityCardContainer = styled(motion.div)`
    max-width: 100%;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    background: ${props => props.theme.background.paper};
    border-radius: 4px;
    padding: 1rem;
    position: relative;
    
     img ,iframe{
      width: 100%;
      height: auto;
      object-fit: contain;
    }
    
    .content {
    
      .description {
         color: ${props => props.theme.text.secondary};
      }
    }
`

function ActivityCard({ date, title = '', link = '', technologies = [], description = [], media = null }) {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return <ActivityCardContainer initial="hidden"
        animate="visible"
        className='mb-5'
        variants={variants}>
        <motion.div style={{ position: 'absolute' }} animate={{ y: '-2.2rem', x: '-1rem' }} inital={{ y: 0 }}>
            <h5 className="m-0">
                <StyledText color={'primary'}>Date: {date}</StyledText>
            </h5>
        </motion.div>
        <div className="row">
            <div className="col-12 d-flex col-md-4" style={{ zIndex: 2 }}>
                {media}
            </div>
            <div className="col-12 col-md-8 ">
                <div className="content p-md-0  ">
                    <h2 className="font-weight-light">{title}</h2>
                    {description.map((p, i) => <p className='description'>{p}</p>)}
                    <div className="d-flex mt-5">
                        <div style={{ flex: 1 }}>
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

}


export default Activity
