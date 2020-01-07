<template>
	<nuxt />
</template>

<style>
html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body ::selection,
html ::selection {
	background: #41c0bf;
	color: white;
}

.wrapper {
	margin: auto;
	width: 85%;
}

.cta-btn a {
	display: inline-block;
	text-decoration: none;
	/* width: 210px; */
	/* height: 43px; */
	/* border-radius: 10px; */
	border-bottom: solid 3px #41c0bf;
	font-family: Montserrat;
	/* font-size: 22px; */
	font-weight: 600;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #525252;
	padding: 2px 0px;
	background-size: 0 100%;
	background-repeat: no-repeat;
	transition: background-size 0.4s ease;
}

.cta-btn a:hover {
	background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
	background-size: 100% 100%;
}
.cta-btn a:not(:hover) {
	background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
	background-size: 0 100%;
}
.c2alinks a {
	display: inline-block;
	/* float: left; */
	background-size: 0 100%;
	background-repeat: no-repeat;
	transition: background-size 0.4s ease;
}
.c2alinks a:hover {
	background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
	background-size: 100% 100%;
}

/* The is a very import css selector ":not()" it helps you pass the oppiste of and argument */
.c2alinks a:not(:hover) {
	background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
	background-size: 0 100%;
}
.btn1 {
	text-decoration: none;
	color: #525252;
	background-size: 0 100%;
	background-repeat: no-repeat;
	transition: background-size 0.4s ease;
}
.btn1:hover {
	background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
	background-size: 100% 100%;
}
.btn1:not(:hover) {
	background-image: linear-gradient(180deg, transparent 65%, #41c0bf 0);
	background-size: 0 100%;
}
@media screen and (max-width: 767px) {
	.wrapper {
		margin: auto;
		width: 90%;
	}
}
.white-space {
	height: 200px;
}
</style>
