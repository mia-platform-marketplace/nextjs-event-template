import { Inter, Fira_Code } from '@next/font/google';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        bodyXLMedium: React.CSSProperties;
        bodyLAltBold: React.CSSProperties;
        bodyL: React.CSSProperties;
        bodyLSemibold: React.CSSProperties;
        bodyLBold: React.CSSProperties;
        bodyXLBlack: React.CSSProperties;
        bodyXXXLAltBlack: React.CSSProperties;
        bodyXS: React.CSSProperties;
        bodyMBold: React.CSSProperties;
        bodySAlt: React.CSSProperties;
        bodyXSSemibold: React.CSSProperties;
        bodyXSAlt: React.CSSProperties;
        bodyS: React.CSSProperties;
        bodyM: React.CSSProperties;
        bodyStickyNavBar: React.CSSProperties;
        bodyStickyNavBarSelected: React.CSSProperties;
        bodyXXLBlack: React.CSSProperties;
        bodyXXXL: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        bodyXLMedium?: React.CSSProperties;
        bodyLAltBold: React.CSSProperties;
        bodyL: React.CSSProperties;
        bodyLSemibold: React.CSSProperties;
        bodyLBold: React.CSSProperties;
        bodyXLBlack: React.CSSProperties;
        bodyXXXLAltBlack: React.CSSProperties;
        bodyXS: React.CSSProperties;
        bodyMBold: React.CSSProperties;
        bodySAlt: React.CSSProperties;
        bodyXSSemibold: React.CSSProperties;
        bodyXSAlt: React.CSSProperties;
        bodyS: React.CSSProperties;
        bodyM: React.CSSProperties;
        bodyStickyNavBar: React.CSSProperties;
        bodyStickyNavBarSelected: React.CSSProperties;
        bodyXXLBlack: React.CSSProperties;
        bodyXXXL: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        bodyXLMedium: true;
        bodyLAltBold: true;
        bodyL: true;
        bodyLSemibold: true;
        bodyLBold: true;
        bodyXLBlack: true;
        bodyXXXLAltBlack: true;
        bodyXS: true;
        bodyMBold: true;
        bodySAlt: true;
        bodyXSSemibold: true;
        bodyXSAlt: true;
        bodyS: true;
        bodyM: true;
        bodyStickyNavBar: true;
        bodyStickyNavBarSelected: true;
        bodyXXLBlack: true;
        bodyXXXL: true;
    }
}

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    display: 'swap',
});

const firaCode = Fira_Code({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});



const theme: any = {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: inter.style.fontFamily,
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: '34px',
                    padding: '12px 32px',
                    height: '56px',
                    '@media (max-width:1200px)': {
                        fontFamily: inter.style.fontFamily,
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '20px',
                        padding: '10px 24px',
                    },
                    textTransform: 'none',
                    borderRadius: '8px',
                    width: 'fit-content',
                    backgroundColor: '#064E3B',
                    color: '#ECFDF5',
                    '&:hover': {
                        backgroundColor: '#047857',
                    },
                    '&.Mui-disabled': {
                        backgroundColor: '#F1F3F3',
                        color: '#D7D9DB',
                    },
                },
                containedPrimary: {
                    backgroundColor: '#064E3B',
                    boxShadow: 'none',
                    '&:hover': {
                        backgroundColor: '#047857',
                    },
                },
                containedSecondary: {
                    backgroundColor: 'transparent',
                    border: `3px solid #A7F3D0`,
                    '&:hover': {
                        backgroundColor: '#EFEBFC3D',
                    },
                },
            },
        },
    },
    palette: {
        primary: {
            50: '#ECFDF5',
            100: '#D1FAE5',
            200: '#A7F3D0',
            300: '#6EE7B7',
            500: '#10B981',
            700: '#047857',
            800: '#065F46',
            900: '#064E3B',
            950: '#022C22',
        },
        gradient: {
            50: 'linear-gradient(90deg, #A7F3D0 0%, #D1FAE5 100%)',
            100: 'linear-gradient(107.98deg, #065F46 -37.53%, #047857 24.86%, #10B981 89.57%)',
            200: 'linear-gradient(123.03deg, #064E3B 19.13%, #022C22 105.03%)'
        },
        grey: {
            25: '#FBFCFC',
            50: '#F1F3F3',
            100: '#D7D9DB',
            200: '#BEBFC3',
            300: '#A4A4AB',
            400: '#8B8A93',
            600: '#585662',
            800: '#252132',
            900: '#0B071A',
        },
    },
    typography: {
        h1: {
            fontFamily: firaCode.style.fontFamily,
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '32px',
            letterSpacing: '0.06em',
            '@media (max-width:1200px)': {
                fontFamily: firaCode.style.fontFamily,
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '24px',
                letterSpacing: '0.06em',
            }
        },
        h2: {
            fontFamily: firaCode.style.fontFamily,
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '26px',
            letterSpacing: '0.15em',
            '@media (max-width:1200px)': {
                fontFamily: firaCode.style.fontFamily,
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                letterSpacing: '0.15em',

            }
        },
        h3: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 600,
            fontSize: '60px',
            lineHeight: '72px',
            letterSpacing: '0.1em',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '48px',
                letterSpacing: '0.1em',
            }
        },
        h4: {
            fontFamily: firaCode.style.fontFamily,
            fontWeight: 700,
            fontSize: '36px',
            lineHeight: '48px',
            '@media (max-width:1200px)': {
                fontFamily: firaCode.style.fontFamily,
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '40px'
            }
        },
        h5: {
            fontFamily: firaCode.style.fontFamily,
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '28px',
            '@media (max-width:1200px)': {
                fontFamily: firaCode.style.fontFamily,
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '24px'
            }
        },
        bodyXXXL: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            fontSize: '55px',
            lineHeight: '62.32px',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 700,
                fontSize: '36px',
                lineHeight: '24px'
            }
        },
        bodyXXXLAltBlack: {
            fontFamily: firaCode.style.fontFamily,
            fontSize: '55px',
            fontWeight: 700,
            lineHeight: '64px',
            '@media (max-width:1200px)': {
                fontFamily: firaCode.style.fontFamily,
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '32px'
            },
            '@media (max-width:360px)': {
                fontFamily: firaCode.style.fontFamily,
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '32px'
            }
        },
        bodyXXLBlack: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            fontSize: '46px',
            lineHeight: '56px',
            letterSpacing: '0.1em',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '32px',
            }
        },
        bodyXLMedium: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 500,
            fontSize: '40px',
            lineHeight: '64px',
            letterSpacing: '0.03em',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 500,
                fontSize: '22px',
                lineHeight: '32px',
                letterSpacing: '0.03em',
            }
        },
        bodyXLBlack: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 900,
            fontSize: '40px',
            lineHeight: '64px',
            letterSpacing: '0.03em',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 900,
                fontSize: '22px',
                lineHeight: '32px',
                letterSpacing: '0.03em',

            }
        },
        bodyL: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            fontSize: '28px',
            lineHeight: '32px',
            letterSpacing: '0.08em',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0.08em',

            }
        },
        bodyLSemibold: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 600,
            fontSize: '28px',
            lineHeight: '32px',
            letterSpacing: '0.08em',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0.08em',
            }
        },
        bodyLBold: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '32px',
            letterSpacing: '0.08em',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0.08em',

            }
        },
        bodyLAltBold: {
            fontFamily: firaCode.style.fontFamily,
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '34px',
            letterSpacing: '0.2em',
            '@media (max-width:1200px)': {
                fontFamily: firaCode.style.fontFamily,
                fontWeight: 600,
                fontSize: '20px',
                lineHeight: '28px',
                letterSpacing: '0.2em',

            }
        },
        bodyM: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            fontSize: '22px',
            lineHeight: '30px',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: '24px',
            }
        },
        bodyMMedium: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 500,
            fontSize: '22px',
            lineHeight: '30px',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '20px',
            }
        },
        bodyMBold: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            fontSize: '22px',
            lineHeight: '30px',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '20px',
            }
        },
        bodySAlt: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '34px',
            letterSpacing: '0.1em',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
                letterSpacing: '0.1em',

            }
        },
        bodyS: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '24px',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '20px',
            }
        },
        bodyXS: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '18px',
            letterSpacing: '0.06em',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0.06em',

            }
        },
        bodyXSSemibold: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '18px',
            '@media (max-width:1200px)': {
                fontFamily: inter.style.fontFamily,
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '16px',
            }
        },
        bodyXSAlt: {
            fontFamily: firaCode.style.fontFamily,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '18px',
            letterSpacing: '0.05em',
            '@media (max-width:1200px)': {
                fontFamily: firaCode.style.fontFamily,
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '18px',
                letterSpacing: '0.05em',

            }
        },
        bodyStickyNavBar: {
            color: '#0B071A',
            fontFamily: inter.style.fontFamily,
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '18.13px',
        },
        bodyStickyNavBarSelected: {
            color: '#0B071A',
            fontFamily: inter.style.fontFamily,
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '18.13px',
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1200,
            lg: 1200,
            xl: 1536,
        },
    },
}

export default theme;
