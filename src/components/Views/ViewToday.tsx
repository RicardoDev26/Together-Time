import React from "react";
import { StyledView, StyledText, StyledTouchableOpacity, StyledImage } from "../../shared/styled";
import { TypeEvent } from "../../types/types";
import { ItemEvent } from "../../types/types";
import { eventOpcion } from "../../utils/Constants";
import IconNone from "../Icons/IconNone";

interface Item {
    title: string;
    day: string;
    event: TypeEvent;
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
]

const getEventIcon = (eventType: TypeEvent): string | null => {
    const event = eventOpcion.find((item) => item.value === eventType)
    return event ? event.icon : null
}


const ViewToday: React.FC<Item> = ({ title, day, event }) => {
    const icon = getEventIcon(event)

    return (
        <StyledTouchableOpacity className="w-full flex-row mt-5 mb-4 items-center justify-between">
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
    );
};

const EventList: React.FC = () => {
    return (
        <StyledView className="p-4">
            {infoEvent.map((item, index) => (
                <ViewToday key={index} {...item} />
            ))}
        </StyledView>
    )
}

export default EventList
