<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    class="input-field"
    :rules="rules"
    :name="name"
  >
    <input
      v-model="componentValue"
      class="input-field__input"
      :placeholder="placeholder"
    >
    <div class="input-field__error-wrapper error">
      {{ errors[0] }}
    </div>
  </ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue'
import { StringOrNumber } from '@/types/helpers'
import { ValidationProvider } from 'vee-validate'

export default Vue.extend({
  name: 'InputField',

  components: {
    ValidationProvider,
  },

  props: {
    placeholder: {
      type: String,
      default: '',
    },

    value: {
      type: [String, Number],
      required: true,
    },

    rules: {
      type: String,
      default: '',
    },

    name: {
      type: String,
      default: '',
    },
  },

  computed: {
    componentValue: {
      get():StringOrNumber {
        return this.value
      },

      set(val:StringOrNumber):void {
        this.$emit('input', val)
      },
    },
  },
})
</script>

<style lang="scss">
.input-field__input {
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  padding: 8px;
}
.input-field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-field__error-wrapper {
  margin-top: 4px;
  height: 20px;
  font-size: 14px;
}
</style>
