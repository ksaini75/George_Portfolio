import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import georgeImage from '../../Images/George-portfolio-image.jpg';

import './AboutPage.styles.scss';

const AboutPage = () => {

   return(
<React.Fragment>
    <div>
    <Container className="about-container">
   <Row className='justify-content-center'>
       <Col xs={3} >
           <Image className='about-profile ' src={georgeImage} roundedCircle/>
       </Col>
   </Row>
   <Row>
       <Col md={12}>
          <h4 className='about-title'>Hello! I'm George</h4>
          <p className='about-body'>
            An Alumni of Pace University on the Westchester campus. He recently graduated from Seidenberg School of Computer Science, obtaining a MS in Computer Science. 
            George is currently seeking a position at a company where he can fulfill he's dream of software development. 
            Idea/Concept development has always been a passion for George. 
            It is the ability to create something that George views as, a gift that keeps on giving. 
            This notion is the drive that forces George to pursue a bright and successful future in software development.</p>
       </Col>
   </Row>
    </Container>

    </div>
</React.Fragment>
   )

   }

export default AboutPage;