export class CalEvent {
    start: any;
    end: any;
    title: string;
    colors: {
        primaryColor: string,
        secondaryColor: string
    }
    actions: any;
    allDay: boolean;
    resizable: {
        beforeStart: boolean,
        afterEnd: boolean
    }
    draggable: boolean;

    constructor() {}
}