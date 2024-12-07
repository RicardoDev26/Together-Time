import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity, StyledImage } from "../../shared/styled";
import ScrollViewHomeMenu from "../../components/ScrollViews/ScrollViewsHomeMenu";
import IconSports from "../../components/Icons/IconSports";
import InputTypeEvent from "../../components/Inputs/InputTypeEvent";
import ViewToday from "../../components/Views/ViewToday";
import MainMenuModal from "../../components/Modals/MainMenuModal";
const IconSettings = require("../../../assets/IconSettings.png")



const HomeScreen = () => {
    return(
      <StyledView className="bg-[#1a1a1a] w-full h-full ">
        <StyledView className="rounded-lg flex-row justify-center relative">
          <ViewToday />
        </StyledView>
      </StyledView>
    )
}

export default HomeScreen   