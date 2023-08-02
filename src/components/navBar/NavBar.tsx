import { Link, useNavigate} from 'react-router-dom'
import './NavBar.css'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'

function Navbar() {
    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert('Usuário deslogado com sucesso')
        navigate('/login')
    }

    let navbarComponent
    
    return (
        <>
            <div className='w-full bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='custom-link'><div className='text-2xl font-bold uppercase mx-4'>Blog Pessoal</div></Link>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='custom-link'><div>Postagens</div></Link>
                        <Link to='/temas' className='custom-link'><div>Temas</div></Link>
                        <Link to='cadastroTema' className='custom-link'><div className='whitespace-nowrap'>Cadastrar tema</div></Link>
                        <div className='ancoras'>Perfil</div>
                        <Link to='' onClick={logout} className='custom-link'><div className='mr-4'>Sair</div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar