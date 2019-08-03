import React, {Component} from 'react';
import style from './LandingPage.module.css';

class LandingPage extends Component{



  render(){
    return (
      <div>
        <header>
          <h1>SLIDER</h1>
        </header>
        <div className = {style.flex}>
					<div className = {style.photo}>

					</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
