export type InvoiceForm = {
  name: string,
  price: number,
  qty: number,
}

export type Invoice = InvoiceForm & { sum: number }

export type InvoiceStore = {
  invoices: Array<Invoice>
}
