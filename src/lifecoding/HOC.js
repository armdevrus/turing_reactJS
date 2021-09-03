// HOC - Higher-order Component
import React from "react";
import {dataSource} from "./DataSource";

const AddUserForm = () => {

    const handleOnSubmitForm = (event) => {
        event.preventDefault()

        const name = event.target.userName.value
        const age = event.target.userAge.value

        console.log('handleFormSubmit')

        // false || false = false
        // true || false = true
        // false || true = true
        // true || true = true

        // false && false = false
        // true && false = false
        // false && true = false
        // true && true = true

        // !(false && false) = true
        // !(true && false) = true
        // !(false && true) = true
        // !(true && true) = false

        // !false || !false = true
        // !true || !false = true
        // !false || !true = true
        // !true || !true = false

        if (!(name && age)) {
            console.log("Name and age doesn't exist 1")
            return
        }
        if (!name || !age) {
            console.log("Name and age doesn't exist 2")
            return
        }

        if (!(name && age)) return

        dataSource.addUser({name, age})
    }

    return (
        <form onSubmit={handleOnSubmitForm}>
            <div>
                <input name="userName"/>
            </div>
            <div>
                <input name="userAge"/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const UsersList = () => {

    const [users, setUsers] = React.useState(dataSource.getUsers())

    React.useEffect(() => {
        const handleDataChange = (newUsers) => {
            setUsers(newUsers)
        }

        dataSource.addListener(handleDataChange)

    }, [])

    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.name}-{user.age}
                </li>
            ))}
        </ul>
    )
}

const UsersCount = () => {

    const [usersCount, setUsersCount] = React.useState(dataSource.getUsers().length)

    React.useEffect(() => {
        const handleDataChange = (newUsers) => {
            setUsersCount(newUsers.length)
        }

        dataSource.addListener(handleDataChange)

    }, [])

    return (
        <div>{usersCount}</div>
    )
}

const dataSourceWrapper = (WrappedComponent) => {
    return () => {
        const [users, setUsers] = React.useState(dataSource.getUsers())

        React.useEffect(() => {
            const handleUsersChange = (newUsers) => {
                setUsers(newUsers)
            }
            dataSource.addListener(handleUsersChange)
        })
        return <WrappedComponent users={users}/>
    }
}

const UsersCountSimple = ({users}) => {
    return (
        <div>{users.length}</div>
    )
}

const UsersListSimple = ({users}) => {
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.name}-{user.age}
                </li>
            ))}
        </ul>
    )
}

const WrappedUsersList = dataSourceWrapper(UsersListSimple)
const WrappedUsersCount = dataSourceWrapper(UsersCountSimple)

const Main = () => {
    return (
        <>
            <AddUserForm/>
            <UsersList/>
            <UsersCount/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <WrappedUsersList/>
            <WrappedUsersCount/>
        </>
    )
}

export default Main