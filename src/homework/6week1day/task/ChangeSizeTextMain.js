import React from "react";
import ChangeSizeTextClass from "./ChangeSizeTextClass";

class ChangeSizeTextMain extends React.Component {

    arrayClass = [100, 200, 300]

    render() {
        const text = ''
        return(
            <>
                {/*{this.arrayClass.map()}*/}
                <ChangeSizeTextClass/>
            </>
        )
    }
}

export default ChangeSizeTextMain