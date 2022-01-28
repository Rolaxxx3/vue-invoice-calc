<template>
  <div>
    <h1>Vue invoice calc</h1>
    <InvoiceForm />
    <VueGoodTable
      class="invoice__table"
      :columns="tableColumns"
      :rows="invoices"
      :pagination-options="{ enabled: true }"
      :select-options="{
        enabled: true,
        selectOnCheckboxOnly: true,
        selectionInfoClass: 'custom-class',
        selectionText: 'rows selected',
        clearSelectionText: 'clear',
        disableSelectInfo: true,
      }"
      :sort-options="{
        enabled: false,
      }"
      @on-selected-rows-change="selectRow"
    >
      <template slot="pagination-bottom">
        <div class="invoice__table-actions">
          <button
            class="button--danger"
            @click="deleteRows"
          >
            Delete
          </button>

          Total: {{ getTotalPrice | currencyFilter }}
        </div>
      </template>
    </VueGoodTable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InvoiceForm from '@/components/forms/InvoiceForm.vue'
import { mapState } from 'vuex'
import { VueGoodTable } from 'vue-good-table'
import { Invoice } from "@/types/invoice"
import { VueGoodTableWithCheckbox, VueGoodTableCol } from "@/types/helpers"
import { mapMutations } from 'vuex'
import currencyFilter from '@/filters/currencyFilter'

type TableRow = Invoice & VueGoodTableWithCheckbox
type SelectedTableRows = {
  selectedRows: Array<TableRow>,
}

type ComponentDataType = {
  tableColumns: Array<VueGoodTableCol>,
  selectedRows: Array<TableRow>,
}

export default Vue.extend({
  name: 'Invoice',
  components: {
    InvoiceForm,
    VueGoodTable,
  },

  data: ():ComponentDataType => ({
    tableColumns: [
      { label: 'Product name', field: 'name' },
      { label: 'Price', field: 'price', formatFn: currencyFilter },
      { label: 'Qty', field: 'qty', formatFn: currencyFilter },
      { label: 'Sum', field: 'sum', formatFn: currencyFilter },
    ],

    selectedRows: [],
  }),

  computed: {
    ...mapState('invoice', ['invoices']),

    getTotalPrice():number {
      return this.invoices.reduce((prev:number, row:Invoice) => prev + row.sum, 0) || 0
    },
  },

  methods: {
    ...mapMutations('invoice', ['DELETE_INVOICES']),

    selectRow(rows:SelectedTableRows) {
      this.selectedRows = rows.selectedRows
    },

    deleteRows() {
      this.DELETE_INVOICES(this.selectedRows.map((row) => row.originalIndex))
    },
  },
})
</script>

<style scoped>
.invoice__table {
  margin-top: 40px;
  margin-bottom: 40px;
}
.invoice__table-actions {
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
