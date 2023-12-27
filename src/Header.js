import React from 'react'
import { Navbar ,Button} from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => {
  return (
    <>
    <Navbar
    expand="lg"
    bg="" data-bs-theme="dark"
    className="nav" 
     
  >
    <Container className="nav-header-container main-header">
      <Navbar.Brand href="#home">
       <span><FontAwesomeIcon className='mx-5 ' icon="fa-bars"/>
       <Navbar.Brand >React User Application</Navbar.Brand>
       </span>
        
      </Navbar.Brand>
      <Navbar.Brand href="#home">Login</Navbar.Brand>
      </Container>
      </Navbar>
      <h1 className=' mt-3 mb-3 g-3 text-center'>User Details</h1>
      <div className="mb-4">
      <Button variant="primary" className='mx-5 ' size="lg">Add User</Button>
      </div>
      </>
      
  )
}

export default Header;