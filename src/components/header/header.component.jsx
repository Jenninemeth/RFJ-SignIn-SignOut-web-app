import React from 'react';

import { Menu, Container} from 'semantic-ui-react';
import logo from '../../assets/logo.jpg';

const Header = () => (
    <Menu fluid id="menu" inverted>
        <Container text>
           
                <Menu.Item header>
                    <img src={logo} alt="Logo" width="50em"/>
                    RFJ Meiswinkle Daily Sign In & Sign Out
                </Menu.Item>
            
                <Menu.Item header>
                    <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="100" height="15"></rect>
                        <rect y="30" width="100" height="15"></rect>
                        <rect y="60" width="100" height="15"></rect>
                    </svg>
                </Menu.Item>
            
        </Container>
    </Menu>
    );

export default Header;