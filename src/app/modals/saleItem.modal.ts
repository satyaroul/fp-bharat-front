export class ItemData {
    public item_id: number;
    public item_name: string;
    public hsn: string
    public uom: string;
    public pack: number;
    public qty: number;
    public free: number;
    public net_qty : number;
    public discount: number;
    public discount_rate: number;
    public unit_per_pack: number;
    public mrp: number;
    public gst: number;
    public basic_amount: number;
    public taxable_amount: number;
    public net_amount: number;
    public gst_val: number;
    public s_rate_per_p : number;
    public s_rate_per_c:number;


    constructor(item_id: number,
        item_name: string,
        hsn: string,
        uom: string,
        pack: number,
        qty: number,
        free: number,
        net_qty : number,
        discount: number,
        discount_rate: number,
        basic_amount: number,
        taxable_amount: number,
        unit_per_pack: number,
        mrp: number,
        gst: number,
        net_amount: number,
        gst_val: number,
        s_rate_per_p : number,
        s_rate_per_c :number ){
        this.item_id = item_id;
        this.item_name = item_name;
        this.hsn = hsn;
        this.pack = pack;
        this.uom = uom;
        this.qty = qty;
        this.free = free;
        this.net_qty = net_qty;
        this.discount = discount;
        this.discount_rate = discount_rate;
        this.basic_amount = basic_amount;
        this.taxable_amount = taxable_amount;
        this.mrp = mrp;
        this.unit_per_pack = unit_per_pack;
        this.gst = gst;
        this.net_amount = net_amount;
        this.gst_val = gst_val;
        this.s_rate_per_p = s_rate_per_p;
        this.s_rate_per_c = s_rate_per_c;
    }
}
