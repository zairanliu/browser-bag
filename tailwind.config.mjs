/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {

      'md': '600px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1280px) { ... }
    },
		extend: {
			fontFamily:{
			'sans': [ "Work Sans", 'sans-serif'],
			},
			backgroundImage:{
				'lgGrid':"url('./public/lg-bg.png')",
			}
		},
	},
	plugins: [],
}
