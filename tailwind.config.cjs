/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['"DM Sans"', 'serif'],
				heading: ['"Jura"', 'serif'],
				display: ['"Libre Baskerville"', 'serif'],
			},
		},
	},
	plugins: [],
};
