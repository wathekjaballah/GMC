import './App.css';
import { Button , Carousel , Navbar , Form, Nav , FormControl,} from 'react-bootstrap';



function App() {
  return (
    <div className="App">
       <Navbar  sticky="top"  bg="dark" variant="dark">
    <Navbar.Brand href="#home">wathek jaballah</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">coming up</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  

  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
     
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="image 3.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
  

      <header className="App-header">
      <div>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className = "btn" variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>


      </header>
      
      <div class="d-flex flex-column">
  <footer class="footer">
    <div>
      <a href="https://coreui.io">wathek jaballah</a>
      <span>&copy; 2020 creativeLabs.</span>
    </div>
    <div class="ml-auto">
      <span >Powered by</span>
      <a href="https://coreui.io">wathek jaballah</a>
    </div>
  </footer>
</div>

    </div>
  );
}

export default App;


