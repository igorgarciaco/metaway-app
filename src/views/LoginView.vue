<script>
import FormLogin from '../components/FormLogin.vue';

export default {
  name: 'LoginView',
  components: {
    FormLogin
  },

  data() {
    return{
      loading: false,
    }
  },

  methods: {
    loaderAnimation() {
      this.loading = true
    }
  }
}
</script>

<template lang="">
  <div class="page-container">
    <div class="login-wrapper">
      <div class="loader" :class="this.loading ? 'fill-loader' : ''"></div>
      <div class="form-handler">
        <FormLogin @loader="loaderAnimation"/>
      </div>
      <div class="illustration-handler">
        <img src="../assets/undraw_people.svg" alt=" "/>
      </div>
    </div>
  </div>
</template>

<style scoped >
.page-container {
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--blue-100);
}

.loader{
  position: absolute;
  left: 0;
  width: 0%;
  height: 100%;

  display: block;
  z-index: 2;
  background: var(--light);
  border-radius: 6px;

}

.fill-loader{
  animation: fillLoader 2s forwards;
}

.login-wrapper {
  display: flex;
  position: relative;

  max-width: 50rem;
  width: 100%;
  margin: auto;
  border-radius: .375rem;

  background: var(--blue-600);
  box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%), 0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%), 0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);
}

.form-handler {
  width: 40%;
  padding: 2.5rem;
  background: var(--light);
  border-radius: 6px 0 0 6px;
}

.illustration-handler {
  max-width: 25rem;
  padding: 2.5rem;
  opacity: 0.8;

  display: flex;
}

.illustration-handler img {
  max-width: 21.875rem;
}

@keyframes fillLoader{
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .illustration-handler{
    display: none;
  }

  .form-handler{
    width: 100%;
  }
}
</style>