import { Invoice, InvoiceStore } from '@/types/invoice'

export default {
  ADD_INVOICE(state:InvoiceStore, payload:Invoice) {
    state.invoices.push(payload)
  },
}
