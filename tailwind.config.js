/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F3F4F6',
        secondary: '#0771BA',
        body_color: '#F8F8F8'
        


      },
      margin: {
        m_primary: '6px',
        m_8px: '8px',
        m_medium: '12px',
        m_large: '20px',
        m_secondary: '40px',
        m_24px: '24px',
        m_40px: '40px',

      },
      gap: {
        gap_6px: '6px',
        gap_8px: '8px',
        gap_primary: '12px'
      },
      fontSize: {
        text_small: '12px',
        text_standard: '14px',
        text_sm2: '15px',
        text_medium: '16px',
        text_title: '18px',
        text_large: '20px',
        text_xl: '24px',
        text_30px: '30px',
        text_xxl: '34px',
        text_40px: '40px',
        text_xxxl: '50px',

      },
      padding: {
        p_3px: '3px',
        p_4px: '4px',
        p_primary: '6px',
        p_8px: '8px',
        p_10px: '10px',
        p_12px: '12px',
        p_16px: '16px',
        p_primary2: '18px',
        p_secondary: '20px',
        p_24px: '24px',
        p_28px: '28px',
        p_30px: '30px',
        p_40px: '40px',
      },
      borderRadius: {
        rounded_4px: '4px',
        rounded_primary: '6px',
        rounded_secondary: '10px',
        rounded_medium: '12px',
      },
      height: {
        primary: '40px',
        h_secondary: '192px'

      },

    },
  },
  plugins: [],
}
