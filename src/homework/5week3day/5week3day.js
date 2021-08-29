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
        {id: 3, name: `Olga`},
        {id: 4, name: `Petr`},
    ])

    const index = elements.length / 2

    let idForFunc = 5
    const handleAddPromptAfter = () => {
        idForFunc += 1
        // console.log(idForPromptAfter)
        setElements([...elements, {id: idForFunc, name: prompt('')}])
    }
    const handleAddPromptBefore = () => {
        idForFunc += 2
        setElements([{id: idForFunc, name: prompt('')},...elements])
    }
    const handleAddPromptMiddle = () => {
        idForFunc += 3
        setElements([...elements.slice(0, index), {id: idForFunc, name: prompt('')},...elements.slice(index)])
    }
    const handleDeleteElementAfter = () => {
        idForFunc += 4
        setElements([...elements.splice(0,elements.length - 1), {id: idForFunc}])
    }
    const handleDeleteElementBefore = () => {
        idForFunc += 5
        setElements([...elements.splice(1,elements.length),{id: idForFunc}])
    }
    let elemMiddle;
    const handleDeleteElementMiddle = () => {
        idForFunc += 6
        elemMiddle = [...elements.splice(elements.length/2,1)]
        setElements([...elements],{id: idForFunc})
    }
    console.log([...elements])
    return(
        <>
            <ul>
                {elements.map(elem => <li key={elem.id}>{elem.name}</li>)}
            </ul>
            <button onClick={handleAddPromptAfter}>Add new element after </button>
            <button onClick={handleAddPromptBefore}>Add new element before </button>
            <button onClick={handleAddPromptMiddle}>Add new element in the middle</button>
            <button onClick={handleDeleteElementAfter}>Delete element after</button>
            <button onClick={handleDeleteElementBefore}>Delete element before </button>
            <button onClick={handleDeleteElementMiddle}>Delete element in the middle</button>
        </>
    )
}

export default ListPrompt

