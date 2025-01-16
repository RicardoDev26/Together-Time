import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity } from "../../shared/styled";
import IconArrowBack from "../../components/Icons/IconArrowBack";
import { RouteProp, useNavigation } from "@react-navigation/native";
import ViewFriends from "../../components/Views/ViewFriends";
import IconSearch from "../../components/Icons/IconSearch";

const FriendScreen = () => {

    const Navigation = useNavigation()

    return (
        <StyledView className="bg-TogetherBg w-full h-full px-5">
            <StyledView className="flex-row relative justify-center items-center">
                <StyledTouchableOpacity onPress={() => Navigation.goBack()} className="absolute left-0">
                    <IconArrowBack />
                </StyledTouchableOpacity>   
                <StyledText className="text-white text-lg font-medium text-center">Friends</StyledText>
                <StyledTouchableOpacity className="absolute right-0">
                    <IconSearch />
                </StyledTouchableOpacity>  
            </StyledView>

            <ViewFriends />
        </StyledView>
    )
}

export default FriendScreen