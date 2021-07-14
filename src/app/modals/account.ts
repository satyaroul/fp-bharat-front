export class Account {
    public account_group: string;
    public account_name: string;
    public account_type: string;
    public address: string;
    public beat_area: string;
    public gstn: string;
    public mobile_no: string;
    public pan: string;

    constructor(account_group: string,
        account_name: string,
        account_type: string,
        address: string,
        beat_area: string,
        gstn: string,
        mobile_no: string,
        pan: string) {
        this.account_group = account_group;
        this.account_name = account_name;
        this.account_type = account_type;
        this.address = address;
        this.beat_area = beat_area;
        this.gstn = gstn;
        this.mobile_no = mobile_no;
        this.pan = pan

    }
}