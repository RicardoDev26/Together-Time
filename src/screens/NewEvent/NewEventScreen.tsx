import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity } from "../../shared/styled";
import IconArrowBack from "../../components/Icons/IconArrowBack";
import { useNavigation } from "@react-navigation/native";



const NewEventScreen = () => {

    const Navigation = useNavigation()

    return (
        <StyledView className="w-full h-full bg-[#1a1a1a] px-5">
            <StyledView className="flex-row relative justify-center items-center">
                <StyledText className="text-white text-lg font-medium text-center">Create New Event</StyledText>
                <StyledTouchableOpacity  onPress={() => Navigation.goBack()} className="absolute left-0">
                    <IconArrowBack />
                </StyledTouchableOpacity>
            </StyledView>
        </StyledView>
    )
}

export default NewEventScreen