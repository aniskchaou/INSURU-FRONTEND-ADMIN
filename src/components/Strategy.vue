<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <strong class="card-title">Stratégies</strong>
      </div>
      <div class="card-body">
        <table
          id="bootstrap-data-table"
          class="table table-striped table-bordered"
        >
          <thead>
            <tr></tr>
            <tr>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">#Non</font></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Réf No.</font></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Client</font></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Produit</font></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Assureur</font></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Prime</font></font
                >
              </th>
              <th>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Dû</font></font
                >
              </th>
              <th class="center aligned">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Statut</font></font
                >
              </th>
              <th class="center aligned">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">action</font></font
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="positive">
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">2</font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">OUZ0DAUR</font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >amit dhakariya</font
                  ></font
                >
              </td>
              <td class="text-ellipsis">
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit"
                    >ASSURANCE INCENDIE</font
                  ></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">Rajpal Sir</font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">90,00 ₦</font></font
                >
              </td>
              <td>
                <font style="vertical-align: inherit"
                  ><font style="vertical-align: inherit">₦ 0</font></font
                >
              </td>
              <td class="center aligned">
                <div class="ui green mini label">
                  <font style="vertical-align: inherit"
                    ><font style="vertical-align: inherit"> Payé</font></font
                  >
                </div>
              </td>
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
  name: "Strategy",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
