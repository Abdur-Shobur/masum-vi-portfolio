const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'dm-sans': ['DM Sans', 'sans-serif'],
				hind: ['Hind', 'sans-serif'],
				'open-sans': ['Open Sans', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			textColor: {
				skin: {},
			},
			backgroundColor: {
				skin: {},
			},
		},
	},
	darkMode: false,
	plugins: [require('daisyui')],
	daisyui: {
		themes: false,
	},
};
