import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import editarLogo from '../../../assets/editar-icon.png'
import excluirLogo from '../../../assets/deletar-icon.png'
import './CardPostagem.css'

interface CardPostagemProps {
    post: Postagem
}



function CardPostagem({ post }: CardPostagemProps) {
    return (
        <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
            <div>
                <div className="flex w-full py-2 px-4 items-center gap-4 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
                    <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
                        <div className='header'>
                            <h3 className='text-lg font-bold text-center uppercase'>{post.usuario?.nome}</h3>
                            <div className='icons'>
                                <Link to={`/editarPostagem/${post.id}`} className='w-full text-white'>
                                    <img src={editarLogo}  className='ml-3' alt="Editar" />
                                </Link>
                                <Link to={`/deletarPostagem/${post.id}`} className='text-white'>
                                    <img src={excluirLogo}  className='ml-3' alt="Deletar" />
                                </Link>
                            </div>
                        </div>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{post.titulo}</h4>
                    <p>{post.texto}</p>
                    <p>Tema: {post.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat('pt-BR', {
                        timeZone: 'America/Sao_Paulo',
                        dateStyle: 'full',
                        timeStyle: 'long',
                    }).format(new Date(post.data))}</p>
                </div>
            </div>
            <div className="flex">
                
            </div>
        </div>
    )
}

export default CardPostagem