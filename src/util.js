import {motion} from "framer-motion";
import React from "react";

const getMediaElement = ({type, data}, title) => {
    switch (type) {
        case 'image':
            return < motion.img
                transition={{originX: 0}}
                whileTap={{scale: 2, marginRight: 10, zIndex: 999, marginLeft: 10}}
                whileHover={{scale: 2, marginRight: 10, zIndex: 999, marginLeft: 10}}
                src={data[0]} alt={title}
                style={{zIndex: 2}}
            />

        case 'iframe':
            return (
                <motion.iframe frameBorder="none" src={data[0]} title={type} style={{border: 0}}>
                    <motion.div initial={{opacity: 0}} whileHover={{opacity: 1}}>
                    </motion.div>
                </motion.iframe>
            )
        default:
            return null;


    }
}


export {
    getMediaElement
}
