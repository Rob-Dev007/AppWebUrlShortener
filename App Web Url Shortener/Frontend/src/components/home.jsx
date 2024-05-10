import { Link } from "react-router-dom";
import { FaCut } from "react-icons/fa";

const Home = ()=>{
    return(
        <div>
            <div className="my-36">
                <h1 className="text-6xl text-center my-8">
                    Gestor de Enlaces
                </h1>
                <h2 className="text-2xl md:text-3xl text-center mx-12">
                    Esta App esta diseñada para acortar tus links y te ayudará a administrar tus enlaces
                </h2>
            </div>
            <div className="mx-4 md:mx-28 lg:mx-96">
                <input className="flex h-12 w-full bg-slate-200 outline-none p-4 rounded-md " />
                <div className="flex justify-end ">
                    <button className='flex items-center justify-center gap-3 my-2 bg-slate-700 p-3 text-white rounded-lg font-bold'>
                        Acorta el Url 
                        <FaCut />
                    </button>
                </div>
            </div>
            <div className="flex w-full justify-center items-center">
                <Link to="/dashboard" className="btn">Gestiona tus enlaces</Link>
                <Link to="https://github.com/Rob-Dev007/AppWebUrlShortener" 
                className="btn"
                target="_blank">Empieza en github</Link>
            </div>

        </div>
    )

};

export default Home;