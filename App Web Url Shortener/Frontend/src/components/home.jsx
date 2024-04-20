import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <div className='h-[74vh]'>
            <div>
                <h1 className="text-6xl text-center my-28">
                    Gestor de Enlaces
                </h1>
                <h2 className="text-3xl text-center">
                    Esta App esta diseñada para acortar tus links y te ayudará a administrar tus enlaces
                </h2>
            </div>
            <div className="flex w-full justify-center items-center">
                <Link to="/dashboard" className="btn">Acorta el enlace</Link>
                <Link to="https://github.com/Rob-Dev007/AppWebUrlShortener" 
                className="btn"
                target="_blank">Empieza en github</Link>
            </div>

        </div>
    )

};

export default Home;