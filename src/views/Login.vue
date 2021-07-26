<template>
  <v-app id="inspire">
    <div class="alert">
      <v-alert v-if="error.status" type="error"> {{ error.message }} </v-alert>
    </div>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Yönetici paneli girişi</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="mdi-account"
                    v-model="user.email"
                    name="login"
                    label="Email Adresi"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    v-model="user.password"
                    prepend-icon="mdi-lock"
                    name="password"
                    label="Şifre"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="login()" color="primary" :disabled="loading">
                  <v-progress-circular
                    v-if="loading"
                    :width="7"
                    color="white"
                    indeterminate
                  ></v-progress-circular>
                  Giriş
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { LOGIN } from "../core/services/store/auth.module";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      loading: false,
      error: {
        status: false,
        message: "",
      },
    };
  },
  methods: {
    login() {
      const email = this.user.email;
      const password = this.user.password;
      this.loading = true;
      // send login request
      this.$store
        .dispatch(LOGIN, { credentials:{ email, password}, query: this.$route.query.serviceURL })
        // go to which page after successfully login
        .then((x) => {
          if (x) {
            console.log(x);
          } else {
            this.error.status = true;
            this.error.message = x;
            this.loading = false;
            setTimeout(() => {
              this.error.status = false;
            }, 5000);
          }
        });
    },
  },
};
</script>

<style scoped>
.alert {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
