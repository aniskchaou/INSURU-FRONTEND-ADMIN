<template>
  <div id="app">
    <!-- Left Panel -->

    <Navigation/>

    <!-- Left Panel -->

    <!-- Right Panel -->

    <div id="right-panel" class="right-panel">

       
        <!-- Header-->
        <Headerbar/>
      

        <div class="content">
            <div class="animated fadeIn">
                <div class="row">


                       <router-view/>
                    

                </div>
            </div><!-- .animated -->
        </div><!-- .content -->


        <div class="clearfix"></div>

        <footer class="site-footer">
            <div class="footer-inner bg-white">
                <div class="row">
                    <div class="col-sm-6">
                        Copyright &copy; 2018 Ela Admin
                    </div>
                    <div class="col-sm-6 text-right">
                        Developed by <a href="https://github.com/aniskchaou">Anis KCHAOU</a>
                    </div>
                </div>
            </div>
        </footer>

    </div><!-- /#right-panel -->

    <!-- Right Panel -->


      
  </div>
  
</template>

<script>
import Headerbar from './components/Headerbar.vue';
import Navigation from './components/Navigation';

export default {
    
  name: "App",
  components: {
     'Navigation':Navigation,
    'Headerbar':Headerbar,
    
  },
};
</script>

<style>

@import "assets/css/cs-skin-elastic.css";
@import "assets/css/lib/datatable/dataTables.bootstrap.min.css";
@import "assets/css/style.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
