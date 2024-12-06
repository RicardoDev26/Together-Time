import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import { StyledView } from '../shared/styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ViewHomeMenuNavigation from '../components/Views/ViewHomeMenuNavigation';
import ButtonNewEvent from '../components/Buttons/ButtonNewEvent';  

const Stack = createStackNavigator();

const HomeNavigation = () => {

  const insets = useSafeAreaInsets()

  return (
    <StyledView className='w-full h-full'>
        <ViewHomeMenuNavigation />
        <Stack.Navigator  screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
        <ButtonNewEvent />
    </StyledView>
  )
}

export default HomeNavigation
