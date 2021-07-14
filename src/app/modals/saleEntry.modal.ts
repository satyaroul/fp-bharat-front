import { ItemData } from '../modals/saleItem.modal';

export class SaleEntry {
   public ac_id: number;
   public ac_name: string;
   public ac_address: string;
   public ac_mobile: number;
   public salesman: string;
   public date: string;
   public discount: number;
   public basic_amt : number;
   public taxable_amt: number;
   public total_amt: number;
   public bill_id: string;
   public cgst: number;
   public sgst: number;
   public bill_items : ItemData[];

    constructor( ac_id: number,
         ac_name: string,
         ac_address: string,
         ac_mobile: number,
         salesman: string,
         date: string,
         discount: number,
         basic_amt : number,
         taxable_amt: number,
         total_amt: number,
         bill_id: string,
         cgst: number,
         sgst: number,
         bill_items : ItemData[]) {
            this.ac_id = ac_id;
            this.ac_name = ac_name;
            this.ac_address = ac_address;
            this.ac_mobile = ac_mobile;
            this.salesman = salesman;
            this.date = date;
            this.discount = discount;
            this.basic_amt = basic_amt;
            this.taxable_amt = taxable_amt;
            this.total_amt = total_amt;
            this.bill_id = bill_id;
            this.cgst = cgst;
            this.sgst = sgst;
            this.bill_items = bill_items;
    }
}