import React, {useRef, useState} from 'react'
import {Form, Card, Button} from 'react-bootstrap'


export default function CategoryCreate(props) {
    
    //references
    const nameRef = useRef();
    const descRef = useRef();

    //validation hooks
    const [valSummary, setValSummary] = useState('');
    const [nameVal, setNameVal] = useState('');
    const [descVal, setDescVal] = useState('');
    const validate = (category) => {
        let name = category.Name;
        let desc = category.Description;

        name.length > 50 ? setNameVal('**Max 50 Characters**'): setNameVal('');
        desc.length > 50 ? setDescVal('**Max 50 Characters**'): setDescVal('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //temp object
        const category = {
            Name: nameRef.current.value,
            Description: descRef.current.value
        };

        //validate the temp object
        validate(category);

        //If name and description validate create category if not have user fix issues
        if(nameVal === '' && descVal === ''){
            props.addCategory(category);
        }
        else
        {
            setValSummary('Correct the inputs below to submit the Category');
        }
    }
    
    
    return (
        <article className="m-2 justify-content-center align-items-center">
            <Card bg="dark">
                <Form onSubmit={handleSubmit} className="p-4 bg-light text-dark">
                    <h1 className="m-2">Create New Category</h1>
                    <br/>
                    {valSummary !== '' &&
                        <div className="alert alert-danger">
                            <strong>{valSummary}</strong>
                        </div>
                    }
                    <Form.Group id="name" className="text-center">
                        <label>Name</label>
                        <Form.Control className="w-50 col-md-4" type="text" ref={nameRef} required />
                        <div className="text-danger">{nameVal}</div>
                    </Form.Group>
                    <Form.Group id="desc" className="text-center">
                        <label>Description</label>
                        <Form.Control className="w-50 col-md-4" as="textarea" type="text" ref={descRef} required />
                        <div className="text-danger">{descVal}</div>
                    </Form.Group>
                    <Form.Group id="button" className="text-center w-100">
                        <button type="submit" className="btn btn-info">Create</button>
                    </Form.Group>
                </Form>
            </Card>
        </article>
    )
}
