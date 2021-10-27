import React from 'react';
import { Button, Row, Col } from 'antd';
import logo from '../../assets/icons/image 2.png'
import  FacebookLogo from '../../assets/icons/Vector (4)(copy).png';
import  TwitterLogo from '../../assets/icons/Vector (1)(copy).png';
import  YoutubeLogo from '../../assets/icons/Vector (3)(copy).png';
import {ReactComponent as DribbleLogo} from '../../assets/icons/dribbble.svg';
import { Link } from 'react-router-dom';
import './styles.css';

export const Footer = () => {

    return (
        <div className='footer-container'>
            <div className='footer'>
                <Row gutter={{ md: 90, lg: 100, xl: 80}}>
                    <Col xs={22} lg={6}>
                        <div className="footer-logo">
                            <img className='icon' src={ logo } alt='logo' />
                        </div>
                        <p className='footer-p'>AFRIDEX is leveraging the benefit that change throught blockchain technology has offered to revolutionize the fututre of finance</p>
                       
                    </Col>

                    <Col xs={24} md={8} lg={6} className='white'>
                        <p className='footer-title'>About $AFDT</p>
                        <div className='footer-links'>
                        <Link onClick={(e) => {window.location='mailto:support@afridex.io'; e.preventDefault() }} target="_blank" className='white'> <p>Support</p> </Link>
                        <Link onClick={(e) => {window.location='mailto:support@afridex.io'; e.preventDefault() }} target="_blank"  className='white'> <p>support@afridex.io</p></Link>

                        </div>
                    </Col>

                    <Col xs={24} md={8} lg={6} className='white'>
                        <p className='footer-title'>Services</p>
                        <Link onClick={(e) => {window.location='mailto:listing@afridex.io'; e.preventDefault() }} target="_blank"  className='white'><p>Listing</p> </Link>
                        <Link onClick={(e) => {window.location='mailto:business@afridex.io'; e.preventDefault() }} target="_blank"  className='white'><p>Partnership/Institutional Srvices</p> </Link>
                        <Link onClick={(e) => {window.location='mailto:investment@afridex.io';e.preventDefault() }} target='_blank' className='white'><p>Investment Offers</p> </Link>
                    </Col>

                    <Col  xs={24} md={8} lg={6} className='white'>
                    <p className='footer-title'>Legal</p>
                        <Link to='' className='white'>Privacy Policy</Link>
                        <Link to='' className='white'>Terms of Use</Link>
                    </Col>
                </Row>
            </div>
            {/* <hr /> */}
            <div className='bottom-footer'>
                <p> &copy; 2021 AFRIDEX Exchange. All rights reserved.</p>
                <div className='footer-margin'>
                    <Link to={{ pathname: 'https://twitter.com/afridexfinance'}} target="_blank"  ><img shape="circle" src={TwitterLogo} size='small' className='social-links'/></Link>
                    <Link to={{ pathname: 'https://linkedin.com/company/afridex-finance-blockchain-company'}} target="_blank" ><img shape="circle" src={YoutubeLogo} size='small' className='social-links'/></Link>
                    <Link to={{ pathname: 'https://facebook.com/afridexfinance' }} target="_blank" ><img shape="circle" src={FacebookLogo} size='small' className='social-links'/></Link>
                </div>
            
            </div>

        </div>
    )
}
