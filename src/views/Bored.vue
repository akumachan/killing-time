<template>
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    Bored
    <small>Let's find you something to do</small>
  </h1>
  <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
    <li class="active">Bored</li>
  </ol>
</section>
<section class="content">
    <!-- Main content -->
  <!-- Default box -->
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">
        {{ store.getters['results/bored'].activity}}
      </h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Reload" @click="call">
          <i class="fa fa-refresh"></i>
        </button>
      </div>
    </div>
    <div class="box-body">Participants: {{ store.getters['results/bored'].participants}} </div>
    <div class="box-body">Price: {{ store.getters['results/bored'].price}} </div>
    <!-- /.box-body -->
    <div class="box-footer">
      by <a href="//boredapi.com/">The Bored API</a>
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
  name: 'OfficialJoke',
  mounted () {
    this.call()
  },
  computed: {
    store: () => store
  },
  methods: {
    call: () => {
      axios.get('//www.boredapi.com/api/activity/')
        .then((response) => {
          console.log(response.data)
          store.dispatch('results/setResult', response.data)
        })
    }
  }
}
</script>
