<template>
<header class="main-header">
  <!-- Logo -->
  <router-link to="/" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <span class="logo-mini">K<b>T</b></span>
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg"><i class="fa fa-clock-o"></i> Killing<b>Time</b></span>
  </router-link>

  <!-- Header Navbar: style can be found in header.less -->
  <nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
  </nav>
</header>
</template>

<script>
export default {
  name: 'Header',
}
</script> 
<style scoped>
</style>