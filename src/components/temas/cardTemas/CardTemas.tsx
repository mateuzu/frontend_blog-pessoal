import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'
import editarLogo from '../../../assets/editar.png'
import excluirLogo from '../../../assets/excluir.png'

interface CardTemaProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 text-white font-bold text-2xl bg-gradient-to-r from-indigo-900 to-indigo-700'>Tema</header>
            <p className='p-8 text-3xl bg-gradient-to-r from-gray-200 to-gray-100 h-full'>{tema.descricao}</p>
            <div className="flex">
                <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 py-2 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700'>
                <button>Editar</button> <img src={editarLogo}  className='ml-3' alt="" />
                </Link>
                <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 w-full flex items-center justify-center bg-gradient-to-r from-red-900 to-red-700'>
                    <button>Deletar</button> <img src={excluirLogo}  className='ml-3' alt="" />
                </Link>
            </div>
        </div>
    )
}

export default CardTemas