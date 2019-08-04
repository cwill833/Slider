import React, {Component} from 'react';
import Controls from '../../components/Controls/Controls'
import NavBar from '../../components/NavBar/NavBar'
import style from './LandingPage.module.css'

class LandingPage extends Component{

  render(){

    let otherClass = `${style.flex} ${style.full}`
    return (
      <div>
        <div className = {style.blueish}>
          <NavBar />
          <div className = {otherClass}>
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
