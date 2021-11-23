<template>
	<view class="content">
		123
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" style="width: 100%;">
			<swiper-item>
				<view class="swiper-item">1</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">2</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getSwiper()
			
		},
		methods: {
			async getSwiper(){
				let d=await this.http.get({
					url:"/home/getSwiper"
				}) 
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
