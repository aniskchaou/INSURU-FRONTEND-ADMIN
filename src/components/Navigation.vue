<template>
     <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default">

            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li><router-link to="/dashboard"><i class="menu-icon fa fa-laptop"></i>Tableau de bord </router-link></li>
                    <li><router-link to="/client"><i class="menu-icon fa fa-laptop"></i>Clients </router-link></li>
                    <li><router-link to="/strategy"><i class="menu-icon fa fa-laptop"></i>Stratégies </router-link></li>
                    <li><router-link to="/broker"><i class="menu-icon fa fa-laptop"></i>Courtiers </router-link></li>
                    <li><router-link to="/rapport"><i class="menu-icon fa fa-laptop"></i>Rapports </router-link></li>
                    <li><router-link to="/product"><i class="menu-icon fa fa-laptop"></i>Produits </router-link></li>
                    <li><router-link to="/entreprise"><i class="menu-icon fa fa-laptop"></i>Entreprises </router-link></li>
                    <li><router-link to="/employee"><i class="menu-icon fa fa-laptop"></i>Personnel </router-link></li>
                     <li><router-link to="/contact"><i class="menu-icon fa fa-laptop"></i>Contacts </router-link></li>
                    <li><router-link to="/configuration"><i class="menu-icon fa fa-laptop"></i>Paramètres </router-link></li>
                   
                  
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
</style>
