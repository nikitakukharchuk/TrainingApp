import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      border: string;
      canvas: string;
      danger: string;
      disabled: string;
      invertedText: string;
      primary: string;
      primarySubtle: string;
      secondary: string;
      text: string;
      textSubtle: string;
    };
  }
}
