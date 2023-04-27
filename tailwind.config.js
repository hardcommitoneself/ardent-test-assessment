const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Lato", ...defaultTheme.fontFamily.sans],
            },
            backgroundColor: {
                app: "#FFFFFF",
            },
            height: {
                17: "4.5rem",
            },
            colors: {
                primary: {
                    0: "#FFFFFF",
                    50: "#F2F5FC",
                    100: "#E2E8F7",
                    200: "#CBD6F2",
                    300: "#A8BCE8",
                    400: "#7E9ADC",
                    500: "#5F7AD2",
                    600: "#4A5EC4",
                    700: "#414EB4",
                    800: "#3A4293",
                    900: "#333A75",
                },
                secondary: {
                    50: "#FCFDFD",
                    100: "#F7FAFB",
                    200: "#EEF3F5",
                    300: "#DBDEE5",
                    400: "#C4C8CF",
                    500: "#A5ADB9",
                    600: "#7E8A9C",
                    700: "#637282",
                    800: "#3C4249",
                    900: "#212225",
                },
            },
        },
    },

    plugins: [require("@tailwindcss/forms"), require('@tailwindcss/line-clamp'),],
};
