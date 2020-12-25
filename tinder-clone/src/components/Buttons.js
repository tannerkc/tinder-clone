import React from 'react';
import './css/Button.css';

import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function Buttons() {
    return (
        <div className="buttons">
            
            <IconButton className="button_repeat">
                <Replay fontSize="large" />
            </IconButton>

            <IconButton className="button_left">
                <Close fontSize="large" />
            </IconButton>

            <IconButton className="button_star">
                <StarRate fontSize="large" />
            </IconButton>

            <IconButton className="button_right">
                <Favorite fontSize="large" />
            </IconButton>

            <IconButton className="button_lightning">
                <FlashOn fontSize="large" />
            </IconButton>

        </div>
    )
}

export default Buttons;
