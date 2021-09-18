import React from "react";

const SizeText = () => {

    const firstSize = 8
    const secondSize = 16
    const thirdSize = 24
    const fourthSize = 36

    const [selectValue, setSelectValue] = React.useState(firstSize)
    const handleOnChangeSize = (event) => {
        setSelectValue(event.target.value)
    }
    console.log(selectValue)

    return(
        <>
            <p style={{fontSize:`${selectValue}px`}}>Some text here</p>
            <select onChange={handleOnChangeSize} value={selectValue}>
                <option value={firstSize}>{firstSize}</option>
                <option value={secondSize}>{secondSize}</option>
                <option value={thirdSize}>{thirdSize}</option>
                <option value={fourthSize}>{fourthSize}</option>
            </select>
        </>

    )
}
export default SizeText