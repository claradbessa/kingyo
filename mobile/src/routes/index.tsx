import React, {useContext} from 'react';
import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './AppStack';
import AppRoutesProfissional from './AppStackProfissional';
import {AppLoading } from 'expo';

const Routes: React.FC = () => {
    const {signed, user} = useAuth();

    if(signed){
        if(user.type == 1){
            return <AppRoutes/>
        } else {
            return <AppRoutesProfissional/>
        }
    } else {
        return <AuthRoutes/>
    }

    return signed ? <AppRoutes /> : <AuthRoutes/>;
}

export default Routes;