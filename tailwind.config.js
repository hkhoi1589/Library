/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				btn11: 'shiny-btn11 3s ease-in-out infinite',
			},
			keyframes: {
				'shiny-btn11': {
					'0%': { transform: 'scale(0) rotate(45deg)', opacity: '0' },
					'80%': { transform: 'scale(0) rotate(45deg)', opacity: '0.5' },
					'81%': { transform: 'scale(4) rotate(45deg)', opacity: '1' },
					'100%': { transform: 'scale(50) rotate(45deg)', opacity: '0' },
				},
			},
		},
	},
	plugins: [],
	corePlugins: {
		//preflight: false, // <== disable this!
	},
	important: true,
};
