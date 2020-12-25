import React from 'react';
import './css/Header.css';
import { MessageRounded, Person } from '@material-ui/icons';
import { IconButton } from '@material-ui/core'

function Header() {
    return (
        <div className="header">
            <IconButton>
                <Person fontSize="large" className="header_icon" />
            </IconButton>

            <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" width={50} alt="Logo" />

            <IconButton>
                <MessageRounded fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}

export default Header;
