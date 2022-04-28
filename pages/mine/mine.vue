<template>
	<view>
		<h2>API</h2>
		<button type="default" @click="onGetInfo">获取设备信息</button>
		<view class="text">
			手机型号：{{model}}
		</view>
		<view class="text">
			手机系统：{{system}}
		</view>
		<view class="router_use">
			<h3>弹性盒子布局学习</h3>
			<button type="default" @click="toFlexPage">点击跳转弹性布局页面</button>
		</view>
		<view>
			<h3>UniCloud云服务使用示例</h3>
			云存储的资源调用：
			<img :src="src" alt="" style="width: 150px;height: 150px;">
			<view>
				云数据的调用：{{infoRes}}
				<button type="default" @click="onUniCloudFun">点击触发云函数执行</button>
			</view>
		</view>
		<view>
			<h3>UniCloud上传资源示例</h3>
			云存储的资源调用：
			<img :src="imgSrc" alt="" style="width: 150px;height: 150px;">
			<view>
				<button type="default" @click="onUpload">点击进行资源上传</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model: '',
				system: '',
				src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-64e6432f-5454-4865-bbc6-b0aa3c8c1c5d/d944f70e-c546-436b-ae3e-d1040b4ea3c5.jpg',
				infoRes: '没有获取数据表字段之前',
				imgSrc: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-64e6432f-5454-4865-bbc6-b0aa3c8c1c5d/d944f70e-c546-436b-ae3e-d1040b4ea3c5.jpg'
			};
		},
		methods: {
			onGetInfo() {
				uni.getSystemInfo({
					success: (res) => {
						console.log('获取设备信息', res)
						this.model = res.model;
						this.system = res.system;
						console.log(this.model, '+', this.system)
					}
				})
			},
			toFlexPage() {
				console.log('11');
				uni.navigateTo({
					url: '../flex-layout/flex-layout'
				})
			},
			onUniCloudFun() {
				console.log('this--',this)
				const _this = this
				uniCloud.callFunction({
					name: 'fetchUserInfo',
					success(res) {
						console.log("云函数调用成功的返回", res.result.data[0].userName)
						_this.infoRes = res.result.data[0].userName
						
						/** 
						 * 普通函数需要单独获取this, 再给this下的data赋值，页面才会同步显示
						 * 箭头函数则直接赋值，并执行了this.$forceUpdate()，页面才会同步显示
						 * */
						// this.$forceUpdate()
					},
					fail(err) {
						console.log(err)
					}
				})
			},
			onUpload(){
				const _this = this
				uni.chooseImage({
					count: 1, //上传数量
					success(res){
						const tempFilePath = res.tempFilePaths[0]
						const cloudPath = res. tempFiles[0].name
						// 上传资源到云端
						uniCloud.uploadFile({
							// 传递资源对象
							filePath:tempFilePath, //资源对象
							cloudPath:cloudPath, //阿里云或腾讯云资源名的绝对路径
							success(res){
								_this.imgSrc = res.fileID
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
