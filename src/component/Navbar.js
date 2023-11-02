import React from 'react'

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white z-index-3 py-3">
      <div className="container">
        <a className="navbar-brand" href="" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" target="_blank">
          Soft UI Dashboard
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <div className="row">
              <div className="col-auto m-auto">
                <a className="cursor-pointer">
                  <i className="fa fa-cog fixed-plugin-button-nav"></i>
                </a>
              </div>
              <div className="col-auto m-auto">
                <div className="dropdown">
                  <a className="cursor-pointer" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-bell"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right px-2 py-3 ms-n4" aria-labelledby="dropdownMenuButton">
                    ...
                  </ul>
                </div>
              </div>
              <div className="col-auto">
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar