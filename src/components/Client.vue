<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <strong class="card-title">Clients</strong>
      </div>
      <div class="card-body">
        <table
          id="bootstrap-data-table"
          class="table table-striped table-bordered"
        >
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date de naissance</th>
             
              <th>Entreprise</th>
              <th>inviteur</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kchaou</td>
              <td>Anis</td>
              <td>Edinburgh</td>
              <td>kchaouanis@gmail.com</td>
              <td>01/05/1990</td>
              
              <td>Delta soft</td>
              <td>Anis</td>
 <td><button type="button" data-toggle="modal" data-target="#viewTask" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
              <button type="button" data-toggle="modal" data-target="#editTask" class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger btn-sm" ><i class="fas fa-trash-alt"></i></button></td>
            </tr>
          </tbody>
        </table>

        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Client",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
