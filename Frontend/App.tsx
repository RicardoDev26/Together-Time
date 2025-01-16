import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigations/Navigation";        
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyledView } from "./src/shared/styled";  
import { Provider } from 'react-redux';
import { store } from "./src/redux/store";  
import NewEventNavigation from "./src/navigations/EventNavigation";
import HomeNavigation from "./src/navigations/HomeNavigation";
import LoginNavigation from "./src/navigations/LoginNavigation";
import ProfileNavigation from "./src/navigations/ProfileNavigation";
import ViewOneNavigation from "./src/navigations/ViewOneNavigation";

function App() {
  return (
    <Provider store={store}> 
      <SafeAreaProvider>
        <StyledView className="bg-TogetherBg">
          <StatusBar style="light" />     
          <NavigationContainer>
            <Navigation />
            {/* <NewEventNavigation />
            <LoginNavigation />
            <ProfileNavigation />
            <HomeNavigation />
            <ViewOneNavigation /> */}
          </NavigationContainer>
        </StyledView>
      </SafeAreaProvider>
    </Provider>  
  );
}

export default App;