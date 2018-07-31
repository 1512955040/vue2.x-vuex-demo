<template>
	<div id="BiaoGeTitle">
		<ul class="uls1">
			<li v-for="Blogtitle in Blogtitles">{{Blogtitle}}</li>
		</ul>
		<ul class="uls2" v-for="(BlogConent,index) in BlogConentsn">
			<li>{{BlogConent.id}}</li>
			<li>{{BlogConent.name}}</li>
			<li>{{BlogConent.price}}</li>
			<li>{{BlogConent.count || ""}}</li>
			<li>
				<button class="p1" @click="pointers(index)" :class="{trufalse : !BlogConent.flag}">加入购物车</button>
				<button class="p2" @click="panjia(index)"	:class="{truefalses : BlogConent.flag}">+</button>
				<button class="p3" @click="pagenage(index)" :class="{truefalses : BlogConent.flag}">-</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"BiaoGeTitle",
		data(){
			return{
				Blogtitles:["id","名称","价格","数量","actions"],
			  	BlogConentsn:this.$store.state.BlogConentsn
			}
		},
		methods:{
			pointers:function(index){
				this.$store.commit("reducePrice",index)
			},
			pagenage:function(index){
				this.$store.commit("reduceHouwc",index)
			},
			panjia:function(index){
				this.$store.commit('reduceGouwc',index)
			}
		},
		computed:{
			
		}
	}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	#BiaoGeTitle{
		width: 100%;
	}
	.uls1, .uls2{
		width: 100%;
		box-sizing: border-box;
		line-height: 40px;
	}
	.uls1 li{
		list-style: none;
		float: left;
		width: 20%;
		box-sizing: border-box;
		border: 1px solid black;
	}
	.uls2 li{
		list-style: none;
		float: left;
		width:20%;
		border: 1px solid black;
		height: 40px;
		box-sizing: border-box;
		margin: 0 auto;
	}
	button{
		outline: none;
		border: none;
	}
	.p1{
		display: inline-block;    
		font-size: 15px;
		color: white;
		height: 25px;
		background: blueviolet;
		text-align: center;
		line-height: 25px;
		cursor: pointer;
		border-radius: 3px;
	}
	.p2,.p3{
		width: 40px;
		height: 25px;
		background: #5bc0de;
		color: white;
		display: inline-block;
		line-height: 25px;
		cursor: pointer;
	}
	.trufalse{
		display: none;
	}
	.truefalses{
		display: none;
	}
</style>