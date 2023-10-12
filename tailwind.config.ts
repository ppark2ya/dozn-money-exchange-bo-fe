import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          100: '#3246FF',
          200: '#7582FF',
          300: '#2635BF',
          400: '#CDCFE3',
          500: '#002968',
        },
        secondary: {
          100: '#EDEDED',
          200: '#E8EBED',
          300: '#C7C7C7',
          400: '#F7F8F9',
          500: '#5867F8',
        },
        danger: {
          100: '#FF767E',
          200: '#FF4853',
          300: '#DA2731',
          400: '#E5B8BA',
        },
        success: {
          100: '#31DCA9',
          200: '#2EC99A',
          300: '#00B8A2',
          400: '#BBCFC4',
        },
        grey: {
          100: '#F7F8F9',
          200: '#EDEDED',
          300: '#E8EBED',
          400: '#C7C7C7',
          500: '#9EA4AA',
          600: '#72787F',
          700: '#1B1D1F',
        },
        yellow: {
          100: '#FFF6A0',
        },
      },
      backgroundColor: {
        article: '#F3F3F3',
        tooltip: '#3e3434',
        tertiary: '#FDFDFF',
      },
      borderColor: {
        tooltip: '#3e3434',
      },
      borderWidth: {
        1: '1px',
        6: '6px',
      },
      maxWidth: {
        screen: '100vh',
        '3/10': '30%',
        '1/2': '50%',
        '7/10': '70%',
        '4/5': '80%',
      },
      minWidth: {
        4: '16px',
        14: '3.5rem', // 56px
        50: '12.5rem;', // 200px
      },
      minHeight: {
        13: '52px',
      },
      spacing: {
        0.5: '0.125rem', // 2px
        0.75: '0.1875rem', // 3px
        1.25: '0.3125rem', // 5px
        1.5: '0.375rem', //6px
        2.5: '0.625rem', // 10px
        3: '0.75rem', //12px
        3.5: '0.875rem', // 14px
        4.5: '1.125rem', // 18px
        5: '1.25rem', //20px
        5.5: '1.375rem', // 22px
        6: '1.5rem', // 24px
        6.25: '1.5625rem', // 25px
        6.5: '1.625rem', // 26px
        7: '1.75rem', //28px
        7.5: '1.875rem', // 30px
        8: '2rem', //32px
        8.5: '2.125rem', //34px,
        8.75: '2.1875rem', // 35px
        9.25: '2.3125rem', // 37px
        10: '2.5rem', //40px
        10.5: '2.625rem', // 42px
        11.5: '2.875rem', // 46px
        12.5: '3.125rem', // 50px
        13: '3.25rem', // 52px
        15: '3.75rem', // 60px
        15.5: '3.875rem', // 62px
        16.25: '4.0625rem', // 65px
        17.5: '4.375rem', // 70px
        18: '4.5rem', // 72px
        18.5: '4.625rem', // 74px
        21: '5.25rem', // 84px
        22: '5.5rem', // 88px
        22.5: '5.625rem', // 90px
        25: '6.25rem', // 100px
        32.5: '8.125rem', // 130px
        35: '8.75rem', // 140px
        50: '12.5rem', // 200px
        50.5: '12.625rem', // 202px
        82: '20.5rem', // 328px
        '2/5': '40%',
        '4/5': '80%',
        '9/10': '90%',
      },
      fontSize: {
        10: '0.625rem', // 10px
        11: '0.6875rem', // 11px
        xs: ['0.75rem', '1rem'], // 12px
        13: '0.8125rem', // 13px
        sm: ['0.875rem', '1.25rem'], // 14px
        15: '0.9375rem', // 15px
        base: ['1rem', '1.5rem'], // 16px
        17: '1.0625rem', // 17px
        lg: ['1.125rem', '1.75rem'], // 18px
        19: '1.1875rem', // 19px
        xl: ['1.25rem', '1.75rem'], // 20px
        21: '1.3125rem', // 21px
        22: '1.375rem', // 22px
        23: '1.4375rem', // 23px
        '2xl': ['1.5rem', '2rem'], // 24px
        25: '1.5625rem', // 25px
        26: '1.625rem', // 26px
        27: '1.6875rem', // 27px
        28: '1.75rem', // 28px
        29: '1.8125rem', // 29px
        '3xl': ['1.875rem', '2.25rem'], // 30px
        31: '1.9375rem', // 31px
        32: '2rem', // 32px
        33: '2.0625rem', // 33px
        34: '2.125rem', // 34px
        35: '2.1875rem', // 35px
        '4xl': ['2.25rem', '2.5rem'], // 36px
        37: '2.3125rem', // 37px
        38: '2.375rem', // 38px
        39: '2.4375rem', // 39px
        40: '2.5rem', // 40px
        41: '2.5625rem', // 41px
        42: '2.625rem', // 42px
      },
      lineHeight: {
        4.5: '1.125rem', // 18px
      },
      borderRadius: {
        '2lg': '0.625rem',
        '4xl': '1.875rem',
      },
      transitionProperty: {
        width: 'width',
        'grid-template-columns': 'grid-template-columns',
        height: 'height',
        'max-height': 'max-height',
      },
      gridTemplateRows: {
        layout: '44px auto',
      },
      gridTemplateColumns: {
        header: 'auto 200px',
        'max-4': 'repeat(4, minmax(auto, 25%))', // grid 요소가 row당 최대 4개
        'max-4-gap-1': 'repeat(4, minmax(auto, calc(25% - 1rem)))', // grid 요소가 row당 최대 4개이면서 간격이 1rem
        category: 'repeat(4, 130px)',
        'base-information': 'repeat(8, 130px)',
        'select-input': '130px 328px',
      },
      keyframes: {
        ripple: {
          from: { opacity: '1', transform: 'scale(0)' },
          to: { opacity: '0', transform: 'scale(5)' },
        },
        fadein: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        fadeout: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideIn_y: {
          from: {
            transform: 'translateY(15%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        slideOut_y: {
          from: {
            transform: 'translateY(0)',
          },
          to: {
            transform: 'translateY(15%)',
          },
        },
        slideIn_x: {
          from: {
            transform: 'translateX(100%)',
          },
          to: {
            transform: 'translateX(0%)',
          },
        },
        slideOut_x: {
          from: {
            transform: 'translateX(0%)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
        profile_menu_slideIn: {
          from: {
            transform: 'translateY(-20%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        profile_menu_slideOut: {
          from: {
            transform: 'translateY(0)',
            opacity: '1',
          },
          to: {
            transform: 'translateY(-20%)',
            opacity: '0',
          },
        },
      },
      animation: {
        ripple: 'ripple 1s',
        fadein: 'fadein 0.25s ease-out',
        fadeout: 'fadeout 0.35s ease-out',
        slideIn_y: 'slideIn_y 0.25s ease-out',
        slideOut_y: 'slideOut_y 0.35s ease-out',
        slideIn_x: 'slideIn_x 0.25s ease-out',
        slideOut_x: 'slideOut_x 0.35s ease-out',
        profileMenuSlideIn: 'profile_menu_slideIn 0.2s ease',
        profileMenuSlideOut: 'profile_menu_slideOut 0.2s ease',
        spinOnce: 'spin 0.4s linear',
      },
    },
  },
  plugins: [
    forms,
    typography,
    plugin(({ addComponents }) => {
      addComponents({
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.text-shorten': {
          display: 'block',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
        },
      });
    }),
  ],
};
export default config;
