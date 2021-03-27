import React, { Component } from 'react';
import { AiFillLinkedin} from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.styles.scss';

class Footer extends Component {
    render() {
        return (

            <div className="footer-section pt-5 pb-3  text-center" id="footer">
                <Row>
                    <Col md={6} className="mr-auto">
                        <p>
                            <a className="footer-icon" href="https://www.linkedin.com/in/george-samuels-ii/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin/>
                    
                            </a>
                        
                            <a className="footer-icon" href="https://github.com/MrGDS2" target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub/>
                            </a>
                            <a className="footer-icon" href="https://www.youtube.com/user/Mrsonicthunder/featured" target="_blank" rel="noopener noreferrer">
                             <AiFillYoutube/>
                            </a>
                           
                        </p>
                    </Col>

                    <Col md={6} className="ml-auto">
                        <p className='footer-email'> mrgdstwo@gmail.com </p>
                    </Col>

                </Row>


                <Row>
                    <Col md={12}>
                        <span className="text-center">
                            <p className="copyright"> ©2021 by <br />
                                <a href="https://github.com/ksaini75" target="_blank" rel="noopener noreferrer"> Karishma Saini </a><br />
                           
                            </p>
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Footer;