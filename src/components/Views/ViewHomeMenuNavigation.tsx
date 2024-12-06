import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity, StyledImage } from "../../shared/styled";
import ScrollViewHomeMenu from "../../components/ScrollViews/ScrollViewsHomeMenu";
import IconSports from "../../components/Icons/IconSports";

const IconSettings = require("../../../assets/IconSettings.png")

const ViewHomeMenuNavigation = () => {
    return(
      <StyledView className="bg-[#1a1a1a] border-b-[.7px] border-solid border-dim-gray-700">
        <StyledView className="rounded-lg flex-row justify-center relative">
          <StyledText className="text-white text-lg font-medium">Agenda</StyledText>
          <StyledTouchableOpacity className="absolute right-4">
            <StyledImage source={IconSettings} />
          </StyledTouchableOpacity>
        </StyledView>
        <StyledView className="ml-6 mt-5 mb-3">
          <ScrollViewHomeMenu />   
        </StyledView>
      </StyledView>
    )
}

export default ViewHomeMenuNavigation   