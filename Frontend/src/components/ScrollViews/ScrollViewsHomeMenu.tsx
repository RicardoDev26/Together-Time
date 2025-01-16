import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity } from "../../shared/styled";
import { FlatList } from "react-native";
                        
const ScrollViewHomeMenu = () => {

    const OpcionMenu = [
        { id: 'today', title: 'Today'},
        { id: 'week', title: "Week"},
        { id: 'month', title: "Month"},
        { id: 'year', title: "Year"}
    ]

    const renderItem = ({ item }) => (
        <StyledTouchableOpacity className="w-[75px] h-[32px] rounded-xl ml-3 p-1">
            <StyledText className="text-base text-white font-medium text-center">{item.title}</StyledText>
        </StyledTouchableOpacity>
    );  

    return (
        <StyledView className="flex-row justify-center items-center mt-5">
            <FlatList 
                data={OpcionMenu}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </StyledView>
    )
}            

export default ScrollViewHomeMenu
