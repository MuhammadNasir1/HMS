module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#13242C",
                secondary: "#edbd58",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
