import { Link} from 'react-router-dom'
import './NavBar.css'

function Navbar() {
    return (
        <>
            <div className='w-full bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase mx-4 ancoras'>Blog Pessoal</div>

                    <div className='flex gap-4'>
                        <Link to='/login' className='ancoras'>Login</Link>
                        <Link to='/home' className='ancoras'>Home</Link>
                        <div className='ancoras'>Postagens</div>
                        <div className='ancoras'>Temas</div>
                        <div className='ancoras'>Cadastrar tema</div>
                        <div className='ancoras'>Perfil</div>
                        <div className='ancoras mr-4'>Sair</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar