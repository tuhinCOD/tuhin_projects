import Tuhin from "../../assets/images/tuhin.jpg";

function Header() {
  return (
    <>
    <header className="d-flex">
        <button data-toggle="on-canvas" className="btn btn-light rounded-0 my-auto py-2 h-100 ms-1">
            <i className="bi bi-list"></i>
        </button>
        <div className="logo py-3 px-4">
            <h4>Dashboard</h4>
        </div>
        <div className="header-icon py-3 ms-auto pe-2 d-flex">
            <i className="bi bi-bell"></i>
        </div>
        <div className="header-id d-flex py-3 pe-4 dropdown">
            <a href="#" className="nav-link dropdown-toggle rounded-pill bg-secondary d-flex text-decoration-none text-light dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={Tuhin} className="p-2 d-block" alt=""/>
                <div className="detail p-2">
                    <p><b>Tuhin</b></p>
                    <p className="m-0">Developer</p>
                </div>
                <i className="bi bi-chevron-down p-2"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end me-2 py-0 fz-1" aria-labelledby="navbarDropdown">
                <a className="dropdown-item d-flex align-items-center ps-0 py-1" href="#">
                    <div className="menu-icon d-flex justify-content-center w-25">
                    <i className="bi bi-person"></i>
                    </div>
                    <div className="ps-2">Profile</div>
                </a>
                <a className="dropdown-item d-flex align-items-center ps-0 py-1" href="#">
                    <div className="menu-icon d-flex justify-content-center w-25">
                    <i className="bi bi-pencil-square"></i>
                    </div>
                    <div className="ps-2">Edit profile</div>
                </a>
                <div className="dropdown-divider my-0"></div>
                <a className="dropdown-item d-flex align-items-center ps-0 py-1" href="#">
                    <div className="menu-icon d-flex justify-content-center w-25">
                    <i className="bi bi-power"></i>
                    </div>
                    <div className="ps-2">Logout</div>
                </a>
                </div>
        </div>
    </header>
    </>
  )
}

export default Header