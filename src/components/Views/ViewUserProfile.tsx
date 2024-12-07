import React from "react";
import { StyledView, StyledText, StyledImage, StyledTouchableOpacity     } from "../../shared/styled";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import IconAddFriend from "../Icons/IconAddFriend";
import IconChat from "../Icons/IconChat";
import IconCalendar from "../Icons/IconCalendar";
import IconEmail from "../Icons/IconEmail";
import IconGender from "../Icons/IconGender";
import IconHouse from "../Icons/IconHouse";
import IconPhone from "../Icons/IconContactPhone";
import IconUsername from "../Icons/IconUsername";

const ImageProfile = require('../../../assets/ImageProfileOne.png')


const ViewUserProfile = () => {

    return (
        <StyledView className="w-full h-full items-center mt-5">
            <StyledImage source={ImageProfile} className="w-[150px] h-[150px] mb-2" />
            <StyledView className="justify-center items-center mt-2 mb-5">
                <StyledText className="text-center text-white text-2xl font-medium">Ricardo</StyledText>
                <StyledText className="text-center text-dim-gray-700 text-sm">@Dlxvlo</StyledText>
            </StyledView>

            <StyledView className="flex-row mb-5 gap-x-5">
                <StyledTouchableOpacity className="justify-center items-center">
                    <IconAddFriend />
                    <StyledText className="text-white"> Add Friend</StyledText>
                </StyledTouchableOpacity>
                <StyledTouchableOpacity className="justify-center items-center">
                    <IconChat />
                    <StyledText className="text-white">Open Chat</StyledText>
                </StyledTouchableOpacity>
            </StyledView>

            <StyledView className="self-start gap-y-5">
                    <StyledView className="flex-row items-center">
                        <StyledView className="w-10 h-10 bg-dark-charcoal rounded-lg justify-center items-center mr-3">
                            <IconEmail />
                        </StyledView>
                        <StyledText className="text-base font-normal text-white">Ricardo@together.com</StyledText>
                    </StyledView>

                    <StyledView className="flex-row items-center">
                        <StyledView className="w-10 h-10 bg-dark-charcoal rounded-lg justify-center items-center mr-3">
                            <IconPhone />
                        </StyledView>
                        <StyledText className="text-base font-normal text-white">7651154675</StyledText>
                    </StyledView>

                    <StyledView className="flex-row items-center">
                        <StyledView className="w-10 h-10 bg-dark-charcoal rounded-lg justify-center items-center mr-3">
                            <IconHouse />
                        </StyledView>
                        <StyledText className="text-base font-normal text-white">Alamo</StyledText>
                    </StyledView>

                    <StyledView className="flex-row items-center">
                        <StyledView className="w-10 h-10 bg-dark-charcoal rounded-lg justify-center items-center mr-3">
                            <IconGender />
                        </StyledView>
                        <StyledText className="text-base font-normal text-white">Male</StyledText>
                    </StyledView>

                    <StyledView className="flex-row items-center">
                        <StyledView className="w-10 h-10 bg-dark-charcoal rounded-lg justify-center items-center mr-3">
                            <IconCalendar />
                        </StyledView>
                        <StyledText className="text-base font-normal text-white">Joined May 2024</StyledText>
                    </StyledView>

                    <StyledView className="flex-row items-center">
                        <StyledView className="w-10 h-10 bg-dark-charcoal rounded-lg justify-center items-center mr-3">
                            <IconUsername />
                        </StyledView>
                        <StyledText className="text-base font-normal text-white">Dlxvlo</StyledText>
                    </StyledView>
            </StyledView>
        </StyledView>
    )
}

export default ViewUserProfile              