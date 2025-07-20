import { Outlet } from "react-router";
import Layout from "./Layout";

function index() {
  return (
    <Layout>
        <Outlet/>
    </Layout>
  )
}

export default index;