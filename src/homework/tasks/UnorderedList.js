import React from "react";
import PropTypes from "prop-types"

const UnorderedList = ({listItems}) => {
    return(
        <>
            <ul>
                {listItems.map(elem => <li key={listItems.length + 1}>{elem}</li>)}
            </ul>
        </>
    )
}

UnorderedList.propTypes = {
            listItems: PropTypes.array.isRequired
}

export default UnorderedList