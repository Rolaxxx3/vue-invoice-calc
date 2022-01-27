<template>
  <div>
    <h1>Vue invoice calc</h1>
    <InvoiceForm />
    <VueGoodTable
      class="invoice__table"
      :columns="tableColumns"
      :rows="invoices"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InvoiceForm from '@/components/forms/InvoiceForm.vue'
import { mapState } from 'vuex'
import { VueGoodTable } from 'vue-good-table'

export default Vue.extend({
  name: 'Invoice',
  components: {
    InvoiceForm,
    VueGoodTable,
  },

  data: () => ({
    tableColumns: [
      { label: 'Product name', field: 'name' },
      { label: 'Price', field: 'price' },
      { label: 'Qty', field: 'qty' },
    ],
  }),

  computed: {
    ...mapState('invoice', ['invoices']),
  },
})
</script>

<style scoped>
.invoice__table {
  margin-top: 40px;
}
</style>
