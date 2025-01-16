import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity } from "../../shared/styled";
import IconArrowBack from "../../components/Icons/IconArrowBack";
import { RouteProp, useNavigation } from "@react-navigation/native";
import ViewUserProfile from "../../components/Views/ViewUserProfile";

const UserProfileScreen = () => {

    const Navigation = useNavigation()

    return (
        <StyledView className="bg-TogetherBg w-full h-full px-5">
            <StyledView className="flex-row relative justify-center items-center">
                <StyledTouchableOpacity onPress={() => Navigation.goBack()} className="absolute left-0">
                    <IconArrowBack />
                </StyledTouchableOpacity>   
                <StyledText className="text-white text-lg font-medium text-center">Profile</StyledText>
            </StyledView>

            <ViewUserProfile />
        </StyledView>
    )
}

export default UserProfileScreen