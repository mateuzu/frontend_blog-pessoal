import {GithubLogo, LinkedinLogo} from '@phosphor-icons/react'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className="flex justify-center bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-600 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Blog pessoal Mateus Ferreira | Copyright: </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/mateus-ferreira-a55691234" target='__blank'><LinkedinLogo size={48} weight='bold'/> </a>
                        <a href="https://github.com/mateuzu" target='__blank'><GithubLogo size={48} weight='bold' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer