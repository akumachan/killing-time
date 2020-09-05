<template>
<div id="app">  
  <div class="wrapper">
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="content-wrapper">
      <router-view/>
    </div>
 </div>
</div>
</template>

<script>
import Header from '@/views/Header'
import Sidebar from '@/views/Sidebar'

export default {
  name: 'App',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
</style>
