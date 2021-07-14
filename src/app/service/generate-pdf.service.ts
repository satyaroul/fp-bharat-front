import { Injectable } from "@angular/core";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { SaleEntry } from "../modals/saleEntry.modal";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: "root"
})
export class GeneratePDFService {
  invoiceData: SaleEntry;

  constructor() { }

  generateBill(action) {
    let billDefination = {
      content: [
        {
          text: `TAX INVOICE`,
          fontSize: 12,
          alignment: `center`,
          decoration: `underline`
        },
        {
          text: `BHARAT AGENCIES`,
          fontSize: 20,
          bold: true,
          alignment: `left`,
        },
        {
          canvas: [
            {
              type: `line`,
              x1: 0, y1: 5,
              x2: 520, y2: 5,
              margin: [0, 0, 0, 15]
            }
          ]
        },
        {
          columns: [
            [
              {
                text: `PLOT NO. 692, SAPANPUR,`,
                margin: [0, 5, 0, 0],
                fontSize: 10,
              },
              {
                text: `SALEPUR`,
                fontSize: 10,
              },
              {
                text: `PHONE: 8895203800,`,
                fontSize: 10,
              },
              {
                text: `CUTTACK`,
                fontSize: 10,
              },
              {
                text: `P.A.N. NO.: AAIFB8334Q `,
                fontSize: 10,
              },
              {
                text: `GSTIN NO.: AAIFB8334Q `,
                fontSize: 10,
              }
            ],
            [
              {
                margin: [0, 5, 0, 0],
                text: `INV. NO:  ${this.invoiceData.bill_id}`,
                fontSize: 10,
              },
              {
                text: `SOLD TO: ${this.invoiceData.ac_name}`,
                fontSize: 10,
              },
              {
                text: `ADDRESS:  ${this.invoiceData.ac_address}`,
                fontSize: 10,
              },
              {
                text: `MOBILE: ${this.invoiceData.ac_mobile}`,
                fontSize: 10,
              },
              {
                text: `P.A.N. NO.: ${this.invoiceData.ac_mobile} `,
                fontSize: 10,
              },
              {
                text: `GSTIN NO.: ${this.invoiceData.ac_mobile} `,
                fontSize: 10,
              },
            ],
            [
              {
                text: ` CREDIT`,
                bold: true,
                fontSize: 10,
                margin: [0, 5, 0, 0],
              },
              {
                text: `Date: ${this.invoiceData.date}`,
                bold: true,
                fontSize: 10,
              },
              {
                text: `S_MAN: ${this.invoiceData.salesman} `,
                fontSize: 10,
              },
            ]
          ]
        },
        {
          canvas: [
            {
              type: `line`,
              x1: 0, y1: 5,
              x2: 515, y2: 5,
              margin: [0, 0, 0, 15]
            }
          ]
        },
        {
          table: {
            headerRows: 1,
            fontSize: 3,
            widths: [`auto`, `*`, `auto`, `auto`, `auto`, `auto`, `auto`, `auto`, `auto`, `auto`, `auto`, `auto`],
            body: [
              [
                { text: `HSN`, fontSize: 8, bold: true },
                { text: `PRODUCT`, fontSize: 8, bold: true },
                { text: `CASE`, fontSize: 8, bold: true },
                { text: `QNTY`, fontSize: 8, bold: true },
                { text: `FREE`, fontSize: 8, bold: true },
                { text: `M.R.P.`, fontSize: 8, bold: true },
                { text: `RATE`, fontSize: 8, bold: true },
                { text: `AMOUNT`, fontSize: 8, bold: true },
                { text: `DIS AMT`, fontSize: 8, bold: true },
                { text: `GST%`, fontSize: 8, bold: true },
                { text: `GST AMT`, fontSize: 8, bold: true },
                { text: `NET AMT`, fontSize: 8, bold: true }
              ],
              ...this.invoiceData.bill_items.map(i => ([
                { text: i.hsn, fontSize: 8 },
                { text: i.item_name, fontSize: 8 },
                { text: i.pack, fontSize: 8 },
                { text: i.qty, fontSize: 8 },
                { text: i.free, fontSize: 8 },
                { text: i.mrp, fontSize: 8 },
                { text: i.s_rate_per_p, fontSize: 8 },
                { text: i.s_rate_per_c, fontSize: 8 },
                { text: i.discount, fontSize: 8 },
                { text: i.gst, fontSize: 8 },
                { text: i.gst_val, fontSize: 8 },
                { text: i.net_amount, fontSize: 8 }
              ]))
            ]
          }
        },
        {
          margin: [0, 50, 0, 0],
          text: `Net Outstanding Balance: Rs. 828828  Previous Outstanding : Rs. 17890`,
          fontSize: 12,
          alignment: `left`,
          bold: true
        },
        {
          table: {
            headerRows: 1,
            widths: [`*`],
            body: [
              [
                {
                  columns: [
                    {
                      width: `auto`,
                      margin: [0, 0, 10, 0],
                      text: [
                        { text: `Basic Amt\n`, fontSize: 8, bold: true },
                        { text: this.invoiceData.basic_amt, fontSize: 12 }
                      ]
                    },
                    {
                      width: `auto`,
                      margin: [0, 0, 10, 0],
                      text: [
                        { text: `Discount\n`, fontSize: 8, bold: true },
                        { text: this.invoiceData.discount, fontSize: 12 }
                      ]
                    },
                    {
                      width: `auto`,
                      margin: [0, 0, 10, 0],
                      text: [
                        { text: `Taxable\n`, fontSize: 8, bold: true },
                        { text: this.invoiceData.taxable_amt, fontSize: 12 }
                      ]
                    },
                    {
                      width: `auto`,
                      margin: [0, 0, 10, 0],
                      text: [
                        { text: `CGST Amt\n`, fontSize: 8, bold: true },
                        { text: this.invoiceData.cgst, fontSize: 12 }
                      ]
                    },
                    {
                      width: `auto`,
                      margin: [0, 0, 10, 0],
                      text: [
                        { text: `SGST Amt\n`, fontSize: 8, bold: true },
                        { text: this.invoiceData.sgst, fontSize: 12 }
                      ]
                    },
                    {
                      width: `auto`,
                      margin: [0, 0, 10, 0],
                      text: [
                        { text: `R-off\n`, fontSize: 8, bold: true },
                        { text: `John Doe`, fontSize: 12 }
                      ]
                    },
                    {
                      width: `auto`,
                      margin: [0, 0, 10, 0],
                      text: [
                        { text: `Bill Total #\n`, fontSize: 8, bold: true },
                        { text: this.invoiceData.total_amt, fontSize: 12 }
                      ]
                    }
                  ]
                }
              ],
            ]
          }
        },
        {
          ul: [
            `Order can be return in max 10 days.`,
            `Warrenty of the product will be subject to the manufacturer terms and conditions.`,
            `This is system generated invoice.`,
          ],
        },
        {
          columns: [
            [
              {
                margin: [0, 30, 0, 0],
                text: "Customer`s Signature",
                fontSize: 8,
                align: "left"
              }
            ],
            [
              {
                margin: [150, 30, 0, 0],
                text: "For BHARAT AGENCIES",
                fontSize: 10,
                bold: true,
                align: "right"
              }
            ]
          ]
        },
      ],

      // Page Footer

      footer: function (currentPage, pageCount) {
        return {
          alignment: `center`,
          text: currentPage.toString() + ` of ` + pageCount,
          fontSize: 8
        }
      },
    }

    switch (action) {
      case "print":
        pdfMake.createPdf(billDefination).print();
        break;
      case "download":
        pdfMake.createPdf(billDefination).download();
        break;
      default:
        break;
    }

  }


}
