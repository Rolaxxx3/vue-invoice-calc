import { InvoiceForm, InvoiceStore } from '@/types/invoice'

export default {
  ADD_INVOICE(state:InvoiceStore, payload:InvoiceForm) {
    state.invoices.push({
      ...payload,
      sum: payload.qty * payload.price,
    })
  },
  DELETE_INVOICES(state:InvoiceStore, payload:Array<number>) {
    state.invoices = state.invoices.filter((invoice, index) => !payload.includes(index))
  },
}
