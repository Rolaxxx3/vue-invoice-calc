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
          rules="required|min:3"
          name="Product name"
        />
        <InputField
          v-model.number="form.price"
          type="number"
          class="invoice-form__field invoice-form__field--small"
          placeholder="Price"
          rules="required|min_value:0"
          name="Price"
        />
        <InputField
          v-model.number="form.qty"
          type="number"
          class="invoice-form__field invoice-form__field--small"
          placeholder="Qty"
          rules="required|min_value:0"
          name="Qty"
        />
      </div>
      <button
        class="button--success invoice-form__button"
        type="submit"
      >
        Submit
      </button>
    </form>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
import { ValidationObserver } from 'vee-validate'
import { InvoiceForm } from '@/types/invoice'
import InputField from '@/components/fields/InputField.vue'

type ComponentData = {
  form: InvoiceForm
}

const defaultForm = ():InvoiceForm => ({
  name: '',
  price: 0,
  qty: 0,
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
      const observer = this.$refs.observer
      if (observer) {
        // @ts-ignore
        observer.reset()
      }
    },
  },
})
</script>

<style lang="scss">
@import "src/scss/mixins";

.invoice-form {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}

.invoice-form__fields-wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
}

.invoice-form__button {
  width: 100%;
}

.invoice-form__field {
  min-width: 150px;
}

@include respond-to(md) {
  .invoice-form__fields-wrapper, .invoice-form  {
    flex-direction: row;
  }

  .invoice-form__fields-wrapper {
    width: 80%;
  }

  .invoice-form__field--big {
    flex: 5;
  }

  .invoice-form__field--small {
    flex: 1;
  }
  .invoice-form__field {
    margin-right: 20px;
  }
  .invoice-form__button {
    width: initial;
  }
}
</style>
