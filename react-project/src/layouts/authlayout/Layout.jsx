import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Children } from "react";

function index({children}) {
  import("../../assets/custom/castom.js");
  return (
    <>
    <div className="wrapper">
        <Sidebar/>

        <div className="mainbody">
            <Header/>

            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    </div>
    </>
  )
}

export default index;