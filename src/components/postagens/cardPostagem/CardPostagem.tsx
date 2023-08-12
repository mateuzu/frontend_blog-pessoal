import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import './CardPostagem.css'

interface CardPostagemProps {
    post: Postagem
}



function CardPostagem({ post }: CardPostagemProps) {
    return (
        <>
            <div className="max-w-sm bg-indigo-900 border border-gray-200 rounded-lg shadow p-5">
            
                    <img className="rounded-t-lg" src={post.usuario?.foto} alt={`Foto de perfil de ${post.usuario?.nome}`} />

                <div className="p-5">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.titulo}</h5>
                    <p className="mb-3 font-normal text-white ">{post.tema?.descricao}</p>
                    <p className="mb-3 font-normal text-white ">{post.texto}</p>
                    <p className="mb-3 font-normal text-white ">Data: {new Intl.DateTimeFormat('pt-BR', {
                        timeZone: 'America/Sao_Paulo',
                        dateStyle: 'full',
                        timeStyle: 'long',
                    }).format(new Date(post.data))}</p>
                    <div className='btn-post'>
                        <Link to={`/editarPostagem/${post.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                            Editar
                        </Link>
                        <Link to={`/deletarPostagem/${post.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800">
                            Deletar
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardPostagem

{/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Data: {new Intl.DateTimeFormat('pt-BR', {
                        timeZone: 'America/Sao_Paulo',
                        dateStyle: 'full',
                        timeStyle: 'long',
                    }).format(new Date(post.data))}</p> */}