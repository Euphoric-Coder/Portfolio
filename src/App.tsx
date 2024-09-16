import "@mantine/core/styles.css";
import HomePage from './components/HomePage';
import { MantineProvider, createTheme } from '@mantine/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


function App() {
  useEffect(()=>{
    AOS.init();
    AOS.refresh();
  }, []);

  const theme = createTheme({
    breakpoints: {
      'xs': '320px',
      'sm': '476px',
      'md': '640px',
      'bs': '768px',
      'lg': '900px',
      'xl': '1024',
      '2xl': '1280',
    },
  });
  return (
    <MantineProvider theme={theme} >
    <HomePage/>
    </MantineProvider>
  );
}

export default App;
