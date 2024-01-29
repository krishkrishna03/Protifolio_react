// App.js

import React from "react";
import './App.css';
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { AchievementsAndEventsSection } from "./components/Events";

import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <AchievementsAndEventsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
