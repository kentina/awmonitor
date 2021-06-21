<template>
  <div class="max-w-full rounded-3xl bg-white p-8">
    <img src="https://chart.googleapis.com/chart?chs=250x250&amp;cht=qr&amp;chl=5g5c.wam&amp;choe=UTF-8" alt="">
  </div>
</template>

<script>
import QrCreator from 'qr-creator'

export default {
  name: 'QrCode',
  props: {
    value: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '250px'
    }
  },
  watch: {
    value:'updateCanvas'
  },
  methods: {
    updateCanvas() {
      const options = {
        text: this.value,
        radius: 0.0,
        ecLevel: 'M',
        fill: '#000000',
        background: null,
        size: 186
      }

      QrCreator.render(options, this.$refs.code)
    }
  },
  mounted() {
    this.updateCanvas()
  }
}
</script>
