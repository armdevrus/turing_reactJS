import {useEffect, useState} from 'react'
import './User.css'

const baseURL = 'https://jsonplaceholder.typicode.com/users/'

const User = () => {
    // Выделяем стэйт для данных о пользователе
    const [user, setUser] = useState({})
    const [input, setInput] = useState('')

    // Создааем функцию для загрузки данных
    const loadUser = async (id) => {
        const response = await fetch(`${baseURL}${id}`)

        if (response.ok) {
            const result = await response.json()
            console.log(result)
            setUser(result)
        }
        // Напишите функцию, которая по id загружает данные о пользователе
    }

    // Загрузка - это побочный эффект. Выполняем ее в момент
    // внедрения на страницу
    useEffect(() => {
        // Для проверки работы загрузим пользователя с id=3
        loadUser(3)
    }, [])

    const handleInputValue = (event) => {
        setInput(event.target.value)
    }

    const handleChangeUser = () => {
        loadUser(input)
    }
    return (
        <table>
            <caption>Users</caption>
            <thead>
            <tr>
                <th>Name</th>
                <th>User_Name</th>
                <th>Telephone</th>
                <th>Web_site</th>
                <th>Company_Name</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
            </tr>
            </tbody>
            <input type="number" onChange={handleInputValue} value={input}/>
            <button onClick={handleChangeUser}>Change user</button>
        </table>
        // Напишите, как должны отображаться эти данные
    )
}

export default User