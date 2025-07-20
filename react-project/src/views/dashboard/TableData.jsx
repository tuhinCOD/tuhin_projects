import Button from "../../components/Button";
import Table from "../../components/Table";

function TableData({existingData, onModify, onDelete}) {
  return (
    <>
        <Table existingData={existingData} 
                tHead={<><th>#</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>
                        </>}
                tBody={(dt) => (
                  <>
                    <td>{dt.id}</td>
                    <td>{dt.email}</td>
                    <td>{dt.mobile}</td>
                    <td className="text-center">
                        <div className="btn-group btn-group-sm" role="group" aria-label="Basic mixed styles example">
                            <Button 
                            type="button" 
                            color="warning"
                            icon="bi bi-pencil-square"
                            onClick={() => onModify(dt.id)}
                            />
                            <Button 
                            type="button" 
                            color="danger"
                            icon="bi bi-trash"
                            onClick={() => onDelete(dt.id)}/>
                        </div>
                    </td>
                </>
                )}>     
        </Table>
    </>
  )
}

export default TableData