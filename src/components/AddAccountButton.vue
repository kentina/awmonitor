<template>
  <slot :open="openModal">
    <Icon
      v-bind="$attrs"
      name="plus-circle"
      class="text-primary transform scale-150 cursor-pointer"
      @click="openModal" />
  </slot>
  <Dialog
    v-model="visible"
    :panel-mode="true"
    title="Add Account"
    @confirm="onConfirm"
    @cancel="account = null">
    <FormInput
      v-model="account"
      placeholder="account1.wam,1"
      @keyup.enter.native="onEnterKey" />
  </Dialog>
</template>

<script>
export default {
  name: 'AddAccountButton',
  inject: ['$app'],
  data() {
    return {
      visible: false,
      account: null
    }
  },
  methods: {
    openModal() {
      this.visible = true
    },
    onConfirm() {
      if (this.account) {
        alert(this.account)
        console.log(this.account)
        this.$app.addAccount(this.account)
        this.account = null
      }
    },
    onEnterKey() {
      this.onConfirm()
      this.visible = false
    }
  }
}
</script>
