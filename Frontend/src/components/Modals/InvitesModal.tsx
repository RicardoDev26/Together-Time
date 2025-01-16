import React from "react";
import { StyledView, StyledTouchableOpacity, StyledText, StyledImage } from "../../shared/styled";
import ModalSliceUp from "../Slices/ModalSliceUp";
import { StateSliceUp } from "../../types/types";
import IconClose from "../Icons/IconClose";
import { TextInput } from "react-native";
import IconSearch from "../Icons/IconSearch";
import InputSeach from "../Inputs/InputSearch";

interface ModalProps {
    visible: StateSliceUp
    onClose: () => void
}

const InvitesModal:React.FC<ModalProps> = ({visible, onClose}) => {

    return (
        <ModalSliceUp visible={visible === StateSliceUp.OPEN} onClose={onClose} modalHeight={700}>
            <StyledView className="w-full h-full items-center p-5">
                <StyledView className="flex-row relative w-full justify-center items-center">
                    <StyledTouchableOpacity onPress={onClose} className="absolute top-1 left-0">
                        <IconClose />
                    </StyledTouchableOpacity>
                    <StyledText className="text-white text-lg">Invite</StyledText>
                </StyledView>

                <InputSeach />
            </StyledView>

        </ModalSliceUp>    
    )

}

export default InvitesModal
