function Table({children, tHead, tBody, tFoot, existingData}) {
  return (
    <>
        <table className="table table-bordered table-striped text-center">
            {children}
            {tHead && (
                <thead>
                    <tr>
                        {tHead}
                    </tr>
                </thead>
            )}
            {tBody && (
                <tbody id="list">
                {existingData.map((dt, i) => (
                    <tr key={i}>
                        {tBody(dt)}
                    </tr>
                ))}
            </tbody>
            )}
            {tFoot && (
                <tfoot>
                    <tr>
                        {tFoot}
                    </tr>
                </tfoot>
            )}
        </table>
    </>
  )
}

export default Table