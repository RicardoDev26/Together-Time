import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyledView } from '../shared/styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeNavigation from './HomeNavigation';
import LoginNavigation from './LoginNavigation';
import EventNavigation from './EventNavigation';
import ProfileNavigation from './ProfileNavigation';
import EventScreen from '../screens/Event/EventScreen';
import UserProfileScreen from '../screens/Profile/UserProfileScreen';
import MyProfileScreen from '../screens/Profile/MyProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  NewEvent: undefined;
  EventScreen: undefined;
  UserProfile: { userId: string };
  MyProfile: undefined; 
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {

  const insets = useSafeAreaInsets()

  return (
    <StyledView className='w-full h-full' style={{ paddingBottom: insets.bottom, paddingTop: insets.top  }}>
        <Stack.Navigator  screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="Home" component={HomeNavigation} />
          <Stack.Screen name="Login" component={LoginNavigation} />
          <Stack.Screen name="NewEvent" component={EventNavigation} />
          <Stack.Screen name="EventScreen" component={EventScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="MyProfile" component={MyProfileScreen} />
        </Stack.Navigator>
    </StyledView>
  )
}

export default Navigation   
