import { Link } from "react-router-dom";


const Dashboard =()=>{

    return (
        <div className="h-[87vh]" id='dashboard'>
        <nav className="flex justify-center">
            <ul className="flex py-3 gap-8">
                <li>
                    <Link to='/dashboard'>Enlaces</Link>
                </li>
                <li>
                    <Link to="/dashboard/configuracion" >Configuración</Link>
                </li>
            </ul>
        </nav>
        
        </div>
            
        
    )
    
};

export default Dashboard;