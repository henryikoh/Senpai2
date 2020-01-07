const contentful = require('contentful')
// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js
const config = {
	accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
	space: process.env.CTF_SPACE_ID,
}

// export `createClient` to use it in page components

const client = contentful.createClient(config)
export default client
