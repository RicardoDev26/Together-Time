import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity } from "../../shared/styled";
import IconArrowBack from "../../components/Icons/IconArrowBack";
import { useNavigation } from "@react-navigation/native";
import ViewEvent from "../../components/Views/ViewEvent";

const EventScreen = () => {

    const Navigation = useNavigation()

    return(
        <StyledView className="bg-TogetherBg w-full h-full px-5 pt-2 pb-5">
            <StyledView className="flex-row items-center justify-center"> 
                <StyledTouchableOpacity onPress={() => Navigation.goBack()} className="absolute left-0 top-1">               
                    <IconArrowBack />
                </StyledTouchableOpacity>
                <StyledText className="text-white text-lg font-medium text-center">Partido de Futbol</StyledText>
            </StyledView>
            <ViewEvent />
        </StyledView>
    )
}

export default EventScreen