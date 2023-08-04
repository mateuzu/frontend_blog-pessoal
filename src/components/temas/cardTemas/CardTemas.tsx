import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'
import editarLogo from '../../../assets/editar-icon.png'
import excluirLogo from '../../../assets/deletar-icon.png'
import './CardTemas.css'

interface CardTemaProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemaProps) {
    return (
        <div className='border-slate-900 border flex flex-col  overflow-hidden justify-between'>
            <header className='py-2 px-6 text-white font-bold text-2xl bg-gradient-to-r from-indigo-900 to-indigo-700'>
                <div className='header'>
                    Tema
                    <div className='icons'>
                        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 py-2 flex items-center justify-center'>
                            <img src={editarLogo}  className='' alt="Editar" />
                        </Link>
                        
                        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 w-full flex items-center justify-center'>
                            <img src={excluirLogo}  className='ml-6 mr-3' alt="Deletar" />
                        </Link>
                    </div>
                </div>
            </header>
            <p className='p-8 text-3xl bg-white h-full'>{tema.descricao}</p>
            <div className="flex">
                
            </div>
        </div>
    )
}

export default CardTemas