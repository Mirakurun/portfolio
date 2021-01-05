<template>
  <div style="background-color: black">
    <q-parallax id="contact" src="images/tea.jpg" :height="contactBoxHeight">
      <div class="q-px-sm q-py-xl">
        <div class="container q-gutter-y-lg">
          <div class="text-h4 text-white ubuntu-mono">Contact</div>
          <div class="flex flex-center">
            <q-form
              ref="form"
              style="width: 100%; max-width: 500px"
              @reset="reset"
              @submit="validate"
            >
              <q-card dark flat style="opacity: 0.8">
                <q-card-section>
                  <div class="text-h6 text-white">Send me a message</div>
                </q-card-section>
                <q-card-section>
                  <div class="q-gutter-y-md">
                    <q-input
                      v-model="form.name"
                      dark
                      outlined
                      square
                      color="info"
                      label-color="info"
                      label="Name"
                      :error="$v.form.name.$error"
                      error-message="Required"
                      bottom-slots
                    />
                    <q-input
                      v-model="form.email"
                      dark
                      outlined
                      square
                      color="info"
                      label-color="info"
                      label="Email"
                      :error="$v.form.email.$error"
                      error-message="Invalid email"
                      bottom-slots
                    />
                    <q-input
                      v-model="form.subject"
                      dark
                      outlined
                      square
                      color="info"
                      label-color="info"
                      label="Subject"
                      :error="$v.form.subject.$error"
                      error-message="Required"
                      bottom-slots
                    />
                    <q-input
                      v-model="form.message"
                      dark
                      outlined
                      square
                      color="info"
                      label-color="info"
                      label="Message"
                      autogrow
                      :error="$v.form.message.$error"
                      error-message="Required"
                      bottom-slots
                    />
                  </div>
                </q-card-section>
                <q-card-section>
                  <vue-recaptcha
                    ref="recaptcha"
                    size="invisible"
                    badge="inline"
                    :sitekey="sitekey"
                    @verify="submit"
                    @expired="expire"
                  ></vue-recaptcha>
                </q-card-section>
                <q-card-actions>
                  <div class="q-pa-sm">
                    <q-btn
                      unelevated
                      color="primary"
                      icon="fas fa-paper-plane"
                      label="Submit"
                      type="submit"
                      style="opacity: 1"
                    />
                  </div>
                </q-card-actions>
              </q-card>
            </q-form>
          </div>
        </div>

        <q-resize-observer @resize="onContactBoxResize" />
      </div>
    </q-parallax>
  </div>
</template>

<script>
import { QSpinnerHourglass } from 'quasar';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';

axios.defaults.baseURL = process.env.API;

Vue.use(Vuelidate);

export default {
  name: 'Contact',
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      contactBoxHeight: 0,
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        token: '',
      },
    };
  },
  validations: {
    form: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      subject: {
        required,
      },
      message: {
        required,
      },
    },
  },
  computed: {
    sitekey() {
      return process.env.SITEKEY;
    },
  },
  methods: {
    onContactBoxResize(size) {
      this.contactBoxHeight = size.height;
    },
    expire() {
      this.$refs.recaptcha.reset();
    },
    async submit(token) {
      this.form.token = token;

      this.$q.loading.show({
        message: 'Sending message...',
        spinner: QSpinnerHourglass,
        spinnerColor: 'teal',
      });

      try {
        const response = await axios.post('/contact', this.form);

        if (response.data.success) {
          this.$q.notify({
            type: 'positive',
            message: response.data.message,
          });
        } else if (!response.data.success) {
          this.$q.notify({
            type: 'negative',
            message: response.data.message,
          });
        }
      } catch (error) {
        if (error.response) {
          this.$q.notify({
            type: 'negative',
            message: error.response.data.message,
          });
        }
        if (error.request) {
          this.$q.notify({
            type: 'negative',
            message: error.request.statusText,
          });
        }
        if (error.statusText) {
          this.$q.notify({
            type: 'negative',
            message: error.statusText,
          });
        }
      } finally {
        this.$q.loading.hide();
        this.$refs.recaptcha.reset();
        this.$refs.form.reset();
        this.$v.form.$reset();
      }
    },
    validate() {
      this.$v.form.$touch();

      if (this.$v.form.$error) {
        return;
      }
      this.$refs.recaptcha.execute();
    },
    reset() {
      this.form.name = '';
      this.form.email = '';
      this.form.subject = '';
      this.form.message = '';
    },
  },
};
</script>

<style lang="scss" scoped>
#contact {
  ::v-deep .q-parallax__content {
    align-items: stretch;
  }
}

.q-parallax {
  ::v-deep .q-parallax__media {
    filter: blur(1px) brightness(50%);
  }
}
</style>
