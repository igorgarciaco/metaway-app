<script>
export default {
  name: 'AsideNav',
}
</script>

<template>
  <div class="sidenav">
    <img src="../assets/avatar-placeholder.png" alt="User Avatar" class="user-avatar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/" class="nav-link">Meu cadastro</router-link>
    <router-link to="/" class="nav-link">Usuários</router-link>
    <router-link to="/" class="nav-link">Pessoas</router-link>
    <router-link to="/" class="nav-link">Contatos</router-link>
    <router-link to="/" class="nav-link">Logout</router-link>
  </div>
</template>

<style scoped>
.sidenav {
  height: 90%;
  width: 20rem;
  position: fixed;
  z-index: 1;
  top: 5%;

  background-color: var(--blue-600);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%), 0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%), 0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nav-link{
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--light);
}

.nav-link:hover, .nav-link:focus{
  background-color: rgba(255, 255, 255, 0.155);
}

.user-avatar{
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  padding: .3125rem;
  background: var(--light);
  margin: 1rem auto;
}
</style>