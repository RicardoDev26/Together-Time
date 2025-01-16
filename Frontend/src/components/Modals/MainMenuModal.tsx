import React from "react";
import { StyledView, StyledTouchableOpacity, StyledText, StyledImage } from "../../shared/styled";
import ModalSlice from "../Slices/ModalSlice";
import { StateSlice } from "../../types/types";
import IconPeople from "../Icons/IconPeople";
import IconCalendar from "../Icons/IconCalendar";
import IconChat from "../Icons/IconChat";
import IconSettings from "../Icons/IconSettings";
import { useNavigation } from "@react-navigation/native";

const ImageProfile = require('../../../assets/ImageProfileOne.png')

interface MainMenuModalProps {
    visible: StateSlice
    onClose: () => void
}


const MainMenuModal:React.FC<MainMenuModalProps> = ({visible, onClose}) => {


    const Navigation = useNavigation()

    return(
        <ModalSlice visible={visible === StateSlice.OPEN} onClose={onClose} modalWidth={200} >
            <StyledView className="w-full h-full items-center">
                <StyledTouchableOpacity onPress={ ()=> Navigation.navigate("MyProfile")} className="mt-10 mb-10 mr-5">
                    <StyledImage source={ImageProfile} className="w-[100px] h-[100px]" />
                </StyledTouchableOpacity>

                <StyledView className="self-start ml-7 items-center gap-y-10 ">
                    <StyledTouchableOpacity onPress={ () => Navigation.navigate('Friends')} className="flex-row gap-x-2 items-center">
                        <IconPeople />
                        <StyledText className="text-white">Friends</StyledText>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity className="flex-row gap-x-2 items-center mr-2">
                        <IconChat />
                        <StyledText className="text-white">Chats</StyledText>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity className="flex-row gap-x-2 items-center mr-2">
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
    
                                            