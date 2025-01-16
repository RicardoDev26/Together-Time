import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity, StyledImage } from "../../shared/styled";
import IconArrowBack from "../../components/Icons/IconArrowBack";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { RootState } from "../../redux/store";              
import { useSelector } from "react-redux";

const GuestEvent = () => {

    const users = useSelector((state: RootState) => state.user.users);

    const Navigation = useNavigation()

    return(
        <StyledView className="bg-TogetherBg w-full h-full px-5 pt-2 pb-5">
            <StyledView className="flex-row items-center justify-center"> 
                <StyledTouchableOpacity onPress={() => Navigation.goBack()} className="absolute left-0 top-1">               
                    <IconArrowBack />
                </StyledTouchableOpacity>
                <StyledText className="text-white text-lg font-medium text-center">Guest Event</StyledText>
            </StyledView>
            <FlatList           
                data={users}    
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <StyledTouchableOpacity  onPress={() => Navigation.navigate('UserProfile')} className="flex-row items-center mb-10 mt-5">
                        <StyledImage source={item.photo} />
                        <StyledView>
                            <StyledText className="font-medium text-white text-base">{item.name}</StyledText>
                            <StyledText className="text-dim-gray-700 text-sm font-normal">{item.email}</StyledText>
                        </StyledView>
                    </StyledTouchableOpacity>
                )}  
            />
        </StyledView>
    )
}

export default GuestEvent