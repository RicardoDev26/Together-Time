import { ItemEvent } from "../types/types"
import { TypeEvent } from "../types/types"

export const eventOpcion: ItemEvent[] = [
    { label: 'Sport', icon: require("../../assets/Icons/IconSport.png"), value: TypeEvent.Sport },
    { label: 'Meetings', icon: require("../../assets/Icons/IconMeeting.png"), value: TypeEvent.Meetings },
    { label: 'Cultural', icon: require("../../assets/Icons/IconCultural.png"), value: TypeEvent.Cultural },
    { label: 'Educational', icon: require("../../assets/Icons/IconEducational.png"), value: TypeEvent.Educational },
    { label: 'Social', icon: require("../../assets/Icons/IconSocial.png"), value: TypeEvent.Social },
    { label: 'Work', icon: require("../../assets/Icons/IconWork.png"), value: TypeEvent.Work },
    { label: "Travel and Tourism", icon: require("../../assets/Icons/IconTourism.png"), value: TypeEvent.Tourism },
    { label: 'Health and Wellness', icon: require("../../assets/Icons/IconHealth.png"), value: TypeEvent.Health },
    { label: 'Finalcial', icon: require("../../assets/Icons/IconBizzne.png"), value: TypeEvent.Finalcial },
    { label: 'Other', icon: require("../../assets/Icons/IconOthers.png"), value: TypeEvent.Other },
];