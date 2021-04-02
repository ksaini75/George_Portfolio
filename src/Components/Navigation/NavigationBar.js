import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GeorgeSamuelsResume from '../../Documents/Resume-GeorgeSamuels II.docx';

toast.configure()



function NavigationBar () {
    const notify = () => {
        toast.warning ('Downloading Resume!', 
        { position: toast.POSITION.BOTTOM_LEFT}
        )
      }

    return(

       

    <Navbar expand="lg" bg="light" className="nav" >
          <Navbar.Brand className="nav-title" href="/">GS</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler-icon' />
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" >
            <Nav.Item><Nav.Link href="/"></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Projects">Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link  href={GeorgeSamuelsResume} rel="noopener noreferrer" download onClick={notify} >Resume</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Contact" >Contact</Nav.Link></Nav.Item>

        </Nav>
        </Navbar.Collapse>
    </Navbar>
)
    }
export default NavigationBar;