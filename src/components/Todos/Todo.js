import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Logout from '../Auth/Logout';
import axios from 'axios'
import { Jumbotron, Container } from 'react-bootstrap';
import sampleTodos from '../../Utilities/sampleTodos'
import SingleTodo from './SingleTodo';
import './todo.css'


export default function Todo() {
    const {currentUser} = useAuth();
    
    const [todos, setTodos] = useState(sampleTodos);

    //READ
    const getTodos = () =>{
        axios.get('http://localhost:52521/api/todo').then((response) => {
            setTodos(response.data);
        })
    }


    useEffect(() => {
        getTodos();
    }, []);


    return (
        <section className="todo">
            <Jumbotron className="bg-dark m-2 text-white">
                <h1 class="text-center">Todo Dashboard</h1>
            </Jumbotron>
            <Container>
                <table className="table table-dark table-striped table-hover ">
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Complete</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(x =>
                            <SingleTodo key={x.TodoId} todo={x} />
                        )}
                    </tbody>
                </table>
            </Container>
            {currentUser && <Logout/>}
        </section>
    )
}
