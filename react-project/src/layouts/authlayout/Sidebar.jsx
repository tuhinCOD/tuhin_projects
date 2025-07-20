import React from 'react'

function Sidebar() {
  return (
    <>
    <div className="sidebar">
        <div className="topbar text-light" style={{boxShadow: "0px 0px 2px #fff"}}>
            <div className="logo-lg p-2 pt-3">
                <i className="bi bi-ui-radios-grid px-2"></i>
                <b className="fs-5">Fashion Design</b>
            </div>
            <div className="logo-sm pt-3">
                <b className="fs-5 ps-2">FD</b>
            </div>
        </div>
        <div className="add-new bg-light my-4">
            <a href="#" className=" d-flex text-decoration-none py-2">
                <div className="sidebar-icon">
                    <i className="bi bi-plus-circle my-auto text-dark"></i>
                </div>
                <div className="sidetoggle">
                    <span className="ps-2 text-dark">Create new project</span>
                </div>
            </a>
        </div>
        <div className="sidebar-list accordion" id="accordion">
            <ul className="list-unstyled" id="accordion">
                <li className="active mb-1">
                    <a href="#" className="nav-link text-decoration-none text-light d-flex align-items-center">
                        <div className="sidebar-icon">
                            <i className="bi bi-grid"></i>
                        </div>
                        <div className="sidetoggle">
                            <span className="ps-2">Dashboard</span>
                        </div>
                    </a>
                </li>
                <li className="mb-1">
                    <a href="#" className="nav-link text-decoration-none text-light d-flex align-items-center collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" data-show="onoff">
                        <div className="sidebar-icon">
                            <i className="bi bi-briefcase"></i>
                        </div>
                        <div className="sidetoggle">
                            <span className="ps-2">Project</span>
                        </div>
                    </a>
                    <ul className="list-group accordion-collapse collapse pt-2" id="collapseOne"  data-bs-parent="#accordion">
                        <li className="list-group-item border-none" style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 1</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none">
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 2</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none text-light" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}>
                            <a href="#" className=" d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 3</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="mb-1" >
                    <a href="#" className="text-decoration-none text-light d-flex align-items-center collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-show="onoff">
                        <div className="sidebar-icon">
                            <i className="bi bi-list-check"></i>
                        </div>
                        <div className="sidetoggle">
                            <span className="ps-2">Tasks</span>
                        </div>
                    </a>
                    <ul className="list-group accordion-collapse collapse pt-2" id="collapseTwo"  data-bs-parent="#sidebarAccordion">
                        <li className="list-group-item border-none" style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 1</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none">
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 2</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none text-light" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}>
                            <a href="#" className=" d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 3</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="mb-1">
                    <a href="#" className="text-decoration-none text-light d-flex align-items-center collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" data-show="onoff">
                        <div className="sidebar-icon">
                            <i className="bi bi-clock"></i>
                        </div>
                        <div className="sidetoggle">
                            <span className="ps-2">Time log</span>
                        </div>
                    </a>
                    <ul className="list-group accordion-collapse collapse pt-2" id="collapseThree"  data-bs-parent="#sidebarAccordion">
                        <li className="list-group-item border-none" style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 1</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none text-light" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}>
                            <a href="#" className=" d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 2</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="mb-1">
                    <a href="#" className="text-decoration-none text-light d-flex align-items-center collapsed"  role="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" data-show="onoff">
                        <div className="sidebar-icon">
                            <i className="bi bi-diagram-3"></i>
                        </div>
                        <div className="sidetoggle">
                            <span className="ps-2">Resource mgnt</span>
                        </div>
                    </a>
                    <ul className="list-group accordion-collapse collapse pt-2" id="collapseFour"  data-bs-parent="#sidebarAccordion">
                        <li className="list-group-item border-none" style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 1</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none">
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 2</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none text-light" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}>
                            <a href="#" className=" d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 3</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="mb-1">
                    <a href="#" className="text-decoration-none text-light d-flex align-items-center collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" data-show="onoff">
                        <div className="sidebar-icon">
                            <i className="bi bi-people"></i>
                        </div>
                        <div className="sidetoggle">
                            <span className="ps-2">Users</span>
                        </div>
                    </a>
                    <ul className="list-group accordion-collapse collapse pt-2" id="collapseFive"  data-bs-parent="#sidebarAccordion">
                        <li className="list-group-item border-none" style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 1</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none">
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 2</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none text-light" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}>
                            <a href="#" className=" d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 3</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="mb-1">
                    <a href="#" className="text-decoration-none text-light d-flex align-items-center collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" data-show="onoff">
                        <div className="sidebar-icon">
                            <i className="bi bi-layers"></i>
                        </div>
                        <div className="sidetoggle">
                            <span className="ps-2">Project Tamplate</span>
                        </div>
                    </a>
                    <ul className="list-group accordion-collapse collapse pt-2" id="collapseSix"  data-bs-parent="#sidebarAccordion">
                        <li className="list-group-item border-none" style={{borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 1</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none">
                            <a href="#" className="d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 2</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                        <li className="list-group-item border-none text-light" style={{borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px"}}>
                            <a href="#" className=" d-flex text-decoration-none">
                                <span className="me-auto ms-3">Sub menu 3</span>
                                <span><i className="bi bi-dot"></i></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li className="mb-1">
                    <a href="#" className="text-decoration-none text-light d-flex align-items-center">
                        <div className="sidebar-icon">
                            <i className="bi bi-gear-wide"></i>
                        </div>
                        <div className="sidetoggle">
                            <span className="ps-2">Menu Setting</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar