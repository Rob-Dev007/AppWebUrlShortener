import { useState } from 'react';


const DropItems = (props)=>{

    const [ menuDrop, setMenuDrop ] = useState(false);

    

    return(
        <>
            <li className="dropdown-list">
                <a>{ props.logo }</a>
                <a>{ props.text }</a>
            </li>
        </>
    )
};

export default DropItems;