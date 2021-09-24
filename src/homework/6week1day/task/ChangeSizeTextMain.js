import React from "react";
// import ChangeSizeTextClass from "./ChangeSizeTextClass";
import ChangeSizeText from "./ChangeSizeText";

const ChangeSizeTextMain = ({itemProp, text}) => {

    const arrayClass = [100, 200, 300]

    return (
        <>
            {arrayClass.map(item => <ChangeSizeText
                item={itemProp}
                text={text}/>)}
        </>
    )
}

export default ChangeSizeTextMain