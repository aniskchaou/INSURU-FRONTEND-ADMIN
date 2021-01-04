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
                        <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">#</font></font></th>
                        <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nom</font></font></th>
                        <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Assureur</font></font></th>
                        <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Catégorie</font></font></th>
                        <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sous-catégorie</font></font></th>
                        <th class="center aligned"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Stratégies</font></font></th>
                        <th class="center aligned"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Actions</font></font></th>
                    </tr>
          </thead>
          <tbody>
            <tr>
                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></td>
                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ASSURANCE INCENDIE</font></font></td>
                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Rajpal Sir</font></font></td>
                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1 </font></font></td>
                        <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">9</font></font></td>
                        <td class="center aligned"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">18</font></font></td>
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
  name: "Product",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
