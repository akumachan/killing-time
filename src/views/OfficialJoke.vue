<template>
<!-- Content Header (Page header) -->
<section class="content-header">
  <h1>
    Official Joke 
  </h1>
  <ol class="breadcrumb">
    <li><a href="#"><i class="fa fa-home"></i> Home</a></li>
    <li class="active">Official Joke</li>
  </ol>
</section>
<section class="content">
    <!-- Main content -->
  <!-- Default box -->
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">
        {{ store.getters['results/officialJoke'].setup}}
      </h3>
      <div class="box-tools pull-right">
        <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Reload" @click="call">
          <i class="fa fa-refresh"></i>
        </button>
      </div>
    </div>
    <div class="box-body">
      {{ store.getters['results/officialJoke'].punchline}}
    </div>
    <!-- /.box-body -->
    <div class="box-footer">
      by <a href="//official-joke-api.appspot.com/">Official Joke API</a>
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
  name: 'Bored',
  mounted () {
    this.call()
  },
  computed: {
    store: () => store
  },
  methods: {
    call: () => {
      axios.get('//official-joke-api.appspot.com/jokes/random')
        .then((response) => {
          store.dispatch('results/setResult', response.data)
        })
    }
  }
}
</script>
