import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FadeIn from 'react-fade-in';

import './ContactPage.styles.scss';





const ContactPage = () => {

    return (

        <div>
            <FadeIn transitionDuration="1000">
                <Container className='mt-5'>
                    <h1 className="contact-header">Let's Work Together!</h1>
                </Container>
            </FadeIn>
            <FadeIn transitionDuration="2000">
              
                <Col md={12} className="contact-form mb-10 mt-5">
                    <Form className="justify-content-center">
                        <FormGroup controlid="formBasicName">
                            <Label className="d-block text-left">Name</Label>
                            <Input
                                type="text"
                                name="name"
                                placeholder="Name"
                               
                            />
                        </FormGroup>


                        <FormGroup controlid="formBasicEmail">
                            <Label className="d-block text-left">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                placeholder="Email"
                           

                            />
                        </FormGroup>

                     

                        <FormGroup controlid="formBasicMessage">
                            <Label className="d-block text-left">Message</Label>
                            <Input row={3}
                                type="textarea"
                                name="message"
                                placeholder="Say hello!"
                              
                            />
                        </FormGroup>
                    
                        <Row className="justify-content-center mb-2">

                            <Button type="submit" >Submit</Button>
                        </Row>

                    </Form>
                </Col>
            </FadeIn>
        </div>

    )
};


export default ContactPage;