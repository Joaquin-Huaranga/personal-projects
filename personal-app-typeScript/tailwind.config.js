/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",      // Archivo HTML principal
        "./src/**/*.{js,ts,jsx,tsx}", // Escanea todos los archivos dentro de src
    ],
    theme: {
        extend: {}, // Aquí puedes personalizar temas más adelante
    },
    plugins: [], // Puedes agregar plugins adicionales aquí
};
