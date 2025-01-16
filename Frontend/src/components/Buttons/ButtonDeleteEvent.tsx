import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity } from "../../shared/styled";
import { useNavigation } from "@react-navigation/native";


const ButtonDeleteEvent = () => {

    const Navigation = useNavigation()

    return (
        <StyledView className="justify-center items-center mt-10">
            <StyledTouchableOpacity
                className="w-full h-[48px] bg-[#2f2f2f] rounded-xl justify-center"
            >
                <StyledText className="font-bold text-white text-base text-center ">Delete Event</StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

export default ButtonDeleteEvent