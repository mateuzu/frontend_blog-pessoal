import {Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>

                    <div className='flex gap-4'>
                        <div className='hover:underline'><Link to='/login'>Login</Link></div>
                        <div className='hover:underline'><Link to='/home'>Home</Link></div>
                        <div className='hover:underline'>Postagens</div>
                        <div className='hover:underline'>Temas</div>
                        <div className='hover:underline'>Cadastrar tema</div>
                        <div className='hover:underline'>Perfil</div>
                        <div className='hover:underline'>Sair</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar