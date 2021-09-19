import React from "react";
import PropTypes from "prop-types"

class LinkClass extends React.Component{
    render() {
        return(
            <>
                <a>{this.props.href}{this.props.textClass}{this.props.isUnderlined}</a>
            </>
        )
    }
}

LinkClass.propTypes = {
    href: PropTypes.string.isRequired,
    textClass: PropTypes.string.isRequired,
    isUnderlined: PropTypes.bool
}
export default LinkClass