import React from "react";
import {useEffect, useState} from 'react'

const App = () => {
    // Обязательно нужно создать стэйт
    const [todo, setTodo] = useState([])

    // Функция, которая загружает todo list
    const loadTodo = () => {
        // Напишите код, который загружает данные с сервера
    }

    // Поскольку загрузка - побочный эффект, загрузку выполняем
    // в useEffect
    useEffect(() => {
        loadTodo();
    }, [])


    return (
        <>
        </>
        // Напишите функцию рендера
    )
}

export default App
