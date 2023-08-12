import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Tema from '../../../models/Tema'
import { buscar, deletar } from '../../../services/Service'
import './DeletarTema.css'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarTema() {
    const [tema, setTema] = useState<Tema>({} as Tema)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/temas/${id}`, setTema, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'erro')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            toastAlerta('Você precisa estar logado', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/temas")
    }

    async function deletarTema() {
        let btn = document.querySelector('.btn');
        btn?.classList.toggle('active');
        
        try {
            await deletar(`/temas/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Tema apagado com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar o Tema', 'erro')
        }

        retornar()
    }
    return (
        <div className='flex justify-center mt-5'>
            <div className="ml-3 block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-indigo-900 dark:border-gray-700 dark:hover:bg-indigo-800">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tema.descricao}</h5>
                <div className='flex justify-evenly mt-5'>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" onClick={retornar}>
                    Retornar
                </button>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800" onClick={deletarTema}>
                    Deletar
                </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarTema