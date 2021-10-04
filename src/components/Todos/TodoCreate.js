import React, {useRef, useState} from 'react'
import {Form, Card, Button} from 'react-bootstrap'
import './todo.css'


export default function TodoCreate(props) {
    
    const actionRef = useRef();
    const doneRef = useRef();
    const catRef = useRef();
    

    const [valSummary, setValSummary] = useState('');
    const [actionVal, setActionVal] = useState('');
    const validate = (todo) => {
        let action = todo.Action;

        action.length > 1000 ? setActionVal('** Max 1000 characters **') : setActionVal('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            Action: actionRef.current.value,
            Done: false,
            CategoryId: catRef.current.value
        }

        validate(todo);

        if(actionVal === ''){
            props.addTodo(todo);
        }
        else{
            setValSummary('Correct the inputs below to submit the Todo item')
        }
    }
    
    return (
        <article className="m-2 text-dark align-items-center todoCreate">
            <Card className="bg-light">
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <h1>Create new Todo</h1>
                        <br/>
                        {valSummary !== '' &&
                            <div className="alert alert-danger">
                                <strong>{valSummary}</strong>
                            </div>
                        }
                        <Form.Group id="action" className="text-center">
                            <label>Task</label>
                            <Form.Control className="w-50 col-md-4" type="text" ref={actionRef} required/>
                            <div className="text-danger">{actionVal}</div>
                        </Form.Group>
                        <Form.Group id="cat" className="text-center">
                            <label>Category</label>
                            <select className="form-control w-50 col-md-4" ref={catRef} required>
                                {props.categories.map(cat => 
                                    <option key={cat.CategoryId} value={cat.CategoryId}>
                                        {cat.Description}    
                                    </option>
                                )}
                            </select>
                        </Form.Group>
                        <button className="btn btn-info" type="submit">Create</button>
                    </Form>
                </Card.Body>
            </Card>
        </article>
    )
}
