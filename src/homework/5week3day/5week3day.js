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

    const handleAddPromptAfter = () => {
        let idPromptAfter = "100a"
        setElements([...elements, {id: idPromptAfter + 1, name: prompt('')}])
    }
    const handleAddPromptBefore = () => {
        let idPromptBefore = "200b"
        setElements([{id: idPromptBefore + 1, name: prompt('')},...elements])
    }
    const handleAddPromptMiddle = () => {
        setElements([...elements.slice(0, index), {id: elements.length + "3c", name: prompt('')},...elements.slice(index)])
    }
    const handleDeleteElementAfter = () => {
        setElements([...elements.splice(0,elements.length - 1), {id: elements.length + "4d"}])
    }
    const handleDeleteElementBefore = () => {
        setElements([...elements.splice(1,elements.length),{id: elements.length + "5e"}])
    }
    let elemMiddle;
    const handleDeleteElementMiddle = () => {
        elemMiddle = [...elements.splice(elements.length/2,1)]
        setElements([...elements])
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

