<template>
  <ValidationObserver
    ref="observer"
    v-slot="{ handleSubmit }"
    tag="div"
  >
    <form
      class="invoice-form"
      @submit.prevent="handleSubmit(onSubmit)"
    >
      <div class="invoice-form__fields-wrapper">
        <InputField
          v-model="form.name"
          class="invoice-form__field invoice-form__field--big"
          placeholder="Product name"
          rules="required"
          name="Product name"
        />
        <InputField
          v-model.number="form.price"
          type="number"
          class="invoice-form__field invoice-form__field--small"
          placeholder="Price"
          rules="required"
          name="Price"
        />
        <InputField
          v-model.number="form.qty"
          type="number"
          class="invoice-form__field invoice-form__field--small"
          placeholder="Qty"
          rules="required"
          name="Qty"
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { ValidationObserver } from 'vee-validate'
import { Invoice } from '@/types/invoice'
import InputField from '@/components/fields/InputField.vue'

type ComponentData = {
  form: Invoice
}

const defaultForm = ():Invoice => ({
  name: '',
  price: '',
  qty: '',
})

export default Vue.extend({
  name: 'InvoiceForm',

  components: {
    ValidationObserver,
    InputField,
  },

  data: ():ComponentData => ({
    form: defaultForm(),
  }),

  methods: {
    ...mapMutations('invoice', ['ADD_INVOICE']),

    onSubmit() {
      this.ADD_INVOICE(this.form)
      this.form = defaultForm()
    },
  },
})
</script>

<style>
.invoice-form {
  display: flex;
  justify-content: space-between;
}

.invoice-form__fields-wrapper {
  display: flex;
  justify-content: space-between;
  width: 90%;
}

.invoice-form__field--big {
  flex: 5;
}

.invoice-form__field--small {
  flex: 1;
}

.invoice-form__field {
  margin-right: 20px;
  min-width: 100px;
}
</style>
