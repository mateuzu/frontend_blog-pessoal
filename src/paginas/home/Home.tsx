import { Link } from 'react-router-dom';
import homeLogo from '../../assets/universe.svg'
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';

function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
                        <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                            <Link to='/postagens' className='custom-link'><button className='border rounded py-2 px-4 text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Ver postagens</button></Link>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-2/3 universe' />
                    </div>
                </div>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;