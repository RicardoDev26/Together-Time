import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigations/Navigation";        
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyledView } from "./src/shared/styled";          

function App() {
  return (
      <SafeAreaProvider>
        <StyledView className="bg-[#1a1a1a]">
          <StatusBar style="light" /> 
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </StyledView>
      </SafeAreaProvider>
  );
}

export default App;