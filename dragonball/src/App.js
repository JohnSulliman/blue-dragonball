import React from 'react';

//Components
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import {Create} from './Components/Create/Create';
import {ReadAll} from './Components/ReadAll/ReadAll';
import {ReadSingle} from './Components/ReadSingle/ReadSingle';
import {Update} from './Components/Update/Update';
import {DeleteAll} from './Components/DeleteAll/DeleteAll';
import {DeleteSingle} from './Components/DeleteSingle/DeleteSingle';
import {About} from './Components/About/About';

//Assets
import logo from './Img/Logo.png'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/App.scss'



function App() {
  return (
    <>
      <div className='logoBar'>
        <img className='logoImg' src={logo} alt='Logo Dragonball Z'/>
      </div>

      <Navbar className='justify-content-center' expand='sm'>
        <Nav>
          <Nav.Link id='link-style' href='/'>Início</Nav.Link>
          <Nav.Link id='link-style' href='/create'>Criar</Nav.Link>
          <Nav.Link id='link-style' href='/delete-all'>Deletar Tudo</Nav.Link>
          <Nav.Link id='link-style' href='/about'>Sobre</Nav.Link>
        </Nav>
      </Navbar>

      <Container className='app-container'>
        <Row>
          <Col>
            <Switch>
              <Route path='/create' component={Create}></Route>
              <Route path='/' exact={true} component={ReadAll}></Route>
              <Route path='/view/:id' component={ReadSingle}></Route>
              <Route path='/update/:id' component={Update}></Route>
              <Route path='/delete-all' component={DeleteAll}></Route>
              <Route path='/delete/:id' component={DeleteSingle}></Route>
              <Route path='/about' component={About}></Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
