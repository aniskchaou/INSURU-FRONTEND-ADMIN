<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <strong class="card-title">Clients</strong>
      </div>
      <div class="card-body">
       <div class="half-page-content">
                        <!-- Policy details -->
            <div class="ui segment white fs-16">
                <div class="segment-header">
                    <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Détails</font></font></h3>
                                        <div class="ui right floated successish button top m-w-140 right pointing dropdown" data-inverted="" data-tooltip="More Actions" data-position="left center" tabindex="0">
                        <i class="ion-more icon"></i>
                        <span class="text"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Plus d'actions</font></font></span>
                        <div class="menu" tabindex="-1">
                            <div class="header">
                                More Actions
                            </div>
                            <div class="divider"></div>
                            <div class="item">
                                <a href="#" data-target="#editPolicyModal" data-toggle="modal">
                                    <i class="write icon"></i> Edit policy 
                                </a>
                            </div>
                            <form action="https://insura.simcycreative.com/policies/363" class="item negative" method="POST">
                                <input type="hidden" name="_token" value="PUzJTqvuweMAwq6suz9Hrqhd1KbDyZyv8C4Qupq6">
                                <input type="hidden" name="_method" value="DELETE">
                                <a href="#" class="delete">
                                    <i class="trash icon"></i> Delete 
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="policy-details">
                    <div class="row">
                        <div class="col-sm-3 col-md-4">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Numéro de réference</font></font></span>
                            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YYBHA2GY</font></font></p>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Produit</font></font></span>
                            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ASSURANCE INCENDIE</font></font></p>
                        </div>
                        <div class="col-sm-3 col-md-4">
                            <span class="ui blue right ribbon huge label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Annuellement</font></font></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-4">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date de renouvellement</font></font></span>
                            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">09 juillet 2020</font></font></p>
                        </div>
                        <div class="col-sm-8 col-md-4">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date d'expiration</font></font></span>
                            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">09 juillet 2020</font></font></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4 col-md-4">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Payeur</font></font></span>
                            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">fafa</font></font></p>
                        </div>
                        <div class="col-sm-3 col-md-3">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Prime</font></font></span>
                            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                3,00 ₦
                            </font></font></p>
                        </div>
                        <div class="col-sm-5 col-md-5">
                                                                <span class="ui green large tag label"> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Entièrement payé</font></font></strong> </span>
                                                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Les bénéficiaires</font></font></span>
                            <p></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Remarques spéciales</font></font></span>
                            <p></p>
                        </div>
                    </div>

                    <div class="divider"></div>

                    <div class="row">
                                                <div class="col-md-4">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Type premium</font></font></span>
                            <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Annuellement</font></font></p>
                        </div>
                                                <div class="col-md-4">
                            <span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Extraterrestre#</font></font></span>
                            <p></p>
                        </div>
                                            </div>
                </div>
            </div>

            <!-- attachments -->
            <div class="ui segment white fs-16">
                <div class="segment-header">
                    <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Pièces jointes</font></font></h3>
                    <button class="ui right floated button successish m-w-140" data-target="#newAttachmentModal" data-toggle="modal"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nouvelle pièce jointe</font></font></button>
                </div>
                <table class="ui celled striped table">
                    <thead>
                        <tr>
                            <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Nom de fichier </font></font></th>
                            <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Date </font></font></th>
                            <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Telechargé par </font></font></th>
                            <th class="center aligned"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Actions </font></font></th>
                        </tr>
                    </thead>
                    <tbody>
                                                <tr>
                            <td class="center aligned" colspan="4"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">La politique YYBHA2GY n'a aucune pièce jointe.</font></font></td>
                        </tr>
                                            </tbody>
                </table>
            </div>
            <!-- end attachments -->

            <!-- payments -->
            <div class="ui segment white">
                <div class="segment-header">
                    <h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Paiements</font></font></h3>
                                    </div>
                <table class="ui striped table">
                    <thead>
                        <tr>
                            <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">#Non</font></font></th>
                            <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Montant</font></font></th>
                            <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date</font></font></th>
                            <th><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Méthode</font></font></th>
                        </tr>
                    </thead>
                    <tbody>
                                                <tr>
                            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></td>
                            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1,00</font></font></td>
                            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">06 novembre 2020</font></font></td>
                            <td>
                                <i class="credit card alternative icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Carte
                            </font></font></td>
                        </tr>
                                                <tr>
                            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2</font></font></td>
                            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2,00</font></font></td>
                            <td><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">09 novembre 2020</font></font></td>
                            <td>
                                <i class="money icon"></i><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> En espèces
                            </font></font></td>
                        </tr>
                                            </tbody>
                </table>
            </div>
            <!-- end payments -->
        </div>
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
