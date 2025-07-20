import { useEffect, useState } from "react";
import Form from "./Form";
import Card from "../../components/Card";
import TableData from "./TableData";

function index() {
    const [existingData, setExistingData] = useState([]);
    const [edit, setEdit] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("dashdatas")) || [];
        setExistingData(data);
    },[]);

    const updateData = () => {
        const updated = JSON.parse(localStorage.getItem("dashdatas")) || [];
        setExistingData(updated);
    };

    const handleDelete = (id) => {
        const localdata = JSON.parse(localStorage.getItem("dashdatas")) || [];
        const updatedData = localdata.filter((item) => item.id !== id);
        localStorage.setItem("dashdatas", JSON.stringify(updatedData));
        setExistingData(updatedData);
    };

    const handleModify = (id) => {
        const localdata = JSON.parse(localStorage.getItem("dashdatas")) || [];
        localdata.forEach((item) => {
            if (item.id == id) {
                setEdit(item);
            }
        })
    };
    
  return (
    <>
        <div className="container">
            <div className="row my-3">
                <div className="col-8 offset-2">
                    <Card>
                        <Form 
                        existingData={existingData}
                        updateData={updateData}
                        editData={edit}/>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <TableData 
                    existingData={existingData}
                    onModify={handleModify}
                    onDelete={handleDelete}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default index