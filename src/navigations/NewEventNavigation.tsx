import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyledView } from '../shared/styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NewEventScreen from '../screens/NewEvent/NewEventScreen';

const Stack = createStackNavigator();

const NewEventNavigation = () => {

  const insets = useSafeAreaInsets()

  return (
    <StyledView className='w-full h-full'>
        <Stack.Navigator  screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="NewEvent" component={NewEventScreen} />
        </Stack.Navigator>
    </StyledView>
  )
}

export default NewEventNavigation
