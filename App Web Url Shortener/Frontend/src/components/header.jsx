
import { FaGithub, FaLink, FaSun, FaMoon, FaDesktop} from 'react-icons/fa';
import DropItems from './dropItem';


const Header = ()=>{
    return(
        <>
        <div className='bg-slate-500 h-8 w-full flex justify-between items-center p-8 text-white'>
            <div className='flex items-center gap-3'>
                <p>Small-link</p>
                < FaLink />
            </div>
            <div className='flex justify-between gap-8 items-center'>
                <h3>Sign In</h3>
                <div className='flex justify-between gap-3'>
                    <FaGithub />
                </div>
                <h3>Theme</h3>
                <div className='menu-dropdown'>
                    <ul>
                        <DropItems logo={ <FaSun /> } text={ "Light" } />
                        <DropItems logo={ <FaMoon /> } text={ "Dark" } />
                        <DropItems logo={ <FaDesktop /> } text={ "System" } />
                    </ul> 
                </div>
            </div>
        </div>
        </>
    )

};

export default Header;