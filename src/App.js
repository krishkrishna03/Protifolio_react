import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import Home from './Home';
import Visualization from './Visualization';
import Navbar from './Navbar';

const { Header, Content, Footer } = Layout;

function App() {
  const [jsonData, setJsonData] = useState(null);

  return (
    <Router>
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Visualization</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
            <Routes>
              <Route path="/" element={<Home setJsonData={setJsonData} />} />
              <Route path="/visualization" element={<Visualization jsonData={jsonData} />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Data Visualization ©2024 Created by Your Name</Footer>
      </Layout>
    </Router>
  );
}

export default App;
