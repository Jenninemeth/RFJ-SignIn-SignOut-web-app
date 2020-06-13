import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Menu, Container, Image, Icon } from 'semantic-ui-react';

const Header = () => (
    <Menu fluid id="menu" inverted>
        <Container text>
            <Link href="/">
                <Menu.Item header>
                    <Image 
                        size="mini"
                        src="../../assets/logo.svg"
                    />
                    RFJ Meiswinkle Daily Sign In & Sign Out
                </Menu.Item>
            </Link>

            <Link href="/admin">
                <Menu.Item header>
                    <Icon
                        name="user"
                        size="large"
                        color="black"
                    />
                    admin
                </Menu.Item>
            </Link>
        </Container>
    </Menu>
    );

export default Header;