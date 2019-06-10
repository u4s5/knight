import React from 'react';
import {Route, Switch} from 'react-router';
import * as routes from 'app/constants/routes';
import HomeLayout from 'app/components/pages/home';
import RequestLayout from 'app/components/pages/request';
import ManageLayout from 'app/components/pages/manage';
import Control1Layout from 'app/components/pages/control1';
import Control2Layout from 'app/components/pages/control2';
import UploadLayout from 'app/components/pages/upload';

export default () => (
    <Switch>
        <Route exact path={routes.index()} component={HomeLayout}/>
        <Route exact path={routes.request()} component={RequestLayout}/>
        <Route exact path={routes.manage()} component={ManageLayout}/>
        <Route exact path={routes.control1()} component={Control1Layout}/>
        <Route exact path={routes.control2()} component={Control2Layout}/>
        <Route exact path={routes.upload()} component={UploadLayout}/>
    </Switch>
);
