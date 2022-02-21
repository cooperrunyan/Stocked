import React from 'react';
import { useState } from 'react';

const themes = {
  light: {
    layer: '#000000',
    layer1: '#00000003',
    layer2: '#00000005',
    layer4: '#0000000a',
    layer8: '#00000014',
    layer12: '#0000001f',
    layer20: '#00000033',
    layer30: '#0000004d',
    background: '#ffffff',
  },
  dark: {
    layer: '#ffffff',
    layer1: '#ffffff05',
    layer2: '#ffffff0a',
    layer4: '#ffffff14',
    layer8: '#ffffff1f',
    layer12: '#ffffff33',
    layer20: '#ffffff4d',
    layer30: '#ffffff4d',
    background: '#000000',
  },
};

const ThemeContext = React.createContext<any>(themes.light);

export const ThemeProvider = ({ children, theme }: any) => {
  const [currentTheme, setCurrentTheme] = useState(theme || themes);

  const setTheme = (to: 'dark' | 'light') => {
    setCurrentTheme(themes[to]);

    document.documentElement.style.setProperty('--layer', themes[to].layer);
    document.documentElement.style.setProperty('--layer1', themes[to].layer1);
    document.documentElement.style.setProperty('--layer2', themes[to].layer2);
    document.documentElement.style.setProperty('--layer4', themes[to].layer4);
    document.documentElement.style.setProperty('--layer8', themes[to].layer8);
    document.documentElement.style.setProperty('--layer12', themes[to].layer12);
    document.documentElement.style.setProperty('--layer20', themes[to].layer20);
    document.documentElement.style.setProperty('--layer30', themes[to].layer30);

    document.documentElement.style.setProperty('--background', themes[to].background);
  };

  return <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
