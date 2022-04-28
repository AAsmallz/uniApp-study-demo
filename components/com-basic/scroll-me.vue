<template>
	<view class="scroll-container">
		<!-- https://uniapp.dcloud.io/component/scroll-view.html -->
		<!-- 作用: 可滚动视图区域,用于区域滚动 -->
		<h3>{{title}}</h3>
		<scroll-view :scroll-x='true' class="scroll-wrap" @click="onChange">
			<view class="scroll-item">1</view>
			<view class="scroll-item">2</view>
			<view class="scroll-item">3</view>
			<view class="scroll-item">4</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: 'scrollMe',
		props: {
			title:{
				type: String,
				default: ''
			}
		},
		methods:{
			onChange(){
				this.$emit('change')
			}
		}
	}
</script>

<style lang="scss">
	.scroll-container {
		white-space: nowrap;
		width: 390px;
		.scroll-x {
			white-space: nowrap;
		}
		.scroll-item {
			display: inline-block;
			width: 100%;
			height: 100px;
			border: 1px solid red;
		}
		.scroll-item:nth-child(1){
			background-color: red;
		}
		.scroll-item:nth-child(2){
			background-color: orange;
		}
		.scroll-item:nth-child(3){
			background-color: yellow;
		}
		.scroll-item:nth-child(4){
			background-color: green;
		}
	}
	
</style>