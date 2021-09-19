import React from "react";
import PropTypes from "prop-types"
import Button from "./Button";
import LinkClass from "./LinkClass";

const SmartButton = ({isButton, onClick, text, href, textClass, isUnderlined}) => {
    return(
        <>
            {isButton === true
                ? <Button onClick={onClick} text={text}/>
                : <LinkClass href={href} text={textClass} isUnderlined={isUnderlined}/> }
        </>
    )
}

SmartButton.propTypes = {
    isButton: PropTypes.bool.isRequired
}

export default SmartButton