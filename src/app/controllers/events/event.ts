export class Event {
    id: number;
    start: Date;
    end: Date;
    title: string;
    color: {
        primary_color: string,
        secondary_color: string
    }
    allDay: boolean;
    resizable: {
        beforeStart: boolean,
        afterEnd: boolean
    }
    draggable: boolean;
    details: {
        description: string,
        host: string,
        location: string,
        event_type_id: number,
        event_status_id: number,
        event_frequency_id: number,
        image_names: string[],
        last_changed_timestamp: string,
        last_updated_by: number
    }
    constructor() {}
}
