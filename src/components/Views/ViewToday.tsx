import React from "react";
import { FlatList } from "react-native";
import { StyledView, StyledText, StyledTouchableOpacity, StyledImage } from "../../shared/styled";
import { TypeEvent } from "../../types/types";
import { eventOpcion } from "../../utils/Constants";
import IconNone from "../Icons/IconNone";
import { useNavigation } from "@react-navigation/native";

interface Item {
    title: string
    day: string
    event: TypeEvent
}

const infoEvent: Item[] = [
    {
        title: "Partido de futbol",
        day: "13:00 - 15:00",
        event: TypeEvent.Sport,
    },
    {
        title: "Cena con mi novia",
        day: "18:00 - 20:00",
        event: TypeEvent.Social,
    },
    {
        title: "Salida con mis amigos",
        day: "20:00 - 22:00",
        event: TypeEvent.Social,
    },
    {
        title: "Junta de trabajo",
        day: "08:00 - 10:00",
        event: TypeEvent.Meetings,
    },
    {
        title: "Partido de futbol",
        day: "13:00 - 15:00",
        event: TypeEvent.Sport,
    },
    {
        title: "Cena con mi novia",
        day: "18:00 - 20:00",
        event: TypeEvent.Social,
    },
    {
        title: "Salida con mis amigos",
        day: "20:00 - 22:00",
        event: TypeEvent.Social,
    },
    {
        title: "Junta de trabajo",
        day: "08:00 - 10:00",
        event: TypeEvent.Meetings,
    },
    {
        title: "Partido de futbol",
        day: "13:00 - 15:00",
        event: TypeEvent.Sport,
    },
    {
        title: "Cena con mi novia",
        day: "18:00 - 20:00",
        event: TypeEvent.Social,
    },
    {
        title: "Salida con mis amigos",
        day: "20:00 - 22:00",
        event: TypeEvent.Social,
    },
    {
        title: "Junta de trabajo",
        day: "08:00 - 10:00",
        event: TypeEvent.Meetings,
    },
]

const getEventIcon = (eventType: TypeEvent): string | null => {
    const event = eventOpcion.find((item) => item.value === eventType);
    return event ? event.icon : null
}

const ViewToday: React.FC<Item> = ({ title, day, event }) => {

    const Navigation = useNavigation()
    const icon = getEventIcon(event)

    return (
        <StyledTouchableOpacity onPress={() => Navigation.navigate('EventScreen')} className="w-full flex-row mt-5 mb-4 items-center justify-between">
            <StyledView className="flex-row gap-x-2">
                <StyledView className="w-12 h-12 rounded-lg bg-[#2e2e2e] mr-3 justify-center items-center">
                    {icon && <StyledImage source={icon} style={{ width: 25, height: 25 }} />}
                </StyledView>
                <StyledView>
                    <StyledText className="text-white font-medium text-base">{title}</StyledText>
                    <StyledText className="text-[#484848] text-xs font-semibold">{day}</StyledText>
                </StyledView>
            </StyledView>
            <StyledView>
                <IconNone />
            </StyledView>
        </StyledTouchableOpacity>
    )
}

const EventList: React.FC = () => {
    const renderItem = ({ item }: { item: Item }) => <ViewToday {...item} />

    return (
        <StyledView className="p-4">
            <FlatList
                data={infoEvent}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </StyledView>
    )
}

export default EventList
