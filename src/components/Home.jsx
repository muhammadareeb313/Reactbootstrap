import img1 from './images/1.gif'
import img2 from './images/2.gif'
import img3 from './images/3.gif'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic2.jpg'
import pic3 from './images/pic3.jpg'
import Navbar from './Navbar'
import './css/style.css'



const Home=()=>{
    return (
     <>
     <Navbar />
    <div className="container-fluid nav-bg">
    <div className='row'>
        <div className='mx-auto'>

        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
        </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src={img1} className="d-block w-100" style={{height:"400px"}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
           
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={img2} className="d-block w-100" style={{height:"400px"}} alt="..." />
            <div className="carousel-caption d-none d-md-block" >
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" style={{height:"400px"}} alt="..." />
            <div className="carousel-caption d-none d-md-block">
              
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
<div className="threecard d-flex justify-content-around  border-1 border-danger flex-wrap">
      <div className="card mt-2 text-danger" >
        <img src={pic1} className="card-img-top" alt="..." style={{width: '100%',height: '220px'}}/>
        <div className="card-body">
          <h5 className="card-title">Sun flower</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button  className="btn btn-danger">Go somewhere</button>
        </div>
      </div>
      <div className="card mt-2 text-danger" >
        <img src={pic2} className="card-img-top" alt="..." style={{width: '100%',height: '220px'}}/>
        <div className="card-body">
          <h5 className="card-title">Sun flower</h5>
          <p className="card-text">Some quick example text to build on the Sun flower and make up the bulk of the card's content.</p>
          <button  className="btn btn-danger">Go somewhere</button>
        </div>
      </div>
      <div className="card mt-2  text-danger">
        <img src={pic3} className="card-img-top" alt="..."  style={{width: '100%',height: '220px'}}/>
        <div className="card-body">
          <h5 className="card-title">Sun flower</h5>
          <p className="card-text">Some quick example text to build on the Sun flower and make up the bulk of the card's content.</p>
          <button className="btn btn-danger">Go somewhere</button>
        </div>
        </div>
        <div className="card mt-2 text-danger" >
        <img src={pic1} className="card-img-top" alt="..." style={{width: '100%',height: '220px'}}/>
        <div className="card-body">
          <h5 className="card-title">Sun flower</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button  className="btn btn-danger">Go somewhere</button>
        </div>
      </div>
      </div>

      
        </div>
    </div>
</div>
     </>
    );
  }
  
  export default Home;
  