require('dotenv').config({ path: '.env' })
const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
	accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
	space: process.env.CTF_SPACE_ID,
}

// export `createClient` to use it in page components

const client = contentful.createClient(config)
export default {
	/*
	 ** Headers of the page
	 */
	mode: 'universal',
	head: {
		title: 'SENPAI | A Social Impact Design Company in Lagos, Nigeria',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'Senpai is a social impact design company, harnessing the creative potential of youths in africa to design and develop sustainable solutions to complex social problems.',
			},
			{
				hid: 'og:title',
				name: 'og:title',
				content: 'SENPAI | A Social Impact Design Company in Lagos, Nigeria'
			},
			{
				hid: 'og:description',
				name: 'og:description',
				content: 'Senpai is a social impact design company, harnessing the creative potential of youths in africa to design and develop sustainable solutions to complex social problems.',
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
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700',
			},
		],
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#41c0bf', height: '5px', continuous: true },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['~/plugins/contentful.js'],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module',
		'@nuxtjs/dotenv',
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/dotenv',
	],
	server: {
		port: 8000, // default: 3000
		host: '0.0.0.0', // default: localhost
	},
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},

	/*
	 ** Build configuration
	 */
	workbox: {
		runtimeCaching: [
			{
				urlPattern: 'https://cdn.contentful.com/.*',
				method: 'GET',
				strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
			},
			{
				urlPattern: 'https://fonts.gstatic.com/.*',
				handler: 'cacheFirst',
				method: 'GET',
				strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
			},
			{
				urlPattern: 'https://api.instagram.com/.*',
			},
		],
	},
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
	},
	vue: {
		config: {
			productionTip: false,
			devtools: true,
		},
	},
	// 	env: {
	// 		CTF_PERSON_ID: "15jwOBqpxqSAOy2eOO4S0m",
	// CTF_BLOG_POST_TYPE_ID: 'blogPost',
	// CTF_SPACE_ID:'v5skhv170esk',
	// CTF_CDA_ACCESS_TOKEN: 'MOyGD-MXRTEX81nxcWqg83mc2LyQRc2CuCjeTEyNbLs',
	// CTF_CMA_ACCESS_TOKEN: 'CFPAT-WCqmef1hoBgkAaTQfrYx3YFXvJRPeUvANygFN-got1A',
	// 	},
	generate: {
		routes() {
			return Promise.all([
				// fetch the owner of the blog
				// client.getEntries({
				// 	'sys.id': env.CTF_PERSON_ID,
				// }),
				// fetch all blog posts sorted by creation date
				client.getEntries({
					content_type: 'caseStudy',
					'fields.tag[in]': 'featured',
				}),
			]).then(([posts]) => {
				return [
					...posts.items.map(
						entry => `/${entry.fields.type}/${entry.fields.slug}`,
					),
				] // in the template
			})
		},
	},
}
