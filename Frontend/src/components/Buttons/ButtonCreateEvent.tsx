import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity } from "../../shared/styled";
import { useNavigation } from "@react-navigation/native";


const ButtonCreateEvent = () => {

    const Navigation = useNavigation()

    return (
        <StyledView className="absolute bottom-5 left-5 right-5">
            <StyledTouchableOpacity
                onPress={() => Navigation.navigate('Home')}
                className="w-full h-[48px] bg-[#019963] rounded-xl justify-center"
            >
                <StyledText className="font-bold text-white text-base text-center ">Create</StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}

export default ButtonCreateEvent