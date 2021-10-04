import React, {useState, useEffect} from 'react'
import { useAuth } from '../../contexts/AuthContext'
import axios from 'axios'
import sampleCategories from '../../Utilities/sampleCategories'
import { Jumbotron, Container, Collapse, Button, CardBody, Card } from 'react-bootstrap'
import SingleCategory from './SingleCategory'
import CategoryCreate from './CategoryCreate'
import './Categories.css';

export default function Categories() {
    const {currentUser} = useAuth();
    const [categories, setCategories] = useState(sampleCategories);
    const [effectTrigger, setEffectTrigger] = useState(false);
    const [showCreateForm, setShowCreateForm] = useState(false);



    const getCats = () =>{
        axios.get('http://localhost:52521/api/categories').then((response) => {
            setCategories(response.data);
        })
    }

    //Create
    const addCategory = (category) => {
        axios.post("http://localhost:52521/api/categories", category).then(response => {
            //Temp object
            let updatedCategories = categories;
            //Add new cat
            updatedCategories.push(response.data);
            //New state data
            setCategories(updatedCategories);
            //Update the component
            setEffectTrigger(!effectTrigger);
            //Toggle the form close
            setShowCreateForm(false);
        })
    }




    useEffect(() => {
        getCats();
    }, [effectTrigger]);
    
    
    return (
        <section className="categories">
            <Jumbotron className="bg-dark m-2 text-white">
                <h1 className ="text-center">Categories Dashboard</h1>
            
            
            <div className="catCreate">
                {(currentUser.email ==='jroelofsz@outlook.com' && showCreateForm) ?
                <>
                    <button onClick={() => setShowCreateForm(false)} className="btn btn-danger">
                        Cancel
                    </button>
                    <CategoryCreate categories={categories} addCategory={addCategory} />
                </> :
                <button onClick={() => setShowCreateForm(true)} className="btn btn-info">Create New Category</button>
                }
            </div>
            </Jumbotron>
            <Container>
                <table className="table table-light table-striped table-hover rounded table-sm mt-5">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {categories.map(x => 
                        <SingleCategory key={x.CategoryId} category={x} />
                    )}  
                    </tbody>
                    
                </table>
            </Container>
                
            
        </section>
    )
}
