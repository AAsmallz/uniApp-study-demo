<template>
	<view class="swiper-container">
		<h3>{{title}}</h3>
		<swiper :indicator-dots="true">
			<swiper-item>
				<view class="swiper-item1">1</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item2">2</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item3">3</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: 'swiperMe',
		props: {
			title:{
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss">
	.swiper-container {
		width: 100%;
		height: 200px;

		.swiper-item1 {
			background-color: pink;
			height: 100%;
		}

		.swiper-item2 {
			background-color: skyblue;
			height: 100%;
		}

		.swiper-item3 {
			background-color: yellow;
			height: 100%;
		}
	}
</style>
