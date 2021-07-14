export class PurchaseItem {
    public product_id: string;
    public product_name: string;
    public packaging_type: string;
    public uom: string;
    public unit_per_package: number;
    public package_qty: number;
    public loose_unit: number;
    public p_rate_per_c: number;
    public p_rate_per_p: number;
    public discount: number;
    public discount_amount: number;
    public total_rate: number;
    public isEdit: Boolean;

    constructor(
        product_id: string,
        product_name: string,
        packaging_type: string,
        uom: string,
        unit_per_package: number,
        package_qty: number,
        loose_unit: number,
        p_rate_per_c: number,
        p_rate_per_p: number,
        discount: number,
        discount_amount: number,
        total_rate: number,
        isEdit: Boolean) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.packaging_type = packaging_type;
        this.uom = uom;
        this.unit_per_package = unit_per_package;
        this.package_qty = package_qty;
        this.loose_unit = loose_unit;
        this.p_rate_per_c = p_rate_per_c;
        this.p_rate_per_p = p_rate_per_p;
        this.discount = discount;
        this.discount_amount = discount_amount;
        this.total_rate = total_rate;
        this.isEdit = isEdit;

    }
}