<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <strong class="card-title">Produits</strong>
      </div>
      <div class="card-body">
        <table
          id="bootstrap-data-table"
          class="table table-striped table-bordered"
        >
          <thead>
            <tr>
              <th>Nom produit</th>
              <th>Assureur</th>
              <th>Compagnie assurrance</th>
              <th>Categorie</th>
              <th>Stratégies</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>$320,800</td>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
