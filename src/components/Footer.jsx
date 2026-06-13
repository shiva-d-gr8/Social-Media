import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const Footer = () => {
  return(
<div className="container"> <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> <div className="col-md-4 d-flex align-items-center"> <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap"> 
            <FaBootstrap size={28} color="black" />
          </a> 
  <span className="mb-3 mb-md-0 text-body-secondary">© 2025 Company, Inc</span> 
  </div> 
  <ul className="nav col-md-4 justify-content-end list-unstyled d-flex"> 
    <li className="ms-3">
    <a className="text-body-secondary" href="#" aria-label="Instagram">
    <FaInstagram size={20} /></a></li> <li className="ms-3">
      <a className="text-body-secondary" href="#" aria-label="Facebook">
      <FaFacebook size={20} /></a></li> </ul> </footer> </div>
  )
}
export default Footer;