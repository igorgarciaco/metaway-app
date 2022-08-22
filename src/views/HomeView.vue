<script>
import AsideNav from "../components/AsideNav.vue";
import ContactsTable from "../components/ContactsTable.vue";

export default {
  name: 'HomeView',
  components: {
    AsideNav,
    ContactsTable
  },

  data() {
  },

  methods: {
  }
}
</script>

<template>
  <AsideNav />
  <main>
    <div class="main-content">
      <ContactsTable />
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--blue-100);
}

.main-content {
  background-color: var(--light);
  height: 90%;
  min-width: 50rem;
  margin-left: 20rem;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 7%), 0 4px 8px rgb(0 0 0 / 7%), 0 8px 16px rgb(0 0 0 / 7%), 0 16px 32px rgb(0 0 0 / 7%), 0 32px 64px rgb(0 0 0 / 7%);

}
</style>