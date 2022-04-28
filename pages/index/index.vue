<template>
	<view class="content">
		<h2>基础组件/外部组件</h2>
		<scroll-me title="自定义滚动组件" @change='onScrollChange'></scroll-me>
		<swiper-me title="自定义轮播组件"></swiper-me>
		<h3>日历扩展组件</h3>
		<uni-calendar :lunar="false" @change="onCalenderChange" />
	</view>
</template>

<script>
	import scrollMe from '../../components/com-basic/scroll-me.vue'
	import swiperMe from '../../components/com-basic/swiper-me.vue'
	export default {
		components: {
			scrollMe,
			swiperMe
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			onScrollChange() {
				console.log('滚动事件触发')
			},
			onCalenderChange(v){
				console.log('日历事件触发',v)
			}
		}
	}
</script>

<style>

</style>
