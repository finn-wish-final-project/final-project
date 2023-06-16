import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginUI from '../login/LoginUI';
import SignupUI from '../login/SignupUI';



const Stack = createStackNavigator();

const StackNavigation = ({setHasToken}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LoginUI' options={{ headerShown: false }}>
            {props => <LoginUI {...props} setHasToken={setHasToken} />}
        </Stack.Screen>
            <Stack.Screen name='SignupUI' options={{ headerShown: false }} component={SignupUI} />
        </Stack.Navigator>  
    );
};

export default StackNavigation;
