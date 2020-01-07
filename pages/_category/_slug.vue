<template>
	<div>
		<MainNav :mobilemenu="true" :showlogo="true" />
		<div>
			<div class="title wrapper">
				<div class="back-btn">
					<nuxt-link to="/">back</nuxt-link>
				</div>
				<div class="type">
					{{ post.fields.type.toUpperCase() }}
					<span v-if="post.fields.client" class="tagd">
						{{ post.fields.client }}
					</span>
				</div>
				<h1>
					{{ post.fields.title }}
				</h1>
				<div class="author">
					<img
						:src="
							post.fields.author.fields.profile.fields.file.url + '?w=400&h=400'
						"
						alt=""
						class="profile"
					/>
					<div class="auth-details">
						<div style="display:flex">
							<h3 class="name">{{ post.fields.author.fields.name }}</h3>
							<ul class="social2 c2alinks">
								<li v-if="post.fields.author.fields.instagram">
									<a
										:href="post.fields.author.fields.instagram"
										target="_blank"
									>
										<svg
											fill="#525252"
											viewBox="0 0 48 48"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
										>
											<title>Instagram</title>
											<desc>Created with Sketch.</desc>
											<defs></defs>
											<g id="Icons" stroke-width="1">
												<g
													id="Black"
													transform="translate(-500.000000, -160.000000)"
												>
													<path
														id="Instagram"
														d="M524.000048,160 C517.481991,160 516.664686,160.027628 514.104831,160.144427 C511.550311,160.260939 509.805665,160.666687 508.279088,161.260017 C506.700876,161.873258 505.362454,162.693897 504.028128,164.028128 C502.693897,165.362454 501.873258,166.700876 501.260017,168.279088 C500.666687,169.805665 500.260939,171.550311 500.144427,174.104831 C500.027628,176.664686 500,177.481991 500,184.000048 C500,190.518009 500.027628,191.335314 500.144427,193.895169 C500.260939,196.449689 500.666687,198.194335 501.260017,199.720912 C501.873258,201.299124 502.693897,202.637546 504.028128,203.971872 C505.362454,205.306103 506.700876,206.126742 508.279088,206.740079 C509.805665,207.333313 511.550311,207.739061 514.104831,207.855573 C516.664686,207.972372 517.481991,208 524.000048,208 C530.518009,208 531.335314,207.972372 533.895169,207.855573 C536.449689,207.739061 538.194335,207.333313 539.720912,206.740079 C541.299124,206.126742 542.637546,205.306103 543.971872,203.971872 C545.306103,202.637546 546.126742,201.299124 546.740079,199.720912 C547.333313,198.194335 547.739061,196.449689 547.855573,193.895169 C547.972372,191.335314 548,190.518009 548,184.000048 C548,177.481991 547.972372,176.664686 547.855573,174.104831 C547.739061,171.550311 547.333313,169.805665 546.740079,168.279088 C546.126742,166.700876 545.306103,165.362454 543.971872,164.028128 C542.637546,162.693897 541.299124,161.873258 539.720912,161.260017 C538.194335,160.666687 536.449689,160.260939 533.895169,160.144427 C531.335314,160.027628 530.518009,160 524.000048,160 Z M524.000048,164.324317 C530.40826,164.324317 531.167356,164.348801 533.69806,164.464266 C536.038036,164.570966 537.308818,164.961946 538.154513,165.290621 C539.274771,165.725997 540.074262,166.246066 540.91405,167.08595 C541.753934,167.925738 542.274003,168.725229 542.709379,169.845487 C543.038054,170.691182 543.429034,171.961964 543.535734,174.30194 C543.651199,176.832644 543.675683,177.59174 543.675683,184.000048 C543.675683,190.40826 543.651199,191.167356 543.535734,193.69806 C543.429034,196.038036 543.038054,197.308818 542.709379,198.154513 C542.274003,199.274771 541.753934,200.074262 540.91405,200.91405 C540.074262,201.753934 539.274771,202.274003 538.154513,202.709379 C537.308818,203.038054 536.038036,203.429034 533.69806,203.535734 C531.167737,203.651199 530.408736,203.675683 524.000048,203.675683 C517.591264,203.675683 516.832358,203.651199 514.30194,203.535734 C511.961964,203.429034 510.691182,203.038054 509.845487,202.709379 C508.725229,202.274003 507.925738,201.753934 507.08595,200.91405 C506.246161,200.074262 505.725997,199.274771 505.290621,198.154513 C504.961946,197.308818 504.570966,196.038036 504.464266,193.69806 C504.348801,191.167356 504.324317,190.40826 504.324317,184.000048 C504.324317,177.59174 504.348801,176.832644 504.464266,174.30194 C504.570966,171.961964 504.961946,170.691182 505.290621,169.845487 C505.725997,168.725229 506.246066,167.925738 507.08595,167.08595 C507.925738,166.246066 508.725229,165.725997 509.845487,165.290621 C510.691182,164.961946 511.961964,164.570966 514.30194,164.464266 C516.832644,164.348801 517.59174,164.324317 524.000048,164.324317 Z M524.000048,171.675683 C517.193424,171.675683 511.675683,177.193424 511.675683,184.000048 C511.675683,190.806576 517.193424,196.324317 524.000048,196.324317 C530.806576,196.324317 536.324317,190.806576 536.324317,184.000048 C536.324317,177.193424 530.806576,171.675683 524.000048,171.675683 Z M524.000048,192 C519.581701,192 516,188.418299 516,184.000048 C516,179.581701 519.581701,176 524.000048,176 C528.418299,176 532,179.581701 532,184.000048 C532,188.418299 528.418299,192 524.000048,192 Z M539.691284,171.188768 C539.691284,172.779365 538.401829,174.068724 536.811232,174.068724 C535.22073,174.068724 533.931276,172.779365 533.931276,171.188768 C533.931276,169.598171 535.22073,168.308716 536.811232,168.308716 C538.401829,168.308716 539.691284,169.598171 539.691284,171.188768 Z"
													></path>
												</g>
											</g>
										</svg>
									</a>
								</li>
								<li v-if="post.fields.author.fields.medium">
									<a :href="post.fields.author.fields.medium" target="_blank">
										<svg viewBox="-232 66.4 534.5 468.6" fill="#525252">
											<title>Medium</title>
											<path
												id="Shape"
												d="M-167.2,175.5c0.7-6.5-1.8-13-6.7-17.4l-49.6-59.8v-8.9h154.1L49.6,350.6L154.4,89.4h146.9v8.9L258.8,139
              c-3.7,2.8-5.5,7.4-4.7,11.9v298.9c-0.8,4.5,1.1,9.1,4.7,11.9l41.4,40.7v8.9H91.8v-8.9l42.9-41.7c4.2-4.2,4.2-5.5,4.2-11.9V207.2
              L19.6,510.4H3.5l-139-303.2v203.2c-1.2,8.5,1.7,17.1,7.7,23.3l55.8,67.7v8.9h-158.3v-8.9l55.8-67.7c6-6.2,8.6-14.8,7.2-23.3V175.5z"
											/>
										</svg>
									</a>
								</li>
								<li v-if="post.fields.author.fields.linkedin">
									<a :href="post.fields.author.fields.linkedin" target="_blank">
										<svg
											fill="#525252"
											viewBox="0 0 44 40"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
										>
											<!-- Generator: Sketch 3.7.2 (28276) - http://www.bohemiancoding.com/sketch -->
											<title>LinkedIn</title>
											<desc>Created with Sketch.</desc>
											<defs></defs>
											<g id="Icons" stroke-width="1">
												<g
													id="Black"
													transform="translate(-702.000000, -265.000000)"
												>
													<path
														id="LinkedIn"
														d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"
													></path>
												</g>
											</g>
										</svg>
									</a>
								</li>

								<li v-if="post.fields.author.fields.twitter">
									<a :href="post.fields.author.fields.twitter" target="_blank">
										<svg
											viewBox="0 0 26 21"
											fill="#525252"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>Twitter</title>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M26.087 2.56495C25.1284 3 24.0964 3.29421 23.0138 3.42567C24.1194 2.74961 24.9676 1.67763 25.3673 0.40063C24.3322 1.02661 23.1884 1.482 21.9665 1.72613C20.9927 0.663535 19.6008 0 18.0604 0C15.1068 0 12.7104 2.44914 12.7104 5.46948C12.7104 5.89828 12.7564 6.31456 12.8482 6.71518C8.40013 6.4867 4.4573 4.31142 1.81599 0.998433C1.35511 1.80907 1.09173 2.74961 1.09173 3.75118C1.09173 5.64789 2.03649 7.32238 3.47275 8.3036C2.59691 8.277 1.77006 8.02817 1.04733 7.62129V7.68857C1.04733 10.3396 2.89242 12.5509 5.34233 13.0516C4.89369 13.18 4.42056 13.2441 3.93211 13.2441C3.58759 13.2441 3.25072 13.2113 2.92458 13.1471C3.60596 15.3192 5.58119 16.9014 7.92392 16.9437C6.09261 18.4116 3.78358 19.2864 1.27701 19.2864C0.845215 19.2864 0.418016 19.2613 0 19.2113C2.36876 20.7606 5.18309 21.6667 8.20414 21.6667C18.0497 21.6667 23.4319 13.3333 23.4319 6.10485C23.4319 5.86698 23.4273 5.62911 23.4181 5.39593C24.4639 4.62441 25.3719 3.66198 26.087 2.56495Z"
												transform="scale(0.969231)"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</div>

						<p class="bio">{{ post.fields.author.fields.bio }}</p>
					</div>
				</div>
			</div>
			<div
				:style="{
					backgroundImage: 'url(' + post.fields.hero.fields.file.url + ')',
				}"
				class="heru"
			></div>
			<div class="body wrapper">
				<div class="main">
					<Vue-markdown>{{ post.fields.body }}</Vue-markdown>
				</div>
				<div class="side-bar">
					SideBar
				</div>
			</div>

			<div class="white-space"></div>
		</div>
	</div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import MainNav from '~/components/MainNav-Bar.vue'
import client from '~/plugins/contentful'

export default {
	components: {
		MainNav,
		VueMarkdown,
	},
	head() {
		return {
			title: this.post.fields.title,
			titleTemplate: '%s - SENPAI',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{
					hid: 'description',
					name: 'description',
					content: this.post.fields.description,
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.post.fields.title
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: this.post.fields.description,
				},
				{
					hid: 'og:image',
					name: 'og:image',
					content: this.post.fields.hero.fields.file.url
				},
				{
					hid: 'og:url',
					name: 'og:url',
					content: 'https://www.thinksenpai.com/'

				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					content: 'summary_large_image'
				}
			



			],
		}
	},
	asyncData({ env, params }) {
		return client
			.getEntries({
				content_type: 'caseStudy',
				'fields.slug': params.slug,
			})
			.then(entries => {
				return {
					post: entries.items[0],
				}
			})
			.catch(console.error)
	},
}
</script>

<style>
@media screen and (max-width: 767px) {
	.back-btn {
		position: relative;
		padding-left: 9px;
	}
	.back-btn::before {
		content: ' ';
		height: 0;
		position: absolute;
		width: 0;
		top: 3px;
		left: -11px;
		border: 8px solid transparent;
		border-right-color: #41c0bf;
	}
	.back-btn a {
		text-decoration: none;
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		font-size: 15px;
		font-weight: 400;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #525252;
		text-decoration: none;
	}
	.title h1 {
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		font-size: 7vw;
		font-weight: 700;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		color: rgba(0, 0, 0, 0.84);
		text-align: left;
		padding-top: 3px;
	}
	.author {
		display: flex;
		align-items: center;
		border-left: solid 10px #41c0bf;
		padding-left: 10px;
		margin-top: 20px;
	}
	.profile {
		vertical-align: middle;
		/* width: 50px; */
		height: 55px;
		border-radius: 50%;
	}
	.auth-details {
		margin-left: 10px;
	}
	.auth-details h3 {
		font-size: 18px;
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		font-weight: 700;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #525252;
	}
	.social2 {
		text-align: center;
		align-self: center;
		padding-left: 20px;
	}
	.social2 li {
		display: inline-block;
		list-style-type: none;
		text-align: center;
		margin-left: 3px;
	}
	.social2 li svg {
		height: 15px;
	}
	.bio {
		font-size: 15px;
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		/* font-weight: 700; */
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #525252;
	}
	.heru {
		margin-top: 30px;

		height: 250px;
		background-position: center;
		background-size: cover;
	}
	.body {
		position: relative;
		margin-top: 20px;
	}
	.main {
		width: 100%;
		/* position: relative; */
		display: inline-block;
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		/* font-weight: 700; */
		font-style: normal;
		font-size: 18px;
		color: rgba(0, 0, 0, 0.84);
		font-stretch: normal;
		line-height: normal;
		text-align: left;
		letter-spacing: normal;
	}

	.main h1 {
		margin-top: 30px;
		font-size: 30px;
	}

	.main h3 {
		margin-top: 15px;
	}

	.main blockquote {
		margin-top: 25px;
		border-left: solid 5px #41c0bf;
		padding-left: 20px;
		color: #525252;
		padding-top: 5px;
		padding-bottom: 20px;
	}

	.main p {
		margin-top: 15px;
		line-height: 1.4;
		text-align: left;
	}

	.main ol {
		margin-top: 15px;
		margin-left: 22px;
		margin-bottom: 15px;
		display: inline-block;
	}

	.main ol li {
		padding-top: 15px;
	}

	.main img {
		width: 100%;
		margin-top: 20px;
	}

	.main a {
		display: inline-block;
		/* float: left; */
		background-size: 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.4s ease;
		text-decoration: none;
		color: inherit;
		border-bottom: solid 2px #41c0bf;
	}
	.main a:hover {
		background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
		background-size: 100% 100%;
	}

	.main a:not(:hover) {
		background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
		background-size: 0 100%;
	}

	.side-bar {
		display: none;
		position: sticky;
		width: 25%;
		height: 100px;
		right: 0;
		top: 96px;

		float: right;
	}
}
@media screen and (min-width: 768px) {
	.title h1 {
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		font-size: 4vw;
		font-weight: 700;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		color: rgba(0, 0, 0, 0.84);
		text-align: left;
		width: 75%;
	}
	.author {
		display: flex;
		align-items: center;
		border-left: solid 10px #41c0bf;
		padding-left: 15px;
		margin-top: 17px;
	}
	.profile {
		vertical-align: middle;
		/* width: 50px; */
		height: 55px;
		border-radius: 50%;
	}
	.auth-details {
		margin-left: 10px;
	}
	.auth-details h3 {
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		font-weight: 700;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #525252;
	}
	.social2 {
		text-align: center;
		align-self: center;
		padding-left: 20px;
	}
	.social2 li {
		display: inline-block;
		list-style-type: none;
		text-align: center;
		margin-left: 3px;
	}
	.social2 li svg {
		height: 15px;
	}
	.bio {
		width: 70%;
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		/* font-weight: 700; */
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
		color: #525252;
	}
	.heru {
		margin-top: 50px;

		height: 600px;
		background-position: center;
		background-size: cover;
	}
	.body {
		position: relative;
		margin-top: 20px;
	}
	.main {
		width: 70%;
		/* position: relative; */
		display: inline-block;
		font-family: Montserrat, Helvetica, Arial, sans-serif;
		/* font-weight: 700; */
		font-style: normal;
		font-size: 19px;
		color: rgba(0, 0, 0, 0.84);
		font-stretch: normal;
		line-height: normal;
		text-align: justify;
		letter-spacing: normal;
	}

	.main h1 {
		margin-top: 30px;
	}

	.main h3 {
		margin-top: 15px;
	}

	.main blockquote {
		margin-top: 25px;
		border-left: solid 5px #41c0bf;
		padding-left: 20px;
		color: #525252;
		padding-top: 5px;
		padding-bottom: 20px;
	}

	.main p {
		margin-top: 15px;
		line-height: 1.4;
		text-align: left;
	}

	.main ol {
		margin-top: 15px;
		margin-left: 22px;
		margin-bottom: 15px;
		display: inline-block;
	}

	.main ol li {
		padding-top: 15px;
	}

	.main img {
		width: 100%;
		margin-top: 20px;
	}

	.main a {
		display: inline-block;
		/* float: left; */
		background-size: 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.4s ease;
		text-decoration: none;
		color: inherit;
		border-bottom: solid 2px #41c0bf;
	}
	.main a:hover {
		background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
		background-size: 100% 100%;
	}

	.main a:not(:hover) {
		background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
		background-size: 0 100%;
	}

	.side-bar {
		position: sticky;
		width: 25%;
		height: 100px;
		right: 0;
		top: 96px;

		float: right;
	}
}
</style>
