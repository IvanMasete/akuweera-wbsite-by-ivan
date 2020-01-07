import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';







function Menu() {
  return (
    <div className="Menu">
      <menu>
  
  <nav>

        <ul>
          <li>MENU</li>
        <li>
           <p> <Link to ="HOME">HOME</Link></p>
          </li>  
          
        <li>
        <Link to="INFORMATION">INFORMATION</Link>
          </li>  
          <li>
           <p> <Link to ="CONTACT">CONTACT</Link></p>
          </li>  
          <li>
            <p><Link to="GALLERY">GALLERY</Link></p>
          </li>
          
          

  
          
          
        </ul>
      </nav>
    
  </menu>
    </div>
  );
}

export default Menu;