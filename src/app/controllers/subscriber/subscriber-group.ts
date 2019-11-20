export class SubscriberGroup {
    subscriber_group_id: number;
    subscriber_group_name: string;
    subscriber_group_description: string;

    constructor();
    constructor(group_id: number, group_name: string, group_desc: string);
    constructor(group_id?: number, group_name?: string, group_desc?: string) {
      this.subscriber_group_id = group_id;
      this.subscriber_group_name = group_name;
      this.subscriber_group_description = group_desc;
    }
}
