import React from 'react';
import { Menu, Grid } from 'antd';
import { NavLink } from 'react-router-dom';
import cart from '../../assets/icons/Group 48.svg'
import { Route } from '../../router'
import CustomButton from '../Button';


const { useBreakpoint } = Grid;


const RightMenu = ( { menu } ) => {

    const { xs, sm, xl, md, lg } = useBreakpoint();

    return (
    <Menu mode={ lg ? 'horizontal' : 'vertical' } 
        overflowedIndicator={ !!xl && null } 
        > 
        <Menu.Item key="home">
            <NavLink to={ Route.home }>Home</NavLink>
        </Menu.Item>
       
        <Menu.Item key="blog">
            <NavLink to={ Route.blog }>Buy Crypto</NavLink>
        </Menu.Item>
        <Menu.Item key="about" >
            <NavLink to={ Route.about }>Spot Trading</NavLink>
        </Menu.Item>

        {/* <Menu.Item>
        <CustomButton 
            style={{ marginLeft: '5em'}}
            bgColor='#fff'
            textColor='#039'
            title='Login'
        />
        </Menu.Item> */}
    
    </Menu>
  );
}

export default RightMenu