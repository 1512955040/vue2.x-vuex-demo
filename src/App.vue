<template>
  <div id="app">
			<p class="title">Vuex购物车demo</p>
			<p class="title1">商品信息</p>
			<BiaoGeTitle></BiaoGeTitle>
			<BiaoGeContent></BiaoGeContent>
  </div>
</template>

<script>
import BiaoGeTitle from "./components/BiaoGeTitle.vue";
import BiaoGeContent from "./components/BiaoGeContent.vue";
export default {
  name: 'App',
  components: {
    BiaoGeTitle,
    BiaoGeContent
  }
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}	
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app .title{
	font-size: 24px;
}
#app .title1{
	font-size:20px;
	margin-top: 10px;
}
</style>
