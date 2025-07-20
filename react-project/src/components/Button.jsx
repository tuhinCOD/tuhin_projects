function Button({...props}) {
  return (
    <>
        <button 
        className={`btn ${props.color ? 'btn-' + props.color : 'btn-primary'} ${props.weight ? 'btn-' + props.weight : ''} ${props.btnclass}`}
        {...props}>
            {props.label && <span className={props.icon ? 'pe-2' : ''}>{props.label}</span>}
            {props.icon ? <span><i className={props.icon}></i></span> : ''}
        </button>
    </>
  )
}

export default Button;