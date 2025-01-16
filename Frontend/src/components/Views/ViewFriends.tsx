import React from "react";
import { FlatList } from "react-native";
import { StyledView, StyledText, StyledTouchableOpacity, StyledImage } from "../../shared/styled";
import IconChat from "../Icons/IconChat";
import Navigation from "../../navigations/Navigation";
import { useNavigation } from "@react-navigation/native";

const ImageProfile1 = require('../../../assets/ImageProfileOne.png')
const ImageProfile2 = require('../../../assets/ImagenProfileTwo.webp')
const ImageProfile3 = require('../../../assets/ImagenProfileThree.jpeg')
const ImageProfile4 = require('../../../assets/ImagenProfileFour.jpg')

interface Item {
    name: string
    image: any
    message: string
}

const Informacion:Item[] = 
    [
        {name: "Rigoberto", image: ImageProfile1, message: "Si vas a asistir hoy a la llamada?"},
        {name: "Alberto", image: ImageProfile2, message: "Si vas a asistir hoy a la llamada?    "},
        {name: "Christian", image: ImageProfile3, message: "Si vas a asistir hoy a la llamada?"},
        {name: "Jose", image: ImageProfile4, message: "Si vas a asistir hoy a la llamada?"},
        {name: "Oswaldo", image: ImageProfile1, message: "Si vas a asistir hoy a la llamada?"},
        {name: "Gerardo", image: ImageProfile2  , message: "Si vas a asistir hoy a la llamada?"}
    ]


const ViewFriends = () => {

    const Navigation = useNavigation()

    return(
        <StyledView className="mt-10">
            <FlatList 
                data={Informacion}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <StyledView className="flex-row justify-between mb-6 items-center">
                        <StyledView className="flex-row gap-x-4 items-center">
                            <StyledTouchableOpacity onPress={ () => Navigation.navigate('UserProfile') }>
                                <StyledImage source={item.image} className="w-[56px] h-[56px] rounded-full" />
                            </StyledTouchableOpacity>

                            <StyledView>
                                <StyledText className="text-white text-base font-medium">{item.name}</StyledText>
                                {/* <StyledText className="text-han-purple-900 text-sm">{item.message}</StyledText> */}
                            </StyledView>
                        </StyledView>
                        <StyledTouchableOpacity onPress={()=> Navigation.navigate('roomChat')}>
                            <IconChat />    
                        </StyledTouchableOpacity>
                    </StyledView>
                )}
            />

        </StyledView>
    )
}

export default ViewFriends