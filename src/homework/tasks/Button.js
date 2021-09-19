import React from "react";
import PropTypes from 'prop-types'


const Button = ({text, onClick}) => {
    return(
        <>
            <Button onClick={onClick} text={text}/>
        </>
    )
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
export default Button