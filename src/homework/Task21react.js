import React from "react";
import Image from "./tasks/Image";
import Button from "./tasks/Button";
import HeaderClass from "./tasks/HeaderClass";
import LinkClass from "./tasks/LinkClass";
import UnorderedList from "./tasks/UnorderedList";
import SmartButton from "./tasks/SmartButton";

const Task21react = () => {

    const handleOnClickShowMessage = ()=> {
        alert("Hello, friend!")
    }
    return(
        <>
            <Image
                src="https://phantom-marca.unidadeditorial.es/f78a45eed23b2b510110d7487a3eaa12/crop/268x219/1257x776/resize/1320/f/jpg/assets/multimedia/imagenes/2021/07/23/16270444581760.jpg"
                width={100}
                height={100}/>
            <Button onClick={handleOnClickShowMessage} text="Click me"/>
            <HeaderClass text="Ivan" colour="red"/>
            <LinkClass href="https://trello.com/user54400190/boards" textClass="my board on the trello" isUnderlined={false}/>
            <UnorderedList listItems={["phone", "computer", "car", "train", "calculator"]}/>
            <SmartButton isButton={true}/>
        </>
    )
}

export default Task21react