import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginUI from '../login/LoginUI';
import SignupUI from '../login/SignupUI';




const Stack = createStackNavigator();

const StackNavigation = ({setHasToken}) => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen name='loginUI' component={loginUI} /> */}
            <Stack.Screen name='loginUI'>
        {props => <LoginUI {...props} setHasToken={setHasToken} />}
      </Stack.Screen>
            <Stack.Screen name='SignupUI' component={SignupUI} />
        </Stack.Navigator>  
    );
};

export default StackNavigation;