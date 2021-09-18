import React from "react";

const VisibleSquare = () => {

    const[isShowSquare, setIsShowSquare] = React.useState(false)
    const handleOnChangeInputSquare = (event) => {
        setIsShowSquare(event.target.checked)
    }
    return(
        <>
            <input type="checkbox" onChange={handleOnChangeInputSquare} checked={isShowSquare}/>
            {isShowSquare ? null : <Square/>}
        </>
    )
}
const Square = () => <div style={{width:'100px', height: '100px', backgroundColor: 'red'}}>Red square</div>

export default VisibleSquare