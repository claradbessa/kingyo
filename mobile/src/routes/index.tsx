import React, {useContext} from 'react';
import {useAuth} from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './AppStack';
import {AppLoading } from 'expo';

const Routes: React.FC = () => {
    const {signed, loading} = useAuth();

    

    return signed ? <AppRoutes /> : <AuthRoutes/>;
}

export default Routes;