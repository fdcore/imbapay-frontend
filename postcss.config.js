const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: {
<<<<<<< HEAD
=======
        "postcss-import": {},
>>>>>>> 6066cf6363c5a5d4a8092983681dce8287f60ae1
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? {
            cssnano: {}
        } : {})
    }
}