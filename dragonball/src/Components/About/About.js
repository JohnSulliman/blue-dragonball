import { Component } from "react";

//Componets
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//Assents



export class About extends Component {
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='' />
                    <Card.Body>
                        <Card.Title>Jonathan Sulliman</Card.Title>
                        <Card.Text>
                            Projeto realizado juntamente com a professora Isabella para a aula
                            de Front-End da Blue-EdTech.
                        </Card.Text>
                        <Link className='btn btn-info' 
                        to={{pathname: 'https://github.com/JohnSulliman'}} target='_blank'>GitHub</Link>
                    </Card.Body>
                </Card>
            </>
        );
    }
}