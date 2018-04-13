import Typography from "typography";

const typography = new Typography({
    googleFonts: [
        {
            name: 'Cormorant',
            styles: [
                '400'
            ],
        },
    ],
    baseFontSize: '24px',
    baseLineHeight: 1.666,
    headerFontFamily: ['Cormorant', 'sans-serif'],
    bodyFontFamily: ['Cormorant', 'serif'],

});

export default typography;