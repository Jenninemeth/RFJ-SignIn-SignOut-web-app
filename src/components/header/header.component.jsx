import React from 'react';

import { Menu, Container, Image } from 'semantic-ui-react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as User } from '../../assets/male.svg';


const Header = () => (
    <Menu fluid id="menu" inverted>
        <Container text>
           
                <Menu.Item header>
                    <Image 
                        size="mini"
                        src="../../assets/logo.svg"
                    />
                    RFJ Meiswinkle Daily Sign In & Sign Out
                </Menu.Item>
            
                <Logo></Logo>
            
                <Menu.Item header>
                    <User/>
                    admin
                </Menu.Item>
            
        </Container>
    </Menu>
    );

export default Header;