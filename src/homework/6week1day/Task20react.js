import React, {createRef} from "react";
import {toHaveStyle} from "@testing-library/jest-dom/dist/matchers";
import {render} from "@testing-library/react";
import RefClassComponent from "./task/RefComponentClass";
import RefComponent from "./task/RefComponent";
import RefCompInputButton from "./task/RefCompInputButton";
import RefCompInputButtonClass from "./task/RefCompInputButtonClass";
import ChangeSizeText from "./task/ChangeSizeText";
import ChangeSizeTextClass from "./task/ChangeSizeTextClass";
import ScrollContainer from "./task/ScrollContainer";
import ScrollContainerClass from "./task/ScrollContainerClass";


const Task20react = ()=> {
    return(
        <>
            <RefComponent/>
            <RefClassComponent/>
            <RefCompInputButton/>
            <RefCompInputButtonClass/>
            <ChangeSizeText/>
            <ChangeSizeTextClass/>
            <ScrollContainer/>
            <ScrollContainerClass/>
        </>
    )
}

export default Task20react



