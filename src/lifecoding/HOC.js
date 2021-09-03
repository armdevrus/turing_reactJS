// HOC - Higher-order Component
import React from "react";
import {dataSource} from "./DataSource";

const AddUserForm = () => {

    const handleOnSubmitForm = (event) => {
        event.preventDefault()

        const name = event.target.userName.value
        const age = event.target.userAge.value

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

const UserList = () => {

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
            <UserList/>
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