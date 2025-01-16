import React from "react";
import { StyledView } from "../../shared/styled";
import { TextInput } from "react-native";
import IconSearchInput from "../Icons/IconSearchInput";

const InputSeach = () => {
    return (
        <StyledView className="flex-row items-center m-3 px-4 rounded-3xl bg-white">
            <TextInput
                className="flex-1 h-10 pl-2 text-base"
                placeholder="Search"
            />
            <IconSearchInput />    
        </StyledView>
    )
}

export default InputSeach