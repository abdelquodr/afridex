import React from 'react';
import { Button } from 'antd';


const CustomButton = ({title, onClick, bgColor, textColor}) => {
    return (
        <Button 
        onClick={() => onClick} 
        className='btn no_float equal-padding' 
        style={{backgroundColor: bgColor, color: textColor, fontWeight: 500}}
        >
            {title}
        </Button>
    )
}

export default CustomButton;
