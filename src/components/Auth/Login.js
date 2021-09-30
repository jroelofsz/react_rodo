import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Container, Card, Jumbotron } from 'react-bootstrap'
import { useHistory } from 'react-router'

export default function Login() {
    //Import the authenticate function
    const {authenticate} = useAuth();
    const history = useHistory();
    
    async function handleAuth(){
        //Wait for the authenticate then push user back to the home page
        await authenticate();
        history.push("/");
    }
    
    return (
        <div className="login">
            <Jumbotron className="text-center">
                <h1>Welcome to Todos</h1>
            </Jumbotron>
            <Container>
                <Card className="m-2 border-dark text-center">
                    <Card.Header className="bg-dark text-white">
                        <h2>Login for full functionality</h2>
                    </Card.Header>
                    <Card.Body>
                        <button onClick={() => handleAuth()} className="btn btn-dark">Login w/ Github</button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}
