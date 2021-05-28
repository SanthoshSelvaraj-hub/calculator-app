// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import './App.css';
import Component from './components/Calculator/Calculator'

function App() {
  return (
    <div className="Calculator App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Calculator App</Navbar.Brand>
        {/* <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
      </Navbar>
      <Component></Component>
    </div>
  );
}

export default App;
