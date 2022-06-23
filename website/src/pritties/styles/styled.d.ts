import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    background: {
      palette_background_def: string;
      palette_background_alt: string;
    },

    divider: {
      palette_divider: string;
    },

    typografia: {
      palette_text_def: string;
      palette_text_alt: string;
    },

    button: {
      palette_background_btn_def: string;
      palette_background_btn_alt: string;
    },

    icone: {
      sun_icon: string;
      moon_icon: string;
    }
  }
}
