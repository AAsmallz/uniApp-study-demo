<template>
	<view class="box-container">
		<view class="box1">
			<view class="box_item">1</view>
			<view class="box_item">2</view>
			<view class="box_item">3</view>
			<view class="box_item">4</view>
		</view>
		<view class="box2">
			<view class="box_item">1</view>
			<view class="box_item">2</view>
			<view class="box_item">3</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.box1 {
		height: 200px;
		border: 1px solid #b0b0b0;
		display: flex; //弹性盒子布局
		flex-wrap: wrap; //超出则换行
		justify-content: center; //排列方式，居左flex-start ; 居中 center 等
		align-items: center; //垂直居中
		margin-bottom: 10px;
		.box_item {
			height: 80px;
			width: 80px;
		}
		
		// nth-of-type 奇偶选择器
		.box_item:nth-of-type(odd) {
			background-color: pink;
		}
		
		.box_item:nth-of-type(even) {
			background-color: orangered;
		}
	}
	.box2 {
		height: 200px;
		border: 1px solid #b0b0b0;
		display: flex; //弹性盒子布局
		flex-wrap: wrap; //超出则换行
		justify-content: flex-start; //排列方式，居左flex-start ; 居中 center 等
		.box_item {
			height: 80px;
			width: 80px;
		}
		.box_item:nth-of-type(1){
			background-color: red;
			flex: 1; //在弹性元素中大小占有的比例
		}
		.box_item:nth-of-type(2){
			background-color: yellow;
			align-self: flex-end; //允许元素不同于其它元素的对齐
			flex: 2;
		}
		.box_item:nth-of-type(3){
			background-color: green;
			flex: 1;
		}
	}
	
</style>
