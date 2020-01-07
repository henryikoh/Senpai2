<template>
	<div class="second-post">
		<div class="feature-img-stories">
			<div class="img feature-img-bck"></div>
		</div>
		<!-- <img src="/hg.jpg" alt=""> -->
		<div class="border">
			<div class="type">
				CASE STUDY
				<span class="tags">
					SENPAI
				</span>
			</div>
			<div class="desc">
				<span>
					<a href="#" class="btn1">
						Designing a commnuity driven design company The senpai collective
					</a>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
@media screen and (max-width: 767px) {
	.featured {
		margin-top: 25px;
	}
	.feature-img-stories {
		position: relative;
		height: 250px;
		overflow: hidden;
		border-bottom: solid 10px #41c0bf;
	}
	.feature-img-bck {
		width: 100%;
		height: 100%;
		background-position: center;
		background-size: cover;
		-webkit-transition: all 0.25s ease;
		transition: all 1s ease;
		-webkit-transform: scale(1);
		transform: scale(1);
	}
	.feature-img-bck:hover {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
		cursor: pointer;
	}
	.type {
		text-align: left;
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		font-size: 15px;
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		padding-top: 10px;
	}
	.tags {
		margin-left: 5px;
		color: #7b7b7b;
	}
	.desc {
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		font-size: 22px;
		font-weight: 500;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #525252;
		text-align: left;
		margin-top: 5px;
	}
	.border {
		border-bottom: solid 1px #525252;
		height: 140px;
	}
	.second-post .img {
		background-image: url(/sim.jpg);
	}
}
@media screen and (min-width: 768px) {
	.featured img {
		width: 100%;
	}

	.second-post .img {
		background-image: url(/sim.jpg);
	}
	.feature-img-stories {
		position: relative;
		height: 300px;
		overflow: hidden;
		border-bottom: solid 10px #41c0bf;
	}
	.feature-img-bck {
		width: 100%;
		height: 100%;
		background-position: center;
		background-size: cover;
		-webkit-transition: all 0.25s ease;
		transition: all 1s ease;
		-webkit-transform: scale(1);
		transform: scale(1);
	}
	.feature-img-bck:hover {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
		cursor: pointer;
	}
	.type {
		text-align: left;
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		font-size: 17px;
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		padding-top: 15px;
	}
	.desc {
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		font-size: 2vw;
		font-weight: 500;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #525252;
		text-align: left;
		margin-top: 10px;
	}
	.border {
		border-bottom: solid 1px #525252;
		height: 180px;
	}
}
</style>
