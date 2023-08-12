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

            <div className=''>
                <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a postagem a seguir?</p>

                <div className="max-w-sm p-6 bg-indigo-900 border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{postagem.titulo}</h5>
                    </a>
                    <p className="mb-1 font-normal text-white">{postagem.texto}</p>
                    <p className="mb-1 font-normal text-white">Tema: {postagem.tema?.descricao}</p>
                    <p className="mb-1 font-normal text-white"> Usuario: {postagem.usuario?.nome}</p>
                    <div className='btn-post mt-5'>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800" onClick={retornar}>
                            Retornar
                        </button>
                        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800" onClick={deletarPostagem}>
                            Deletar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* <a href="#" className="btn delete" onClick={deletarPostagem}><span></span><text>Deletar</text></a> */ }

export default DeletarPostagem