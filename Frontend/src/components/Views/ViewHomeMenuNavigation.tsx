import React, { useState } from "react";
import { StyledView, StyledText, StyledTouchableOpacity, StyledImage } from "../../shared/styled";
import ScrollViewHomeMenu from "../../components/ScrollViews/ScrollViewsHomeMenu";
import IconSettings from "../Icons/IconSettings";
import IconMenu from "../Icons/IconMenu";
import MainMenuModal from "../Modals/MainMenuModal";
import { StateSlice } from "../../types/types";

const ViewHomeMenuNavigation = () => {

    const [modalState, setModalState] = useState<StateSlice>(StateSlice.NONE)
    const openModal = () => setModalState(StateSlice.OPEN)
    const closeModal = () => setModalState(StateSlice.CLOSE)


    return(
      <StyledView className="bg-TogetherBg border-b-[.7px] border-solid border-dim-gray-700">
        <StyledView className="rounded-lg flex-row justify-center relative">
          <StyledTouchableOpacity onPress={openModal}        className="absolute left-4">  
            <IconMenu />    
          </StyledTouchableOpacity>  
          <StyledText className="text-white text-lg font-medium">Agenda</StyledText>
          <StyledTouchableOpacity className="absolute right-4">
            <IconSettings />
          </StyledTouchableOpacity>
        </StyledView>
        <StyledView className="ml-6 mt-5 mb-3">
          <ScrollViewHomeMenu />   
        </StyledView>
        <MainMenuModal visible={modalState} onClose={closeModal} />
      </StyledView>
    )
}

export default ViewHomeMenuNavigation   

