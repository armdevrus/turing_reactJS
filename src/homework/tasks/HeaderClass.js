import React from "react";
import PropTypes from "prop-types"

class HeaderClass extends React.Component{
    render() {
        return(
            <>
                <h1>Hello, {this.props.text}!
                    You have a {this.props.colour} car!</h1>
            </>
        )
    }
}
export default HeaderClass

HeaderClass.propTypes = {
    text: PropTypes.string,
    colour: PropTypes.string
}