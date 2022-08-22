<script>
export default {
  name: 'ContactsTable'
}
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Nome</th>
          <th scope="col">Número</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" class="text-center">
            <font-awesome-icon icon="fa-solid fa-user" />
          </th>
          <td>Jane Doe</td>
          <td>+55 9 9999-9999</td>
          <td class="text-center">
            <button class="btn btn-outline-success rounded-pill">
              <font-awesome-icon icon="fa-solid fa-star" /> Favoritar
            </button>
            <button class="btn btn-danger rounded-pill ms-2 me-2">
              <font-awesome-icon icon="fa-solid fa-trash" /> Deletar
            </button>
            <button class="btn btn-warning rounded-pill">
              <font-awesome-icon icon="fa-solid fa-pen" /> Editar
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-center">
            <font-awesome-icon icon="fa-solid fa-user" />
          </th>
          <td>Jane Doe</td>
          <td>+55 9 9999-9999</td>
            <td class="text-center">
             <button class="btn btn-outline-success rounded-pill">
              <font-awesome-icon icon="fa-solid fa-star" /> Favoritar
            </button>
            <button class="btn btn-danger rounded-pill ms-2 me-2">
              <font-awesome-icon icon="fa-solid fa-trash" /> Deletar
            </button>
            <button class="btn btn-warning rounded-pill">
              <font-awesome-icon icon="fa-solid fa-pen" /> Editar
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row" class="text-center">
            <font-awesome-icon icon="fa-solid fa-user" />
          </th>
          <td>Jane Doe</td>
          <td>+55 9 9999-9999</td>
            <td class="text-center">
             <button class="btn btn-outline-success rounded-pill">
              <font-awesome-icon icon="fa-solid fa-star" /> Favoritar
            </button>
            <button class="btn btn-danger rounded-pill ms-2 me-2">
              <font-awesome-icon icon="fa-solid fa-trash" /> Deletar
            </button>
            <button class="btn btn-warning rounded-pill">
              <font-awesome-icon icon="fa-solid fa-pen" /> Editar
            </button>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<style>
.user-avatar{
  width: 2rem;
  background: #e6e6e6;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
}
.btn{
  font-size: .75rem !important;
}

</style>