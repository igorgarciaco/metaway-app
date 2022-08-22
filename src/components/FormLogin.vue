<script>
import axios from 'axios';

export default {
  name: 'FormLogin',
  components: {
  },

  data() {
    return {
      showPassword: false,
      field: '',
      form: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    submitForm() {
      // axios({
      //   method: 'post',
      //   url: 'https://metawaydemo.vps-kinghost.net:8487/api/auth/login',
      //   data: this.form,
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // })
      //   .then((res) => {
      //     alert(res)
      //     this.$emit("loader");
      //     this.$router.push('/');
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
       this.$emit("loader");
       setTimeout(() => {
        this.$router.push('/');
      }, 2000);
    },

    toggleShow() {
      this.showPassword = !this.showPassword;
    }
  },

  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  }
}
</script>

<template lang="">
  <div>
    <img class="img-responsive metaway-logo" src="../assets/metaway_logo.png" alt="Metaway Logo"/>
      <form v-on:submit.prevent="submitForm">
      <div class="container">
        <label>
            Usuário
          <input type="text" placeholder="" name="username" required v-model="form.username">
        </label>
        <label>
          Senha
          <input type="text" id="password" name="password" required v-if="showPassword" >
          <input type="password" id="password" name="password" required v-else v-model="form.password">
        </label>
        <button type="submit" class="btn">Entrar</button>
      </div>
      
    </form>
  </div>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  position: relative;
}

input {
  border: 0;
  border-bottom: 1px solid #e6e6e6;
  background: #e6e6e66d;

  padding: .625rem;
  margin: .3125rem 0;
  border-top-left-radius: .375rem;
  border-top-right-radius: .375rem;
}

input:focus-visible {
  outline-offset: 0px;
  outline: 0;
  border-color: var(--blue-300);
}

.metaway-logo {
  margin-bottom: 1rem;
}

.btn {
  background: var(--blue-600);
  color: var(--light);
  border: 0;
  border-radius: 0.25rem;
  padding: .625rem .9375rem;
}

.btn:hover,
.btn:focus {
  cursor: pointer;
  filter: brightness(0.9);
  transition: all 250ms linear
}

.eye-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: .625rem;
  margin: .3125rem 0;

  display: flex;
  cursor: pointer;
}

.eye-icon:hover {
  background: #e6e6e6;
  border-top-right-radius: 6px;
}
</style>