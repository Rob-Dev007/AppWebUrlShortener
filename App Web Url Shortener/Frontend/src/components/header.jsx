
import { FaGithub, FaLink, FaSun, FaMoon, FaDesktop, FaSearch } from 'react-icons/fa';
import DropItems from './dropItem';
import DropDownBtn from './dropDownBtn';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = ()=>{
    const [ open, setOpen ] = useState(false);

    const toggleDropDown = ()=>{
        setOpen( (open) => !open )
    };


    return(
        <>
            <nav className='bg-slate-500 h-8 w-full flex justify-between items-center p-8 text-white'>
            <div className='flex items-center gap-3'>
                <Link to='/'><p>Small-link</p></Link>
                < FaLink />
            </div>
            <div className='flex justify-between gap-5 items-center'>
                <h3>Sign In</h3>
                <FaGithub />
                <FaSearch />
                <h3 className='flex items-center gap-1'>Theme 
                <span> 
                    <DropDownBtn 
                    className={`${open ? 'menu-dropdown.active' : 'menu-dropdown.inactive' }`} 
                    open={ open } 
                    toggle={ toggleDropDown } />
                </span>
                </h3>
                <div open={ open } className={`menu-dropdown ${open ? 'active' : 'inactive'}`}>
                    <ul>
                            <DropItems logo={ <FaSun /> } text={ "Light" } />
                            <hr/>
                            <DropItems logo={ <FaMoon /> } text={ "Dark" } />
                            <hr/>
                            <DropItems logo={ <FaDesktop /> } text={ "System" } />
                    </ul> 
                </div>
            </div>
            </nav>
        </>
    )

};

export default Header;