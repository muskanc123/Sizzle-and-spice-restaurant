import React from 'react'

 function TopBar() {
  return (

    <div id="topbar" className="d-flex align-items-center fixed-top">
  <div className="container d-flex justify-content-center justify-content-md-between">
    <div className="contact-info d-flex align-items-center">
      <i className="bi bi-phone d-flex align-items-center"><span>+92 5589 55488 55</span></i>
      <i className="bi bi-clock d-flex align-items-center ms-4"><span> Mon-Sat: 11AM - 12AM</span></i>
    </div>
  </div>
</div>

  )
}
export default TopBar;
