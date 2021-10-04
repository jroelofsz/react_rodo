import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Logout from '../Auth/Logout';
import axios from 'axios'
import { Jumbotron, Container } from 'react-bootstrap';
import sampleTodos from '../../Utilities/sampleTodos'
import SingleTodo from './SingleTodo';
import './todo.css'
import TodoCreate from './TodoCreate';


export default function Todo() {
    const {currentUser} = useAuth();
    
    const [todos, setTodos] = useState(sampleTodos);
    const [categories, setCategories] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [effectTrigger, setEffectTrigger] = useState(false);

    //READ
    const getTodos = () =>{
        axios.get('http://localhost:52521/api/todo').then((response) => {
            setTodos(response.data);
        })
    }


    //CREATE

    const addTodo = (todo) => {
        axios.post('http://localhost:52521/api/todo', todo).then(response => {
            
        //Commented because this is unecessary code
        // let updatedTodos = todos;

            // updatedTodos.push(response.push);
            
            // setTodos(updatedTodos);

            setEffectTrigger(!effectTrigger);

            setShowCreateForm(false);
        })
    }

    const getCats = () =>{
        axios.get('http://localhost:52521/api/categories').then((response) => {
            setCategories(response.data);
        })
    }


    useEffect(() => {
        getTodos();
        getCats();
    }, [effectTrigger]);


    return (
        <section className="todo">
            <Jumbotron className="bg-dark m-2 text-white">
                <h1 className="text-center">Todo Dashboard</h1>
            {(currentUser.email === 'jroelofsz@outlook.com' && showCreateForm) ?
                <>
                    <button onClick={() => setShowCreateForm(false)} className="btn btn-danger">Cancel</button>
                    <TodoCreate
                                todos={todos}
                                categories={categories}
                                addTodo={addTodo}
                                setEffectTrigger={setEffectTrigger} />
                </> :
                <button onClick={() => setShowCreateForm(true)} className="btn btn-info">Create New Todo</button>
            }
            </Jumbotron>
            <Container>
                <table className="table table-light table-striped table-hover rounded mt-5 ">
                    <thead className="thead-dark">
                        <tr>
                            <th>Task</th>
                            <th>Complete</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(x =>
                            <SingleTodo key={x.TodoId} todo={x}/>
                        )}
                    </tbody>
                </table>
            </Container>
            {currentUser && <Logout/>}
        </section>
    )
}
