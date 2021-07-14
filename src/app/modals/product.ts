export class Product {
    public product_name: string;
    public mfg_group_code: string;
    public uom: string;
    public packing_type: string;
    public unit_per_package: number;
    public hsn_code: string;
    public gst: number;
    public sgst: number;
    public cgst: number;
    public discount: number;
    public discount_amount: number;
    public mrp: number;
    public p_rate_per_p: number;
    public p_rate_per_c: number;
    public s_rate_per_p: number;
    public s_rate_per_c: number;
    constructor(product_name: string,
        mfg_group_code: string,
        uom: string,
        packing_type: string,
        unit_per_package: number,
        hsn_code: string,
        gst: number,
        sgst: number,
        cgst: number,
        discount: number,
        discount_amount: number,
        mrp: number,
        p_rate_per_p: number,
        p_rate_per_c: number,
        s_rate_per_p: number,
        s_rate_per_c: number,) {
        this.product_name = product_name;
        this.mfg_group_code = mfg_group_code;
        this.packing_type = packing_type;
        this.uom = uom;
        this.unit_per_package = unit_per_package;
        this.hsn_code = hsn_code;
        this.gst = gst;
        this.sgst = sgst;
        this.cgst = cgst;
        this.discount = discount;
        this.discount_amount = discount_amount;
        this.mrp = mrp;
        this.p_rate_per_p = p_rate_per_p;
        this.p_rate_per_c = p_rate_per_c;
        this.s_rate_per_p = s_rate_per_p;
        this.s_rate_per_c = s_rate_per_c;
    }
}