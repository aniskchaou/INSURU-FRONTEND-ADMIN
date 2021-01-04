<template>
     <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">

            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><router-link active-class="activeLink" to="/dashboard"><i class="menu-icon fa fa-laptop"></i>Tableau de bord </router-link></li>
                    <li><router-link active-class="activeLink" to="/client"><i class="menu-icon fa fa-users"></i>Clients </router-link></li>
                    <li><router-link active-class="activeLink" to="/strategy"><i class="menu-icon fa fa-arrow-right"></i>Stratégies </router-link></li>
                   <!-- <li><router-link to="/broker"><i class="menu-icon fa fa-laptop"></i>Courtiers </router-link></li> -->
                   <!-- <li><router-link to="/rapport"><i class="menu-icon fa fa-laptop"></i>Rapports </router-link></li>-->
                    <li><router-link active-class="activeLink" to="/product"><i class="menu-icon fa fa-asterisk"></i>Produits </router-link></li>
                   <!-- <li><router-link to="/entreprise"><i class="menu-icon fa fa-laptop"></i>Entreprises </router-link></li> -->
                   <!-- <li><router-link to="/employee"><i class="menu-icon fa fa-laptop"></i>Personnel </router-link></li> -->
                    <!-- <li><router-link to="/contact"><i class="menu-icon fa fa-laptop"></i>Contacts </router-link></li>-->
                    <li><router-link active-class="activeLink" to="/configuration"><i class="menu-icon fa fa-cog"></i>Paramètres </router-link></li>
                   
                  
                </ul>
            </div><!-- /.navbar-collapse -->
        </nav>
    </aside><!-- /#left-panel --> 
 
  
</template>

<script>
export default {
  name: "Navigation",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav li>.activeLink {
    font-weight: bold;
    font-size:large;
    background-color: #fafafa;
    color: #0056b3;
  }
</style>
