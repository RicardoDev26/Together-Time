import React, {useState} from "react";
import { FlatList } from "react-native"; // Asegúrate de importar FlatList
import { StyledView, StyledText, StyledImage, StyledScrollView, StyledTouchableOpacity } from "../../shared/styled";
import IconCalendar from "../Icons/IconCalendar";
import IconLocation from "../Icons/IconLocation";
import IconPeople from "../Icons/IconPeople";
import ButtonDeleteEvent from "../Buttons/ButtonDeleteEvent";
import IconSettings from "../Icons/IconSettings";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "../../redux/store";              
import { useSelector } from "react-redux";

const ViewEvent: React.FC = () => {

    const users = useSelector((state: RootState) => state.user.users);

    const Navigation = useNavigation()

    const [isInviteesVisible, setIsInviteesVisible] = useState(false)

    const toggleInvitees = () => {
        setIsInviteesVisible(!isInviteesVisible)
    }

    return (
        <StyledScrollView>
            <StyledView className="gap-y-8 mt-5">
                <StyledView className="flex-row items-center gap-x-4">
                    <StyledView className="w-10 h-10 bg-[#2f2f2f] rounded-lg justify-center items-center"><IconCalendar /></StyledView>
                    <StyledText className="text-white font-normal text-base"> Thursday, 12:00 - 13:00</StyledText>
                </StyledView>

                <StyledView>
                    <StyledTouchableOpacity className="flex-row items-center gap-x-4" onPress={toggleInvitees}>
                        <StyledView className="w-10 h-10 bg-[#2f2f2f] rounded-lg justify-center items-center"><IconPeople /></StyledView>
                        <StyledText className="text-white font-normal text-base"> Invitees</StyledText>
                    </StyledTouchableOpacity>
                    {isInviteesVisible && (
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
                    )}
                </StyledView>

                <StyledTouchableOpacity className="flex-row items-center gap-x-4">
                    <StyledView className="w-10 h-10 bg-[#2f2f2f] rounded-lg justify-center items-center"><IconLocation /></StyledView>
                    <StyledText className="text-white font-normal text-base"> View location</StyledText>
                </StyledTouchableOpacity>

                <StyledTouchableOpacity className="flex-row items-center gap-x-4">
                    <StyledView className="w-10 h-10 bg-[#2f2f2f] rounded-lg justify-center items-center"><IconSettings/></StyledView>
                    <StyledText className="text-white font-normal text-base">Settings</StyledText>
                </StyledTouchableOpacity>
            </StyledView>

            <ButtonDeleteEvent />
        </StyledScrollView>
    );
};

export default ViewEvent;
