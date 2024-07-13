import React, { createContext, useContext } from 'react';
import { Layout } from 'antd';
import MyNavbar from './components/Navbar'; // Import the Navbar component
import { Banner } from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import { Projects}from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Import the CSS file for styling

const { Header, Content, Footer } = Layout;

// Create a Context for the theme
const ThemeContext = createContext();

const App = () => {
  const theme = 'light-mode'; // Static theme

  return (
    <ThemeContext.Provider value={{ theme }}>
      <Layout>
        <Header>
          <MyNavbar />  {/* Add the Navbar component here */}
        </Header>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 'calc(100vh - 112px)', // Adjust content height to leave room for Header and Footer
          }}
        >
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by You
        </Footer>
      </Layout>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default App;
