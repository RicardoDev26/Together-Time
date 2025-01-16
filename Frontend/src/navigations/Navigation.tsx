import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyledView, StyledText, StyledTouchableOpacity } from '../shared/styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeNavigation from './HomeNavigation';
import LoginNavigation from './LoginNavigation';
import EventNavigation from './EventNavigation';
import ProfileNavigation from './ProfileNavigation';
import EventScreen from '../screens/Event/EventScreen';
import UserProfileScreen from '../screens/Profile/UserProfileScreen';
import MyProfileScreen from '../screens/Profile/MyProfileScreen';
import FriendScreen from '../screens/Friends/FriendsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoomChatScreen from '../screens/Chats/RoomChatScreen';
import ViewOneNavigation from './ViewOneNavigation';
import IconCalendar from '../components/Icons/IconCalendar';
import IconHome from '../components/Icons/IconHome';
import { useNavigation } from '@react-navigation/native';
import IconChat from '../components/Icons/IconChat';
import ScrollMenuNavigation from '../components/ScrollViews/ScrollMenuNavigation';


export type RootStackParamList = {
  One: undefined;
  Home: undefined;
  Login: undefined;
  NewEvent: undefined;
  EventScreen: undefined;
  UserProfile: { userId: string };
  MyProfile: undefined; 
  Friends: undefined;
  roomChat: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {

  const insets = useSafeAreaInsets()
  const Navigation = useNavigation()

  return (
    <StyledView className='w-full h-full' style={{ paddingBottom: insets.bottom, paddingTop: insets.top  }}>
        <Stack.Navigator  screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
          <Stack.Screen name="One" component={ViewOneNavigation} />
          <Stack.Screen name="Home" component={HomeNavigation} />
          <Stack.Screen name="Login" component={LoginNavigation} />
          <Stack.Screen name="NewEvent" component={EventNavigation} />
          <Stack.Screen name="EventScreen" component={EventScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="MyProfile" component={MyProfileScreen} />
          <Stack.Screen name='Friends' component={FriendScreen} />
          <Stack.Screen name='roomChat' component={RoomChatScreen} />
        </Stack.Navigator>
        <ScrollMenuNavigation />
    </StyledView>
  )
}

export default Navigation   
