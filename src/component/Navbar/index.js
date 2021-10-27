import React, { useState } from 'react';
import Menu from '../Menu'
import { Drawer, Button, Grid, Row, Col  } from 'antd';
import logo from '../../assets/icons/image 2.png'
import menuDot from '../../assets/icons/menu-dot.svg'
import cancelIcon from '../../assets/icons/Cancel.svg'
import BucketImg from '../../assets/icons/illustration.png'
import CustomButton from "../Button";


const { useBreakpoint } = Grid;

const MenuIcon = ({showDrawer}) => {   

    return (
        <Button role='toggle' className="barsMenu bg-blue" onClick={ showDrawer }>
            <span className=""><img src={ menuDot } alt='menu dot' /> 
                <span>Menu</span> 
            </span>
        </Button>
    )
}


export const Navbar = () => {

    const { xs, sm, xl, md, lg } = useBreakpoint();

    // initail state
    const initialState = {
        visible: false
    }

    // state
    const [ state, setState ] = useState( initialState )


    // handlers
    const showDrawer = () => {
        setState({
        visible: true,
        });
    }
  
    const onClose = () => {
        setState({
        visible: false,
        });
    };


    return (
        <div className="header">
            <nav className="menuBar">
                <div className="logo">
                    <img className='icon' src={ logo } alt='logo' />
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <Menu />
                    </div>  
                    <li style={{listStyle: 'none'}}>
                        <Button className="show"> login </Button>
                    </li>
                { <MenuIcon showDrawer={showDrawer} /> }
                    <Drawer
                        role='drawer'
                        title="Menu Item"
                        placement="right"
                        closable={ true }  
                        onClose={ onClose }
                        visible={ state.visible }
                        className='ant-mask'
                        closeIcon={ <img style={{width: '1em', fontWeight: 'bolder'}} src={cancelIcon} alt='cancel' /> }
                        >
                        <Menu  />
                        <li style={{listStyle: 'none'}}>
                        <Button className="show-true"> login </Button>
                        </li>
                    </Drawer>
                </div>
            </nav>
            <Row className='section-padding' >
                <Col xs={24} sm={24} md={12} style={{alignSelf: 'center'}}>
                    <p className='bold-title'>Trade Smarter, Not Harder</p>
                    <h3 className='hero-title'>Crypto Trading</h3>
                    <h3 className='hero-title'>For Everyone</h3>
                    <div className='white small-padding'> 
                        <p className='hero-para white' style={{color:'#fff'}}>A Tokenized Exchange For Products, Startups <br /> and Businesses With Much More Options </p>
                    </div>
                    <CustomButton 
                        bgColor='#fff'
                        textColor='#039'
                        title='GET STARTED'
                    />
                </Col>
                <Col xs={24} sm={24} md={12}  style={{alignSelf: 'center'}}>
                    <div className='svg-bg-div'>
                        <img src={BucketImg} className='bucket-img' alt="bucket img" />
                    </div>                
                </Col>
            </Row>
        </div>
    );
}
