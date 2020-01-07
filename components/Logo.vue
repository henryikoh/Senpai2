<template>
	<div class="logo wrapper">
		<svg viewBox="0 0 162.2 143.998">
			<g>
				<g>
					<path
						id="logo-top"
						d="M153.467,6.817l-16.305,65.182H6.817c0-36.004,29.169-65.182,65.182-65.182H153.467z"
					/>
					<path
						id="logo-bot"
						fill="#FFFFFF"
						d="M6.817,71.999h130.346c0,36.004-29.169,65.182-65.164,65.182C35.986,137.181,6.817,108.003,6.817,71.999z"
					/>
				</g>
				<g class="logo-stroke">
					<path
						d="M137.163,71.999l16.305-65.182H71.999
               c-36.013,0-65.182,29.178-65.182,65.182s29.169,65.182,65.182,65.182C107.994,137.181,137.163,108.003,137.163,71.999z"
					/>

					<line fill="none" x1="6.817" y1="71.999" x2="137.163" y2="71.999" />
				</g>
			</g>
		</svg>
	</div>
</template>

<style>
#logo-bot {
	fill: none;
	animation: logo-bot;
	animation-duration: 4.2s;
	fill: none;
	animation-fill-mode: forwards;
	animation-delay: 1s;
}

#logo-top {
	animation: logo-top;
	animation-duration: 4.2s;
	fill: none;
	animation-fill-mode: forwards;
	animation-delay: 1s;
}

@keyframes logo-top {
	66% {
		fill: none;
	}
	67% {
		fill: #41c0bf;
	}

	100% {
		fill: #41c0bf;
	}
}
@keyframes logo-bot {
	66% {
		fill: none;
	}
	67% {
		fill: white;
	}

	100% {
		fill: white;
	}
}
.logo-stroke {
	stroke-dasharray: 1000;
	stroke-dashoffset: 1100;
	animation: logo-stroke 12s cubic-bezier(0.13, 0.18, 0.31, 1.16) forwards;
	stroke: #525252;
	stroke-width: 13.6338;
	stroke-miterlimit: 10;
	fill: none;
	animation-delay: 1s;
}

@keyframes logo-stroke {
	to {
		stroke-dashoffset: 50;
	}
}
@media screen and (max-width: 767px) {
	.logo {
		margin: auto;
		width: 125px;
		padding-bottom: 9px;
	}
}
@media screen and (min-width: 768px) {
	.logo {
		margin: auto;
		width: 13vw;
		padding-top: 20px;
	}
}
</style>
