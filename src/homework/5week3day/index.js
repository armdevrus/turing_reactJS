import React from "react";

const List = () => {

    const handleOnClick = (number) => {
        alert(`Text number ` + number)
    }

    return(
        <>
            <ul>
                <li>Text number one</li><button onClick={() => {handleOnClick(`one`)}}>Text number one</button>
                <li>Text number two</li><button onClick={() => {handleOnClick(`two`)}}>Text number two</button>
                <li>Text number three</li><button onClick={() => {handleOnClick(`three`)}}>Text number three</button>
            </ul>
        </>
    )
}

const ListPrompt = () => {

    const [elements, setElements] = React.useState([
        {id: 1, name: `Ivan`},
        {id: 2, name: `Vladimir`},
        {id: 3, name: `Olga`}
    ])

    const handleOnClick = () => {
        setElements([...elements, {id: elements.length + 1, name: prompt('')}])
    }
    return(
        <>
            <ul>
                {elements.map((element) => {return <li key={element.id}>{element.name}</li>})}
            </ul>
            <button onClick={handleOnClick}>Add new element</button>
        </>
    )
}

export default ListPrompt