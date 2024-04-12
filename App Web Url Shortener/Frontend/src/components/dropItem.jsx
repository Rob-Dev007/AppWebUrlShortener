
const DropItems = (props)=>{

    return(
        <>
            <li className="dropdown-list">
                <a className='dropdown-a'>{ props.logo }</a>
                <a >{ props.text }</a>
            </li>
        </>
    )
};

export default DropItems;