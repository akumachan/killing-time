<template>
<!-- Content Header (Page header) -->
<section class="content-header">
  <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
  </ol>
</section>

<!-- Main content -->
<section class="content">
  <div class="error-page">
    <h2 class="headline text-orange"> Home</h2>
    <div class="error-content">
      <h3>I'll kill your time.</h3>
      <p>
        Choose one from the right side bar. 
        </p>
        <p>
        Enjoy 
        <router-link to="/official-joke">Jokes</router-link>, 
        <router-link to="/bored">Recreations</router-link>,
        <router-link to="/corporate-bullshit">Fictional Buzzwords</router-link>.
      </p>
    </div>
    <!-- /.error-content -->
  </div>
  <!-- /.error-page -->
</section>
<!-- /.content -->
</template>

<script>
export default {
  name: 'NouFound',
  components: {
  }
}
</script>
