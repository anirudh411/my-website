import {motion} from "framer-motion";
import React from "react";

function getMinimumVisibleKeyPathPerPage(obj, maximum) {
    let count = 0;
    let mainSectionAtMaximumCharacters = [];

    function countCharactersInObjectRecursively(obj = {}, keysArray) {
        for (const key in obj) {
            if (mainSectionAtMaximumCharacters.length) return mainSectionAtMaximumCharacters;
            if (["logo"].includes(key)) continue;
            if (typeof obj[key] === 'string') {
                const stringLength = obj[key].split(" ").length;
                if (count + stringLength > maximum) {
                    mainSectionAtMaximumCharacters = [...keysArray, key];
                    return;
                } else count = count + obj[key].split(" ").length;
            }
            if (typeof obj[key] === 'object') {
                if (!mainSectionAtMaximumCharacters.length) countCharactersInObjectRecursively(obj[key], [...keysArray, key]);
                else return mainSectionAtMaximumCharacters;
            }
        }
    }

    for (let i = 0; i < obj.length; i++) {
        countCharactersInObjectRecursively(obj[i], [i]);
    }
    return mainSectionAtMaximumCharacters;
}

export const tapAnimation = {
    whileTap: {scale: 0.95}
}
export const hoverAnimation = {
    whileHover: {scale: 1.1,opacity:1}
}

export {
    getMinimumVisibleKeyPathPerPage
}
