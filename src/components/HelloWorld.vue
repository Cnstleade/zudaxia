<template>
  <div >
    <v-head></v-head>
      <v-top></v-top>
      <v-header ></v-header>
  </div>
</template>

<script>
 import vHead from "./common/headerTop";
import vTop from './page/top'
import vHeader from './page/header'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },components:{
    vTop,vHeader,vHead
  }
}
</script>
<style>

</style>



