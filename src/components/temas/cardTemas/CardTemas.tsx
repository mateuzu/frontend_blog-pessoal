import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'
import './CardTemas.css'

interface CardTemaProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemaProps) {
    return (
        <div className="ml-3 block max-w-sm p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-indigo-900 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tema.descricao}</h5>
            <div className='flex justify-evenly mt-5'>
            <Link to={`/editarTema/${tema.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
                Editar
            </Link>
            <Link to={`/deletarTema/${tema.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800">
                Deletar
            </Link>
            </div>
        </div>
    )
}

export default CardTemas