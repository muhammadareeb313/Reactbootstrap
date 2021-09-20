import { useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import './css/style.css'


const Navbar=()=>{
  let history=useHistory();
    return(
<>

<div className="container-fluid ">
    <div className='row'>
        <div className='mx-auto'>


<nav className="navbar navbar-expand-lg navbar-light bg-dark rounded-top border-bottom border-4 border-danger">
  <div className="container-fluid">
    <h1 className="navbar-brand" >Areeb</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
        <li className="nav-item">
        <Nav.Link className="nav-link" onClick={()=>{history.push("/")}}>Home</Nav.Link>

        </li>
        <li className="nav-item">
        <Nav.Link className="nav-link" onClick={()=>{history.push("/weather")}}>Weather</Nav.Link>

        </li>
        <li className="nav-item">
          <Nav.Link className="nav-link" onClick={()=>{history.push("/counter")}}>Counter</Nav.Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>



      </div>
</div>
</div>
</>
    )
};

export default Navbar;