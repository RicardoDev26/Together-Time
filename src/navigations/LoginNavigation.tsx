import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyledView } from '../shared/styled';
import LoginScreen from '../screens/Login/LoginScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator()

const LoginNavigation = () => {

    const insets = useSafeAreaInsets();

    return(
        <StyledView className='w-full h-full bg-pigment-red-700'>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>   
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </StyledView> 
    )
}

export default LoginNavigation