<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-px-lg q-pa-sm">
      <div class="text-h6 text-primary text-bold">> Contact</div>
    </div>
    <div class="q-mx-md q-pa-lg">
      <q-input
        disabled
        v-model="email"
        type="text"
        filled
        style="max-width: 260px;"
        bg-color="white"
      >
        <template v-slot:append>
          <q-btn
            flat
            dense
            color="primary"
            icon="fas fa-copy"
            @click.stop="copyText()"
          />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
import { copyToClipboard } from 'quasar'

export default {
  data () {
    return {
      email: 'isaworld2016@gmail.com'
    }
  },
  methods: {
    copyText () {
      copyToClipboard(this.email).then(() => {
        this.$q.notify({
          message: 'e-mail is copied',
          icon: 'mail',
          color: 'primary',
          textColor: 'white',
          position: 'bottom',
          timeout: 1500
        })
      })
    }
  }
}
</script>
