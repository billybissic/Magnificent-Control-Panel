export interface CalendarEvent {
    start: string;
    end: string;
    title: string;
    colors: Colors;
    allDay: boolean;
    resizable: Resizable;
    draggable: boolean;
    details: Details;
}

export interface Colors {
    primary_color: string;
    secondary_color: string;
}

export interface Resizable {
    beforeStart: boolean;
    afterEnd: boolean;
}

export interface Details {
    description: string;
    host: string;
    location: string;
    event_type_id: number;
    event_status_id: number;
    event_frequency_id: number;
    image_names: string;
}
