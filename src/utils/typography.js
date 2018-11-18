import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.45,
  headerFontFamily: [
    "Open Sans",
    "Helvetica Neue Light",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
    "Constantia",
    "Lucida Bright",
    "Lucidabright",
    "Lucida Serif",
    "Lucida",
    "DejaVu Serif",
    "Bitstream Vera Serif",
    "Liberation Serif",
    "Georgia",
    "serif"
  ]
});

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
