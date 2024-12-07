import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyledView } from '../shared/styled';
import UserProfileScreen from '../screens/Profile/UserProfileScreen';
import MyProfileScreen from '../screens/Profile/MyProfileScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Stack = createStackNavigator()

const ProfileNavigation = () => {

    const insets = useSafeAreaInsets();

    return(
        <StyledView className='w-full h-full'>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>   
                <Stack.Screen name="UserProfile" component={UserProfileScreen} />
                <Stack.Screen name="MyProfile" component={MyProfileScreen} />
            </Stack.Navigator>
        </StyledView> 
    )
}

export default ProfileNavigation