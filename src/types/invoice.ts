import { StringOrNumber } from '@/types/helpers'

export type Invoice = {
  name: string,
  price: StringOrNumber,
  qty: StringOrNumber,
}

export type InvoiceStore = {
  invoices: Array<Invoice>
}
