import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main.js';
import { Link } from 'react-router-dom';
import Particles from "./components/Particles";

class App extends Component {
  render() {
    return (
 
      <div className="App">
  
    
        <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'white'}} to="/">Portfolio</Link>} scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/projects">Project</Link>
                      <Link to="/contact">Contact</Link>
                      
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color:'black'}} to="/">Portfolio</Link>}>
                  <Navigation>
                  <Link to="/resume">Resume</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;