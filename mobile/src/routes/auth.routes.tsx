import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../pages/Signin';
import Landing from '../pages/Landing';

const AuthStack = createStackNavigator();

function SingIn() {
  return(
    <NavigationContainer>
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Landing" component={Landing}/>
            <AuthStack.Screen name="Signin" component={Signin}/>
        </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default SingIn;