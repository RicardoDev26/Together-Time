import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyledView,StyledText, StyledTouchableOpacity } from '../shared/styled';
import EventActive from '../screens/Home/EventActive';
import EventInvitaciones from '../screens/Home/EventGuest';
import EventPasados from '../screens/Home/EventPasados';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator()

const ViewOneNavigation = () => {

    const navigation = useNavigation()

    return(
        <StyledView className='w-full h-full bg-TogetherBg'>
            <StyledView className='flex-row gap-x-4 justify-between p-4 border-b-2 border-solid border-dim-gray-800'>
                <StyledTouchableOpacity onPress={() => navigation.navigate("One", {screen: "Active"}) }>
                    <StyledText className='text-white text-base'>Active Event</StyledText>
                </StyledTouchableOpacity>

                <StyledTouchableOpacity onPress={() => navigation.navigate("One", {screen: "Pasados"})}>
                    <StyledText className='text-white text-base'>Past Event</StyledText>
                </StyledTouchableOpacity>

                <StyledTouchableOpacity onPress={() => navigation.navigate("One", {screen: "Invitaciones"})}>
                    <StyledText className='text-white text-base'>Invitations</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
            <Stack.Navigator screenOptions={{ headerShown: false, animation: "slide_from_right" }}>   
                <Stack.Screen name='Active' component={EventActive} />
                <Stack.Screen name='Pasados' component={EventPasados} />
                <Stack.Screen name='Invitaciones' component={EventInvitaciones} />
            </Stack.Navigator>
        </StyledView> 
    )
}

export default ViewOneNavigation