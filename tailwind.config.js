/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html'],

    darkMode: "class",
    // hover: solo en dispositivos con ratón; evita hovers pegados tras un toque (mobile-native)
    future: { hoverOnlyWhenSupported: true },
    theme: {
      extend: {
        "colors": {
          "on-error-container": "#ffdad6",
          "outline": "#979177",
          "secondary-fixed": "#dee2ee",
          "inverse-primary": "#6a5f00",
          "tertiary-fixed": "#efe800",
          "surface-container-highest": "#323539",
          "surface-container-low": "#191c20",
          "on-tertiary": "#343200",
          "inverse-on-surface": "#2e3135",
          "tertiary-container": "#efe800",
          "secondary-container": "#424750",
          "error-container": "#93000a",
          "surface": "#111418",
          "on-secondary-container": "#b1b5c0",
          "on-primary-fixed": "#201c00",
          "secondary": "#c2c6d1",
          "secondary-fixed-dim": "#c2c6d1",
          "surface-dim": "#111418",
          "on-primary-fixed-variant": "#504700",
          "on-error": "#690005",
          "surface-bright": "#36393e",
          "tertiary": "#ffffff",
          "on-secondary-fixed": "#171c24",
          "surface-container-high": "#272a2f",
          "tertiary-fixed-dim": "#d2cc00",
          "outline-variant": "#4b4731",
          "on-primary-container": "#0e1115",
          "primary": "#ffffff",
          "error": "#ffb4ab",
          "inverse-surface": "#e1e2e8",
          "background": "#111418",
          "on-tertiary-fixed-variant": "#4b4900",
          "surface-tint": "#dec800",
          "on-surface-variant": "#cec7aa",
          "on-background": "#e1e2e8",
          "primary-fixed-dim": "#dec800",
          "on-tertiary-fixed": "#1e1d00",
          "primary-container": "#fee400",
          "surface-variant": "#323539",
          "on-tertiary-container": "#6a6700",
          "surface-container-lowest": "#0b0e12",
          "surface-container": "#1d2024",
          "on-primary": "#373100",
          "on-surface": "#e1e2e8",
          "on-secondary-fixed-variant": "#424750",
          "primary-fixed": "#fee400",
          "on-secondary": "#2c3139"
        },
        // ease-out fuerte para toda la interfaz (emil-design-eng)
        "transitionTimingFunction": {
          "DEFAULT": "cubic-bezier(0.23, 1, 0.32, 1)",
          "out": "cubic-bezier(0.23, 1, 0.32, 1)"
        },
        "borderRadius": {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
        },
        "spacing": {
          "space-xl": "2.5rem",
          "margin-mobile": "1.25rem",
          "space-sm": "0.5rem",
          "space-xs": "0.25rem",
          "margin": "2.5rem",
          "space-md": "1rem",
          "gutter": "1.5rem",
          "space-lg": "1.5rem",
          "gutter-mobile": "1rem"
        },
        "fontFamily": {
          "headline-md": [
            "Barlow Condensed"
          ],
          "title-lg": [
            "Plus Jakarta Sans"
          ],
          "title-md": [
            "Plus Jakarta Sans"
          ],
          "headline-sm": [
            "Barlow Condensed"
          ],
          "label-lg": [
            "Barlow Condensed"
          ],
          "display-xl": [
            "Barlow Condensed"
          ],
          "body-lg": [
            "Plus Jakarta Sans"
          ],
          "headline-lg-mobile": [
            "Barlow Condensed"
          ],
          "headline-lg": [
            "Barlow Condensed"
          ],
          "body-sm": [
            "Plus Jakarta Sans"
          ],
          "display-xl-mobile": [
            "Barlow Condensed"
          ],
          "label-md": [
            "Plus Jakarta Sans"
          ],
          "body-md": [
            "Plus Jakarta Sans"
          ],
          "label-sm": [
            "Plus Jakarta Sans"
          ]
        },
        "fontSize": {
          "headline-md": [
            "28px",
            {
              "lineHeight": "32px",
              "letterSpacing": "0em",
              "fontWeight": "700"
            }
          ],
          "title-lg": [
            "18px",
            {
              "lineHeight": "24px",
              "fontWeight": "700"
            }
          ],
          "title-md": [
            "16px",
            {
              "lineHeight": "22px",
              "fontWeight": "600"
            }
          ],
          "headline-sm": [
            "22px",
            {
              "lineHeight": "26px",
              "letterSpacing": "0.01em",
              "fontWeight": "600"
            }
          ],
          "label-lg": [
            "16px",
            {
              "lineHeight": "20px",
              "letterSpacing": "0.08em",
              "fontWeight": "700"
            }
          ],
          "display-xl": [
            "72px",
            {
              "lineHeight": "76px",
              "letterSpacing": "-0.02em",
              "fontWeight": "800"
            }
          ],
          "body-lg": [
            "16px",
            {
              "lineHeight": "26px",
              "fontWeight": "400"
            }
          ],
          "headline-lg-mobile": [
            "32px",
            {
              "lineHeight": "36px",
              "letterSpacing": "0em",
              "fontWeight": "700"
            }
          ],
          "headline-lg": [
            "40px",
            {
              "lineHeight": "44px",
              "letterSpacing": "-0.01em",
              "fontWeight": "700"
            }
          ],
          "body-sm": [
            "12px",
            {
              "lineHeight": "18px",
              "fontWeight": "400"
            }
          ],
          "display-xl-mobile": [
            "48px",
            {
              "lineHeight": "52px",
              "letterSpacing": "-0.01em",
              "fontWeight": "800"
            }
          ],
          "label-md": [
            "13px",
            {
              "lineHeight": "16px",
              "letterSpacing": "0.02em",
              "fontWeight": "600"
            }
          ],
          "body-md": [
            "14px",
            {
              "lineHeight": "22px",
              "fontWeight": "400"
            }
          ],
          "label-sm": [
            "11px",
            {
              "lineHeight": "14px",
              "letterSpacing": "0.06em",
              "fontWeight": "700"
            }
          ]
        }
      },
    },
  
};
