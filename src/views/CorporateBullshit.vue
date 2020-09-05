<template>
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    Corporate Bullshit
    <small>Buzzword Generator</small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
    <li class="active">Corporate Bullshit</li>
  </ol>
</section>
<section class="content">
    <!-- Main content -->
  <!-- Default box -->
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">
        {{ store.getters['results/corporateBullshit'].phrase }}
      </h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Reload" @click="call">
          <i class="fa fa-refresh"></i>
        </button>
      </div>
    </div>
    <!-- /.box-body -->
    <div class="box-footer">
      by <a href="//github.com/sameerkumar18/corporate-bs-generator-api">Corporate Bullshit/Buzzword Generator API</a>
    </div>
    <!-- /.box-footer-->
  </div>
  <!-- /.box -->
</section>
<!-- /.content -->
</template>

<script>
import store from '@/store'
import axios from 'axios'

export default {
  name: 'CorporateBullshit',
  mounted () {
    this.call()
  },
  computed: {
    store: () => store
  },
  methods: {
    call: () => {
      axios.get('https://corporatebs-generator.sameerkumar.website/')
        .then((response) => {
          store.dispatch('results/setResult', response.data)
        })
    }
  }
}
</script>
