import React from "react"
import { StyledView, StyledTouchableOpacity } from "../../shared/styled"
import IconCalendar from "../Icons/IconCalendar"
import IconChat from "../Icons/IconChat"
import IconHome from "../Icons/IconHome"
import { useNavigation } from "@react-navigation/native"

const ScrollMenuNavigation = () => {

    const Navigation = useNavigation()

    return (

        <StyledView className='p-3 border-solid border-t-2 border-dim-gray-800 flex-row justify-evenly gap-x-10'>
            <StyledTouchableOpacity onPress={() => Navigation.navigate("Home")}>
                <IconCalendar />
            </StyledTouchableOpacity>
            <StyledTouchableOpacity onPress={() => Navigation.navigate("One")}>
                <IconHome  />
            </StyledTouchableOpacity>
            <StyledTouchableOpacity>
                <IconChat />
            </StyledTouchableOpacity>
        </StyledView>
    )
}

export default ScrollMenuNavigation