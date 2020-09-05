<template>
<aside class="main-sidebar">
  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar" style="height: auto;">
    <!-- sidebar menu: : style can be found in sidebar.less -->
    <ul class="sidebar-menu tree" data-widget="tree">
      <li class="header"></li>
      <li><router-link to="/official-joke"><i class="fa fa-graduation-cap"></i><span> Official Joke</span></router-link></li>
      <li><router-link to="/bored"><i class="fa fa-soccer-ball-o"></i><span> Bored</span></router-link></li>
      <li><router-link to="/corporate-bullshit"><i class="fa fa-star-half-full"></i><span> Corporate Bullshit</span></router-link></li>
    </ul>
  </section>
  <!-- /.sidebar -->
</aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>
<style scoped>
</style>