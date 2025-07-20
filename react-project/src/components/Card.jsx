function Card({children, cardHeader, cardBody, cardFooter}) {
  return (
    <>
        <div className={`card ${children ? 'card-body' : ''}`}>
            {children && <>{children}</>}
            {cardHeader && (
                <div className="card-header">
                    {cardHeader}
                </div>
            )}
            {cardBody && (
                <div className="card-body">
                    {cardBody}
                </div>
            )}
            {cardFooter && (
                <div className="card-footer">
                    {cardFooter}
                </div>
            )}
        </div>
    </>
  )
}

export default Card