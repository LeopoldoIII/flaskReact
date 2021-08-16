import React, { useState, useEffect} from 'react'
import { Delete } from '../Components/Delete/delete'

import {
    Link,
    useParams
} from "react-router-dom"

export const Show = () => {
    
    const { id } = useParams()
    const [todo, setTodo] = useState([])

    useEffect(()=>{
        fetch(`/api/${id}`)
        .then(respose => respose.json())
        .then(data => setTodo(data))
    },[id])

    return(
        <div>
           {todo.length > 0 && todo.map(data => <div key=''>{data.content}</div>)} 
           <Delete id={id}/>
           <hr></hr>
           <Link to='/'> Back to todos </Link>
        </div>
    )

} 