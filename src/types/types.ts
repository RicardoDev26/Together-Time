export enum TypeEvent {
    Sport = "Sport",
    Meetings = "Meetings",
    Cultural = "Cultural",
    Educational = "Educational",
    Social = "Social",
    Work = "Work",
    Tourism = "Tourism",
    Health = " Health",
    Finalcial = "Finalcial",
    Other = "Other"
}

export interface ItemEvent {
    label: string,
    icon: string,
    value: TypeEvent
}

