import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Nav, Navbar, NavbarBrand, NavItem,} from 'reactstrap';
import Locale from 'app/components/locale';
import {FormattedMessage} from 'react-intl';
import * as routers from 'app/constants/routes'
import ApplicationRouter from 'app/router/routerSwitch';

export default function IndexLayout(props) {

    return (
        <div>
            <Navbar color='dark' expand='lg'>
                <NavbarBrand href='/'><FormattedMessage id='app.react.start'/></NavbarBrand>
                <Nav>
                    <NavItem>
                        <Button color="primary" onClick={() => props.history.push(routers.index())}><FormattedMessage
                            id='app.home.title'/></Button>{` `}
                        <Button color="primary" onClick={() => props.history.push(routers.request())}><FormattedMessage
                            id='app.request.title'/></Button>{` `}
                        <Button color="primary" onClick={() => props.history.push(routers.manage())}><FormattedMessage
                            id='app.manage.title'/></Button>{` `}
                        <Button color="primary" onClick={() => props.history.push(routers.control1())}><FormattedMessage
                            id='app.control1.title'/></Button>{` `}
                        <Button color="primary" onClick={() => props.history.push(routers.control2())}><FormattedMessage
                            id='app.control2.title'/></Button>{` `}
                        {/*<Button color="primary" onClick={() => props.history.push(routers.upload())}><FormattedMessage*/}
                        {/*    id='app.upload.title'/></Button>{` `}*/}
                    </NavItem>
                </Nav>
                <Nav className='ml-auto' navbar>
                    <Locale/>
                </Nav>
            </Navbar>
            <ApplicationRouter/>
        </div>
    );
}
