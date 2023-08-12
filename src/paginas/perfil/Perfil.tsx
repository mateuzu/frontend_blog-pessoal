import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import './Perfil.css'
import { toastAlerta } from '../../util/toastAlerta'

function Perfil() {
    let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    useEffect(() => {
        if (usuario.token === "") {
            toastAlerta('Você precisa estar logado', 'erro')
            navigate("/login")
        }
    }, [usuario.token])

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'sucesso');
        navigate('/login')
    }

    return (
        <div className='perfil-container'>
                <div className="shadow dark:bg-gray-800 perfil-card">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={usuario.foto} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{usuario.nome}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{usuario.usuario}</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <Link to='/postagens' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver Postagens</Link>
                            <Link to='' onClick={logout} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Deslogar</Link>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Perfil