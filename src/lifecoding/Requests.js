//AJAX
//XMLHTTPRequest
//Fetch API

// const promise = fetch(url, {options})
import React from "react";


const URL = 'https://jsonplaceholder.typicode.com/posts'

const Requests = () => {

    const [array, setArray] = React.useState([])

    React.useEffect(() => {
        getRequest()
    },[])

    const getRequest = async () => {
        const response = await fetch(URL)
        console.log({response})
        if(response.ok){
            const result = await response.json()
            console.log({result})
            setArray(result)
        }
    }

    return(
        <div>Array: {array.map(elem => (
            <p key={elem.id}>{elem.title}</p>
        ))}</div>
    )
}

export default Requests