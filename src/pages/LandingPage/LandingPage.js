import React, {Component} from 'react';
import Controls from '../../components/Controls/Controls'
import style from './LandingPage.module.css';

class LandingPage extends Component{



  render(){
    return (
      <div>
        <div className = {style.blueish}>
          <header>
            <h1>SLIDER</h1>
          </header>
            <div className = {style.flex}>
              <div className = {style.photo}>
              </div>
            </div>
          </div>
          <Controls />
      </div>
    );
  }
}

export default LandingPage;
