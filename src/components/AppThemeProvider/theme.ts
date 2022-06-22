import type { Theme } from '@emotion/react';

export enum FontSize {
  Small = '14px',
  Regular = '16px',
  Large = '20px'
}

const lightTheme: Theme = {
  colors: {
    border: 'rgba(0, 0, 0, 0.18)',
    canvas: '#F8F8F8',
    danger: '#fa3c2e',
    disabled: 'rgba(0, 0, 0, 0.11)',
    invertedText: 'white',
    primary: '#2435a7',
    primarySubtle: '#5463ca',
    secondary: '#dadada',
    text: 'rgba(0, 0, 0, 0.80)',
    textSubtle: 'rgba(0, 0, 0, 0.54)'
  }
};

const darkTheme: Theme = {
  colors: {
    border: 'rgba(255, 255, 255, 0.11)',
    canvas: '#323232',
    danger: '#fa3c2e',
    disabled: 'rgba(255, 255, 255, 0.18)',
    invertedText: 'rgba(0, 0, 0, 0.66)',
    primary: '#2435a7',
    primarySubtle: '#5463ca',
    secondary: '#dadada',
    text: 'rgba(255, 255, 255, 0.87)',
    textSubtle: 'rgba(255, 255, 255, 0.54)'
  }
};

export enum ThemeVariant {
  Dark = 'dark',
  Light = 'light'
}

export const appTheme = {
  [ThemeVariant.Light]: lightTheme,
  [ThemeVariant.Dark]: darkTheme
};
