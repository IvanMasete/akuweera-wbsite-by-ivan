import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';


function Header() {
  return (
    <header>

    <h1></h1>
    <div className="logo">
      <ul>
        <li>
      <h>Kampala</h> 
      <img src="images/Fb14.jpg"/>
            

      </li>
      </ul>
      
      </div>
      <nav>
        <ul>
          <li>
            <p><Link to = "MENU">MENU</Link></p>
          </li>
             </ul>
      </nav>
    </header>
  );
}

export default Header;
