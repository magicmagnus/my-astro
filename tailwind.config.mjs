/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                paper: 'var(--paper)',
                paper2: 'var(--paper-2)',
                paper3: 'var(--paper-3)',
                ink: 'var(--ink)',
                ink2: 'var(--ink-2)',
                inksoft: 'var(--ink-soft)',
                accent: 'var(--accent)',
                accent2: 'var(--accent-2)',
                hairline: 'var(--hairline)',
                pill: 'var(--pill)',
            },
            shadows: {
                edge: 'var(--edge)',
                edgelg: 'var(--edge-lg)',
                recess: 'var(--recess)',
                raised: 'var(--raised)',
            },
        },
    },
    plugins: [],
}
