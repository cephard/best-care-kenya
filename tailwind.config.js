module.exports = {
    content: [
        './src/**/*.{astro,html,js,ts,jsx,tsx}', // Adjust if your files are located elsewhere
    ],
    theme: {
        extend: {
            colors: {
                accent: '#FF5733', // Replace with your desired accent color
            },
            borderRadius: {
                pill: '9999px', // For pill-shaped buttons
            },
        },
    },
    plugins: [],
}
