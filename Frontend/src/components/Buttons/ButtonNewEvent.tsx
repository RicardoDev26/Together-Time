import React, {useState} from "react";
import { StyledView, StyledText, StyledTouchableOpacity } from "../../shared/styled";
import IconPlus from "../Icons/IconPlusRounded";
import { useNavigation } from "@react-navigation/native";

const ButtonNewEvent = () => {
    const navigation = useNavigation();

    return (
        <StyledView className="absolute bottom-10 right-4">
            <StyledTouchableOpacity 
                 onPress={() => navigation.navigate('NewEvent')}
                 className="w-[64px] h-[56px] bg-[#019963] rounded-xl justify-center pl-5">
                <IconPlus />
            </StyledTouchableOpacity>
        </StyledView>
    )
}

export default ButtonNewEvent   