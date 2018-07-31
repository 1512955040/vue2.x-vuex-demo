
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

//创建store 仓库
export const store=new Vuex.Store({
	state:{
		BlogConentsn:[
			{id:"1",name:"鱼香肉丝",price:"88",count:"",flag:true},
			{id:"2",name:"米饭",price:"6",count:"",flag:true},
			{id:"3",name:"面条",price:"8",count:"",flag:true},
			{id:"4",name:"火锅",price:"188",count:"",flag:true}
		]
	},
	getters:{
		BlogConentsa:(state)=>{
			var proads=state.BlogConentsn.filter(productsss => {
				if(productsss.count!= ""){
					return	productsss
				}
			})
			return	proads
		},
		bitch:(state)=>{
			let abcd=0
			var shuidiao=state.BlogConentsn.map((prodducts,keys,arrs)=>{
				if(prodducts.count!=""){
					abcd+=Number(prodducts.count)
				}
			})
			return abcd
		},
		context:(state)=>{
			let bcde=0;
			var shuidiaoe=state.BlogConentsn.map((prodducts,keys,arrs)=>{
				if(prodducts.count!=""){
					bcde+=Number(prodducts.count * prodducts.price)
				}
			})
			return bcde
		}
	},
	mutations:{
			//点击添加直通车
			reducePrice:function(state,index){
				state.BlogConentsn[index].flag=!state.BlogConentsn[index].flag;
				state.BlogConentsn[index].count = 1;
			},
			//点击加号
			reduceGouwc:function(state,index){
				state.BlogConentsn[index].count +=1
			},
			//点击减号
			reduceHouwc:function(state,index){
				console.log(index)
				if(state.BlogConentsn[index].count==""||state.BlogConentsn[index].count== 1){
					state.BlogConentsn[index].flag=!state.BlogConentsn[index].flag;
					state.BlogConentsn[index].count= ""
				}else if(state.BlogConentsn[index].count!=="" &&state.BlogConentsn[index].count >0){
					state.BlogConentsn[index].count -=1
				}
			},
//			//点击叉号符号
			reduceSnase:function(state,index){
				state.BlogConentsn[index].count="";
				state.BlogConentsn[index].flag=true
			},
			//点击清空购物车
			reducesnalve:function(state){
				return state.BlogConentsn.map((prodducts,keys,arrs)=>{
					prodducts.count=""
					prodducts.flag=true
				})
			}
	}
})
