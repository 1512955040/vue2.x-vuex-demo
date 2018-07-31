<template>
	<div id="BiaoGeContent">
		<h2>购物车信息</h2>
		<ul class="ul4">
			<li v-for="BlogContent in BlogContents">{{BlogContent}}</li>
		</ul>
		<ul class="ul5" v-for="(blognux,index) in BlogConent" >
			<li>{{blognux.id || ""}}</li>
			<li>{{blognux.name || ""}}</li>
			<li>{{blognux.price || ""}}</li>
			<li>{{blognux.count || ""}}</li>
			<li>{{blognux.count * blognux.price || ""}}</li>
			<li class="ulli6">
				<button @click="funders(blognux.id-1)">+</button>
				<button @click="fundersa(blognux.id-1)">-</button>
				<button @click="dundersadsa(blognux.id-1)">x</button>
			</li>
		</ul>
		<p>
			<div class="sdsadsada">
				<h3>总数:{{getCount}}</h3>
				<h3>总价:{{getContext}}</h3>
				<p class="uilisp" @click="asddsadadsa">清空购物车</p>
			</div>
		</p>
	</div>
</template>
<script>
	export default{
		name:"BiaoGeContent",
		data(){
			return{
				BlogContents:["id","名称","价格","数量","总价","actions"]
			}
		},
		computed:{
			BlogConent(){
				return this.$store.getters.BlogConentsa
			},
			getCount(){
				return this.$store.getters.bitch
			},
			getContext(){
				return this.$store.getters.context
			}
		},
		methods:{
			funders(index){
				return this.$store.commit("reduceGouwc",index)
			},
			fundersa(index){
				return this.$store.commit("reduceHouwc",index)
			},
			dundersadsa(index){
				return this.$store.commit("reduceSnase",index)
			},
			asddsadadsa(){
				return this.$store.commit("reducesnalve")
			}
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.ul4,.ul5{
		width: 100%;
	}
	.ul4 li{
		display: inline-block;
		list-style: none;
		width: 20%;
		height: 40px;
		font-weight: 800;
	}
	.ul5 li{
		float: left;
		/*width: 20%;*/
		height: 40px;
		list-style: none;
		border: 1px solid black;
		line-height: 40px;
		box-sizing: border-box;
	}
	.ul4 li:nth-child(1),
	.ul5 li:nth-child(1){
		width: 15%;
	}
	.ul4 li:nth-child(2),
	.ul5 li:nth-child(2){
		width: 25%;
	}
	.ul4 li:nth-child(3),
	.ul5 li:nth-child(3){
		width: 15%;
	}
	.ul4 li:nth-child(4),
	.ul5 li:nth-child(4){
		width: 10%;
	}
	.ul4 li:nth-child(5),
	.ul5 li:nth-child(5){
		width: 10%;
	}
	.ul4 li:nth-child(6),
	.ul5 li:nth-child(6){
		width: 25%;
	}
	.tesnan{
		display: none;
	}
	.ulli6 button{
		width: 30px;
		height: 20px;
		background: #42B983;
		display: inline-block;
		line-height: 20px;
		cursor: pointer;
		outline: none;
		border: none;
	}
	.uilisp{
		width: 100px;
		height: 36px;
		line-height: 36px;
		color: white;
		background: red;
		text-align: center;
	}
	.sdsadsada{
		margin-top: 15px;
	}
	.sdsadsada h3{
		display: inline-block;
		float: left;
	}
	.sdsadsada p{
		float: right;
		cursor: pointer;
	}
</style>