import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Postagem from '../../../models/Postagem'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../util/toastAlerta'

function DeletarPostagem() {
    const [postagem, setPostagem] = useState<Postagem>({} as Postagem)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/postagens/${id}`, setPostagem, {
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
            toastAlerta('O token expirou, favor logar novamente', 'info')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/postagens")
    }

    async function deletarPostagem() {
        let btn = document.querySelector('.btn');
        btn?.classList.toggle('active');
        
        try {
            await deletar(`/postagens/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Postagem apagada com sucesso', 'sucesso');

        } catch (error) {
            toastAlerta('Erro ao apagar a Postagem', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar postagem</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a postagem a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Postagem</header>
                <div className="p-4">
                    <p className='text-xl h-full'>{postagem.titulo}</p>
                    <p>{postagem.texto}</p>
                </div>
                <div className="btns bg-white">
                    <button className='back bg-gradient-to-r from-blue-900 to-blue-700 text-white' onClick={retornar}>Voltar</button>
                    <a href="#" className="btn delete" onClick={deletarPostagem}><span></span><text>Deletar</text></a>
                </div>
            </div>
        </div>
    )
}

export default DeletarPostagem