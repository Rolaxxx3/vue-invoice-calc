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
import { VueGoodTableWithCheckbox } from "@/types/helpers"
import { mapMutations } from 'vuex'

type TableRow = Invoice & VueGoodTableWithCheckbox
type SelectedTableRows = {
  selectedRows: Array<TableRow>,
}

type ComponentDataType = {
  tableColumns: Array<{
    label: string,
    field: string
  }>,
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
      { label: 'Price', field: 'price' },
      { label: 'Qty', field: 'qty' },
      { label: 'Sum', field: 'sum' },
    ],

    selectedRows: [],
  }),

  computed: {
    ...mapState('invoice', ['invoices']),

    getTotalPrice():number {
      return this.selectedRows.reduce((prev, row) => prev + row.price, 0) || 0
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
