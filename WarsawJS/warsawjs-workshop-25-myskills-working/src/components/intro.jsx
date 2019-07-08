import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class IntroComponent extends Component{

  render(){
    return(
    <div>
      <h2>Hello World!</h2>
      <Link to="user/michal">Moj profil</Link>
    </div>
    )
  }

}
