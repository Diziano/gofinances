import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secundary: string;
      box: string;
      background: string;
      text: string;
      textSecondary: string;
    }
  }
}
