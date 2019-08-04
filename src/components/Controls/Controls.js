import React, {Component} from 'react';
import style from './Controls.module.css';

class Controls extends Component{



  render(){
		let classes = `${style.container} ${style.flex}`
		let flexWithIcon = `${style.icon} ${style.iconFlex}`

    return (
			<div className={classes}>
				<div className = {flexWithIcon}>
					left arrow
				</div>
				<div className = {flexWithIcon}>
					filter
				</div>
				<div className = {flexWithIcon}>
					right arrow
				</div>
			</div>
    );
  }
}

export default Controls;
