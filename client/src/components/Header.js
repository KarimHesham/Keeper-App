import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HighlightIcon from "../../node_modules/@material-ui/icons/Highlight";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useHistory } from "react-router-dom";
import axios from "axios";



function Header() {
  const history = useHistory();


  function logout() {
    axios.get("https://thisiskeeper.herokuapp.com/logout")
      .then(res => {
          history.push("/")
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
      <BrowserRouter>
      
        <header>
        <div>
          <Link href="https://thisiskeeper.herokuapp.com" style={{textDecoration: "none"}}>
              <h1>
                <HighlightIcon className="keeperIcon"/>
                Keeper
              </h1>
            </Link>
            
            <Link href="https://thisiskeeper.herokuapp.com">
            <ExitToAppIcon onClick={logout} className="logout"/>  
          </Link>  
        </div>
          
            
        </header>
     
     </BrowserRouter>
    
  );
}

export default Header;