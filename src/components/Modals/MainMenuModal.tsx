import React from "react";
import { StyledView, StyledTouchableOpacity, StyledText, StyledImage } from "../../shared/styled";
import ModalSlice from "../Slices/ModalSlice";
import { StateSlice } from "../../types/types";
import IconPeople from "../Icons/IconPeople";
import IconCalendar from "../Icons/IconCalendar";
import IconChat from "../Icons/IconChat";
import IconSettings from "../Icons/IconSettings";

const ImageProfile = require('../../../assets/ImageProfileOne.png')

interface MainMenuModalProps {
    visible: StateSlice
    onClose: () => void
}


const MainMenuModal:React.FC<MainMenuModalProps> = ({visible, onClose}) => {

    return(
        <ModalSlice visible={visible === StateSlice.OPEN} onClose={onClose} modalWidth={90} >
            <StyledView className="w-full h-full ml-3 items-center">
                <StyledTouchableOpacity className="mt-10 mb-10 mr-5">
                    <StyledImage source={ImageProfile} />
                </StyledTouchableOpacity>

                <StyledView className="items-center gap-y-10 ml-8">
                    <StyledTouchableOpacity className="flex-row gap-x-2 items-center">
                        <IconPeople />
                        <StyledText className="text-white">Friends</StyledText>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity className="flex-row gap-x-2 items-center">
                        <IconChat />
                        <StyledText className="text-white">Chats</StyledText>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity className="flex-row gap-x-2 items-center">
                        <IconCalendar />
                        <StyledText className="text-white">Events</StyledText>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity className="flex-row gap-x-2 items-center">
                        <IconSettings    />
                        <StyledText className="text-white">Settings</StyledText>
                    </StyledTouchableOpacity>

                </StyledView>

            </StyledView>
        </ModalSlice>
    )
}

export default MainMenuModal
    
                                            