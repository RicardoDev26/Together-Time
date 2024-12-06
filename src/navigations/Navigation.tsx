import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyledView } from '../shared/styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeNavigation from './HomeNavigation';
import LoginNavigation from './LoginNavigation';
import NewEventNavigation from './NewEventNavigation';

const Stack = createStackNavigator();

const Navigation = () => {

  const insets = useSafeAreaInsets()

  return (
    <StyledView className='w-full h-full' style={{ paddingBottom: insets.bottom, paddingTop: insets.top  }}>
        <Stack.Navigator  screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="Home" component={HomeNavigation} />
          <Stack.Screen name="Login" component={LoginNavigation} />
          <Stack.Screen name="NewEvent" component={NewEventNavigation} />
        </Stack.Navigator>
    </StyledView>
  )
}

export default Navigation
