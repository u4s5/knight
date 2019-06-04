import React from 'react';
import {Route, Switch} from 'react-router';
import * as routes from 'app/constants/routes';
import HomeLayout from 'app/components/pages/home';
import RequestLayout from 'app/components/pages/request';
import ManageLayout from 'app/components/pages/manage';
import ControlLayout from 'app/components/pages/control';
import UploadLayout from 'app/components/pages/upload';

export default () => (
    <Switch>
        <Route exact path={routes.index()} component={HomeLayout}/>
        <Route exact path={routes.request()} component={RequestLayout}/>
        <Route exact path={routes.manage()} component={ManageLayout}/>
        <Route exact path={routes.control()} component={ControlLayout}/>
        <Route exact path={routes.upload()} component={UploadLayout}/>
    </Switch>
);
