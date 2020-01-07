<template>
	<div class="footer">
		<div class="wrapper flex-row">
			<div class="colm1">
				<h1>The future belongs to those who create it</h1>
					<h3>
						Senpai was born out of the desire to <span> connect</span>, <span>empower</span> and <span>create oppurtunities</span> for <span>creative people</span> to work together in unity to design and build a better future for humanity
					</h3>
			</div>
			<div class="colm2">
				<h1>Ecosystem</h1>
				<a href="#">Senpai</a>
				<a href="#">Senpai Collective</a>
				<a href="#">Design 101</a>
				<a href="#">Senpai talents</a>
				<a href="#">Senpai Academy</a>
			</div>
			<div class="colm2">
				<h1>Media</h1>
				<a href="#">Senpai Collective Blog</a>
				<a href="#">Design for good podcast</a>
				<a href="#">Case Studies</a>
				<a href="#">Blog</a>
			</div>
			<div class="colm3">
				<h1>oppurtunities</h1>
				<p>We are always looking for passionate and creative people to join our team</p>
				<button>See Jobs</button>
			</div>
		</div>
		<div class="signature wrapper">
			<h2>This site is a pwa built with <a target="_blank" href="https://nuxtjs.org/">nuxt.js(vue)</a>, <a target="_blank" href="https://www.contentful.com/">contenful</a> and <a target="_black" href="https://firebase.google.com/">firebase.</a> hosted on <a target="_blank" href="https://www.netlify.com/">netlify </a> <br>- designed and built with ❤️  by <a target="_blank" href="https://twitter.com/henryikoh_">Henry Ikoh</a></h2>
			<p>Copyright © 2020</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
@media screen and (max-width: 767px) {
    .footer {
	border-top: solid 0.5px #525252;
	background-color: #525252;
	/* height: 400px; */
	color: white;
	padding-bottom: 35px;
}
.flex-row {
	display: flex;
	margin-top: 40px;
	margin-bottom: 40px;
        flex-wrap: wrap;
}
.colm2{
	  display: flex;
    flex-wrap: wrap;
    flex-direction: column;
		margin-right: 41px;
        margin-bottom: 35px;
}
.colm2 h1 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #f0f4f6;
    padding-bottom: 15px;
    width: 100%;
}

.colm2 a {
	font-family: Montserrat;
	text-transform: none;
  font-weight: 400;
    /* letter-spacing: -.5px; */
    -webkit-transition: color .2s;
    transition: color .2s;
    display: block;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 12px;
    padding: 2px 0;
}
.colm2 a:hover {
	color: #41c0bf
}
.colm1 {
	width: 100%;
  /* padding-right: 30px; */
  margin-bottom: 35px;
}
.colm1 h1 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #f0f4f6;
    padding-bottom: 15px;
    width: 100%;
}
.colm1 h3 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    /* letter-spacing: -.5px; */
    -webkit-transition: color .2s;
    transition: color .2s;
    display: block;
    color: #f7f8fb82;
}
.colm1 span {
	color: #fff;
}
.colm3{
	  display: flex;
    flex-wrap: wrap;
    flex-direction: column;
	
		
}
.colm3 h1 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #f0f4f6;
    padding-bottom: 15px;
    width: 100%;
}

.colm3 p {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 300;
    display: block;
    color: #fff;
    font-size: 10px;
    margin-bottom: 22px;
    padding: 2px 0;
    font-size: 20px;
}
.colm3 button{
	color: white;
    padding: 10px 15px;
    border: solid 1px white;
    background: none;
    width: 100px;
}
.signature {
	text-align: center;
    border-top: solid 1px white;
    border-bottom: solid 1px white;
    padding: 20px 0;
}
.signature h2 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #f2f2f3ad;
    padding-bottom: 5px;
   
    margin: auto;
    text-align: center;
}
.signature p {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #fff
}
.signature a {
	
    -webkit-transition: color .2s;
    transition: color .2s;
    
    color: #fff;
    text-decoration: none;
   
}
.signature a:hover{
	color: #41c0bf;
}
}
@media screen and (min-width: 768px) {
.footer {
	border-top: solid 0.5px #525252;
	background-color: #525252;
	/* height: 400px; */
	color: white;
	padding-bottom: 35px;
}
.flex-row {
	display: flex;
	margin-top: 70px;
	margin-bottom: 70px;
}
.colm2{
	  display: flex;
  
    flex-direction: column;
		margin-right: 41px;
}
.colm2 h1 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #f0f4f6;
    padding-bottom: 15px;
    width: 100%;
}

.colm2 a {
	font-family: Montserrat;
	text-transform: none;
  font-weight: 500;
    /* letter-spacing: -.5px; */
    -webkit-transition: color .2s;
    transition: color .2s;
    display: block;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    margin-bottom: 12px;
    padding: 2px 0;
}
.colm2 a:hover {
	color: #41c0bf
}
.colm1 {
	width: 35%;
  padding-right: 30px;
}
.colm1 h1 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #f0f4f6;
    padding-bottom: 15px;
    width: 100%;
}
.colm1 h3 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    /* letter-spacing: -.5px; */
    -webkit-transition: color .2s;
    transition: color .2s;
    display: block;
    color: #f7f8fb82;
}
.colm1 span {
	color: #fff;
}
.colm3{
	  display: flex;
    flex-wrap: wrap;
    flex-direction: column;
		margin-right: 41px;
		width: 20%;
}
.colm3 h1 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #f0f4f6;
    padding-bottom: 15px;
    width: 100%;
}

.colm3 p {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 300;
    display: block;
    color: #fff;
    font-size: 20px;
    margin-bottom: 22px;
    padding: 2px 0;
}
.colm3 button{
	color: white;
    padding: 10px 15px;
    border: solid 1px white;
    background: none;
    width: 100px;
}
.signature {
	text-align: center;
    border-top: solid 1px white;
    border-bottom: solid 1px white;
    padding: 20px 0;
}
.signature h2 {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #f2f2f3ad;
    padding-bottom: 5px;
    width: 48%;
    margin: auto;
    text-align: center;
}
.signature p {
	font-family: Montserrat;
    text-transform: none;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 10px;
    line-height: 20px;
    letter-spacing: 1px;
    color: #fff
}
.signature a {
	
    -webkit-transition: color .2s;
    transition: color .2s;
    
    color: #fff;
    text-decoration: none;
   
}
.signature a:hover{
	color: #41c0bf;
}
}
</style>
