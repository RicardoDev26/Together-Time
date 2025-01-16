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
    Other = "Other",
    None = ""
}

export interface ItemEvent {
    label: string,
    icon: string,
    value: TypeEvent
}


export enum StateSlice {
    NONE = "NONE",
    OPEN = "OPEN",
    CLOSE = "CLOSE"
}

export enum StateSliceUp {
    NONE = "NONE",
    OPEN = "OPEN",
    CLOSE = "CLOSE"
}
