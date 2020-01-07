<template>
	<nav class="navi">
		<transition name="logo">
			<div v-if="showlogo" class="logo2">
				<nuxt-link style="display:block" to="/">
					<svg
						viewBox="0 0 195 175"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M183.326 9.00001L163.944 87.4463H9.00002C9.00002 44.1156 43.6738 9.00001 86.4832 9.00001H183.326Z"
							fill="#41BFBE"
						/>
						<path
							d="M9.00002 87.4476H163.945C163.945 130.778 129.271 165.894 86.4832 165.894C43.6738 165.893 9.00002 130.778 9.00002 87.4476Z"
							fill="white"
						/>
						<path
							d="M163.951 87.4525L183.333 9.00619H86.4908C43.6814 9.00619 9.00757 44.1218 9.00757 87.4525C9.00757 130.783 43.6814 165.899 86.4908 165.899C129.278 165.898 163.951 130.783 163.951 87.4525Z"
							stroke="#525352"
							stroke-width="19"
							stroke-miterlimit="10"
						/>
						<path
							d="M9.00002 87.4475H163.945"
							stroke="#525352"
							stroke-width="19"
							stroke-miterlimit="10"
						/>
					</svg>
				</nuxt-link>
			</div>
		</transition>
		<ul class="menu">
			<li class="cta-btn">
				<a target="_blank" href="https://anchor.fm/designforgood">
					<!-- <div class="podcast">
                 <svg viewBox="0 0 54 94" fill="#525252" xmlns="http://www.w3.org/2000/svg">
                   <path
                     d="M34 0C22.978 0 14 8.97327 14 19.9898C14 23.72 15.0547 27.2112 16.8437 30.2034L0.09375 82.9265C0.03288 83.1181 0.00116 83.3189 0 83.52C0 85.8357 0.650757 87.8939 1.9375 89.4857C3.22424 91.0774 5.00622 92.1854 7.125 93.2338C9.4799 93.8957 12.0508 94.1418 14.0937 93.921C16.5321 93.6371 19.1387 92.8315 20.6562 90.5789C20.7466 90.4428 20.8203 90.2956 20.875 90.1416L39.6875 39.1364C47.9476 36.6788 54 29.0307 54 19.9899C54 8.9733 45.022 0 34 0V0ZM34 3.99786C42.8603 3.99786 50 11.1341 50 19.9898C50 20.3866 49.9657 20.7874 49.9375 21.1768C45.074 22.3341 38.6674 21.6502 33.0938 19.4901C27.7781 17.4299 23.3093 14.0555 21.3125 10.2448C24.2343 6.44681 28.819 3.99786 34 3.99786V3.99786ZM31 7.99597C30.4477 7.99597 30 8.44336 30 8.99536C30 9.54736 30.4477 9.99493 31 9.99493C31.5523 9.99493 32 9.54736 32 8.99536C32 8.44336 31.5523 7.99597 31 7.99597ZM27 9.99493C25.8954 9.99493 25 10.8899 25 11.9939C25 13.0979 25.8954 13.9929 27 13.9929C28.1046 13.9929 29 13.0979 29 11.9939C29 10.8899 28.1046 9.99493 27 9.99493ZM31 10.9944C30.4477 10.9944 30 11.4419 30 11.9939C30 12.5459 30.4477 12.9934 31 12.9934C31.5523 12.9934 32 12.5459 32 11.9939C32 11.4419 31.5523 10.9944 31 10.9944ZM19.0937 14.2115C21.9597 18.2296 26.5612 21.2635 31.6562 23.2382C37.2653 25.412 43.5071 26.3288 49.0312 25.4558C46.8055 31.6076 40.9396 35.9817 34 35.9817C25.1397 35.9817 18 28.8456 18 19.9898C18 17.9405 18.396 16.0098 19.0937 14.2115V14.2115ZM19.8125 34.0452C21.7386 35.9872 24.0576 37.5405 26.6392 38.5701C29.6774 39.608 32.3459 40.0429 35.1562 39.9484L33.9375 43.228C31.4624 43.4319 28.4898 43.2711 25.75 42.5409C22.8142 41.7584 20.2535 40.3395 18.5312 38.1056L19.8125 34.0452V34.0452ZM17.125 42.4784C19.3258 44.4359 22.0241 45.6873 24.75 46.4139C27.3529 47.1076 30.0056 47.3723 32.4375 47.3196L17.25 88.3926C16.7245 89.0818 15.407 89.7504 13.6562 89.9542C11.9077 90.1578 9.92832 89.9283 8.78125 89.5795C6.97574 88.674 5.75853 87.8167 5.0625 86.9557C4.38833 86.1218 4.06681 85.2183 4.03125 83.7386L17.125 42.4784Z"
                    />
                 </svg>
             </div> -->
					Design for good podcast
				</a>
			</li>
			<li class="cta-btn">
				<a href="https://www.thinksenpai.com/design101/">Design 101</a>
			</li>
			<li class="cta-btn">
				<nuxt-link to="/blog">Blog</nuxt-link>
				<!-- <a target="_black" href="https://medium.com/think-senpai">Blog</a> -->
			</li>
		</ul>

		<div class="menu-wrap">
			<input v-model="menuclick" type="checkbox" class="toggler" />
			<div class="hamburger"><div></div></div>
		</div>
		<transition name="mob-menu">
			<div v-if="menuclick" class="mob-menu">
				<ul class="menu2">
					<li class="cta-btn">
						<a target="_blank" href="https://anchor.fm/designforgood">
							<!-- <div class="podcast">
                 <svg viewBox="0 0 54 94" fill="#525252" xmlns="http://www.w3.org/2000/svg">
                   <path
                     d="M34 0C22.978 0 14 8.97327 14 19.9898C14 23.72 15.0547 27.2112 16.8437 30.2034L0.09375 82.9265C0.03288 83.1181 0.00116 83.3189 0 83.52C0 85.8357 0.650757 87.8939 1.9375 89.4857C3.22424 91.0774 5.00622 92.1854 7.125 93.2338C9.4799 93.8957 12.0508 94.1418 14.0937 93.921C16.5321 93.6371 19.1387 92.8315 20.6562 90.5789C20.7466 90.4428 20.8203 90.2956 20.875 90.1416L39.6875 39.1364C47.9476 36.6788 54 29.0307 54 19.9899C54 8.9733 45.022 0 34 0V0ZM34 3.99786C42.8603 3.99786 50 11.1341 50 19.9898C50 20.3866 49.9657 20.7874 49.9375 21.1768C45.074 22.3341 38.6674 21.6502 33.0938 19.4901C27.7781 17.4299 23.3093 14.0555 21.3125 10.2448C24.2343 6.44681 28.819 3.99786 34 3.99786V3.99786ZM31 7.99597C30.4477 7.99597 30 8.44336 30 8.99536C30 9.54736 30.4477 9.99493 31 9.99493C31.5523 9.99493 32 9.54736 32 8.99536C32 8.44336 31.5523 7.99597 31 7.99597ZM27 9.99493C25.8954 9.99493 25 10.8899 25 11.9939C25 13.0979 25.8954 13.9929 27 13.9929C28.1046 13.9929 29 13.0979 29 11.9939C29 10.8899 28.1046 9.99493 27 9.99493ZM31 10.9944C30.4477 10.9944 30 11.4419 30 11.9939C30 12.5459 30.4477 12.9934 31 12.9934C31.5523 12.9934 32 12.5459 32 11.9939C32 11.4419 31.5523 10.9944 31 10.9944ZM19.0937 14.2115C21.9597 18.2296 26.5612 21.2635 31.6562 23.2382C37.2653 25.412 43.5071 26.3288 49.0312 25.4558C46.8055 31.6076 40.9396 35.9817 34 35.9817C25.1397 35.9817 18 28.8456 18 19.9898C18 17.9405 18.396 16.0098 19.0937 14.2115V14.2115ZM19.8125 34.0452C21.7386 35.9872 24.0576 37.5405 26.6392 38.5701C29.6774 39.608 32.3459 40.0429 35.1562 39.9484L33.9375 43.228C31.4624 43.4319 28.4898 43.2711 25.75 42.5409C22.8142 41.7584 20.2535 40.3395 18.5312 38.1056L19.8125 34.0452V34.0452ZM17.125 42.4784C19.3258 44.4359 22.0241 45.6873 24.75 46.4139C27.3529 47.1076 30.0056 47.3723 32.4375 47.3196L17.25 88.3926C16.7245 89.0818 15.407 89.7504 13.6562 89.9542C11.9077 90.1578 9.92832 89.9283 8.78125 89.5795C6.97574 88.674 5.75853 87.8167 5.0625 86.9557C4.38833 86.1218 4.06681 85.2183 4.03125 83.7386L17.125 42.4784Z"
                    />
                 </svg>
             </div> -->
							Design for good podcast
						</a>
					</li>
					<li class="cta-btn">
						<a href="https://www.thinksenpai.com/design101/">Design 101</a>
					</li>
					<li class="cta-btn">
						<nuxt-link to="/blog">Blog</nuxt-link>
						<!-- <a target="_black" href="https://medium.com/think-senpai">Blog</a> -->
					</li>
				</ul>
			</div>
		</transition>
	</nav>
</template>

<script>
export default {
	props: ['showlogo', 'mobilemenu'],
	data() {
		return {
			menuclick: '',
		}
	},
}
</script>

<style>
.logo-enter-active {
	animation: logo 1s;
	animation: logo 1s;
}
.logo-leave-active {
	animation: logo reverse;
}
@keyframes logo {
	0% {
		bottom: -100px;
		opacity: 0;
	}
	100% {
		bottom: -10px;
		opacity: 1;
	}
}
@keyframes menu {
	0% {
		left: 380px;
		opacity: 0;
	}
	100% {
		left: 0;
		opacity: 1;
	}
}

.mob-menu-enter-active {
	animation: menu 0.5s;
}
.mob-menu-leave-active {
	animation: menu reverse 0.5s;
}

@media screen and (max-width: 767px) {
	/* MENU STYLES */
	.menu-wrap {
		position: relative;
		/* left: 0; */
		/* z-index: 1; */
		display: inline-block;
	}

	.menu-wrap .toggler {
		position: absolute;
		top: -6px;
		left: -4px;
		z-index: 2;
		cursor: pointer;
		width: 60px;
		height: 60px;
		opacity: 0;
	}

	.menu-wrap .hamburger {
		position: relative;
		top: 0;
		left: 0;
		z-index: 1;
		width: 50px;
		height: 50px;
		padding: 0px;
		padding: 0 5px;
		background: var(--primary-color);
		display: -webkit-box;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		-webkit-box-pack: center;
		justify-content: center;
	}

	/* Hamburger Line */
	.menu-wrap .hamburger > div {
		position: relative;
		flex: none;
		width: 100%;
		height: 4px;
		background: #41c0bf;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		transition: all 0.4s ease;
	}

	/* Hamburger Lines - Top & Bottom */
	.menu-wrap .hamburger > div::before,
	.menu-wrap .hamburger > div::after {
		content: '';
		position: absolute;
		z-index: 1;
		top: -12px;
		width: 80%;
		height: 4px;
		background: inherit;
	}

	/* Moves Line Down */
	.menu-wrap .hamburger > div::after {
		top: 12px;
		width: 60%;
	}

	/* Toggler Animation */
	.menu-wrap .toggler:checked + .hamburger > div {
		transform: rotate(135deg);
	}

	/* Turns Lines Into X */
	.menu-wrap .toggler:checked + .hamburger > div:before,
	.menu-wrap .toggler:checked + .hamburger > div:after {
		width: 100%;
		top: 0;
		transform: rotate(90deg);
	}

	/* Rotate On Hover When Checked */
	.menu-wrap .toggler:checked:hover + .hamburger > div {
		transform: rotate(225deg);
	}
	.mob-menu {
		background: white;
		padding: 20px 0;
		position: absolute;
		width: 100%;
		left: 0;
		padding-left: 5%;
		padding-right: 5%;
	}

	.logo2 {
		width: 50px;
		padding-top: 0;
		/* margin: 0; */
		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);
	}
	.logo-enter-active {
		-webkit-animation: logo 1s;
	}
	.logo-leave-active {
		animation: logo reverse;
	}
	.navi {
		padding: 12px 0;
		padding-left: 5%;
		padding-right: 5%;
		/* padding: 12px 0; */
		position: relative;
		height: 75px;
		position: sticky;
		top: 0;
		background-color: white;
		z-index: 2;
		text-align: right;
	}
	.menu {
		list-style-type: none;
		text-align: right;
		display: none;
	}
	nav ul li {
		list-style: none;
		display: inline-block;
		width: 100%;
	}
	nav ul li a {
		display: inline-block;
		text-decoration: none;
		/* width: 210px; */
		/* height: 43px; */
		/* border-radius: 10px; */
		border-bottom: solid 5px #41c0bf;
		font-family: Montserrat;
		font-size: 16px;
		font-weight: 600;
		font-style: normal;
		font-stretch: normal;
		line-height: 30px;
		letter-spacing: normal;
		color: #525252;
		padding: 2px 0px;
		background-size: 0 100%;
		background-repeat: no-repeat;
		transition: background-size 0.4s ease;
	}
	.logo {
		margin: auto;
		width: 125px;
		padding-bottom: 9px;
	}
}

@media screen and (min-width: 768px) {
	.menu-wrap {
		display: none;
	}
	.logo2 {
		width: 58px;
		padding-top: 0;
		/* margin: 0; */
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.navi {
		padding: 35px 0;
		/* padding: 8%; */
		position: sticky;
		top: 0;
		background-color: white;
		z-index: 2;
		padding-left: 7.5%;
		padding-right: 7.5%;
	}
	.menu {
		list-style-type: none;
		text-align: right;
	}
	.menu li {
		display: inline-block;
		margin-left: 20px;
	}
	.menu li a {
		text-decoration: none;
		/* color: black;
              font-weight: 200; */
		text-transform: uppercase;
		font-size: 1.1vw;
	}
}
</style>
