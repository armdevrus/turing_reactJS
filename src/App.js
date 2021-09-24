import React from "react";
import {useEffect, useState} from 'react'

const baseURL = 'https://jsonplaceholder.typicode.com/todos'

const App = () => {
    // Обязательно нужно создать стэйт
    const [todo, setTodo] = useState([])

    // Функция, которая загружает todo list
    const loadTodo = async () => {

        const response = await fetch(baseURL)

        if (response.ok) {
            const result = await response.json()
            console.log({result})
            setTodo(result)
        }
        // Напишите код, который загружает данные с сервера
    }

    // Поскольку загрузка - побочный эффект, загрузку выполняем
    // в useEffect
    useEffect(() => {
        loadTodo();
    }, [])


    return (
        <ul>
            {todo.map(elem => <li key={elem.id}>{elem.id}: {elem.title}</li>)}
        </ul>
        // Напишите функцию рендера
    )
}

export default App
