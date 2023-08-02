import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={<button className='border rounded px-4 hover:bg-white hover:text-indigo-800'>Nova postagem</button>} modal>
                <div>
                    <FormularioPostagem />
                </div>
            </Popup>
        </>
    );
}

export default ModalPostagem;

/*
Em aplicações web, a palavra "modal" é frequentemente usada para descrever um tipo específico de elemento de interface do usuário que é exibido
em cima do conteúdo principal da página para fornecer informações adicionais ou solicitar alguma ação do usuário.

Um modal é geralmente uma janela ou diálogo que aparece na frente do conteúdo principal da página e escurece ou desfoca o restante da interface para indicar que o foco deve estar na janela modal.
Eles são frequentemente usados para apresentar informações importantes, como notificações, mensagens de erro ou formulários de entrada de dados.

O objetivo de um modal é chamar a atenção do usuário para a tarefa em questão e impedir que o usuário interaja com o conteúdo principal da página até que a tarefa seja concluída ou o modal seja fechado.
Modal geralmente possuem um botão de fechar, permitindo que o usuário retorne ao conteúdo principal da página.
*/