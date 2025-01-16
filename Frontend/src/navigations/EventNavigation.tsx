import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyledView } from '../shared/styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NewEventScreen from '../screens/Event/NewEventScreen';
import EventScreen from '../screens/Event/EventScreen';
import GuestEvent from '../screens/Event/GuestEvent';

const Stack = createStackNavigator();

const NewEventNavigation = () => {

  return (
    <StyledView className='w-full h-full'>
        <Stack.Navigator  screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="NewEvent" component={NewEventScreen} />
          <Stack.Screen name="GuestEvent" component={GuestEvent} />
          {/* <Stack.Screen name="EventScreen" component={EventScreen} /> */}
        </Stack.Navigator>
    </StyledView>
  )
}

export default NewEventNavigation
