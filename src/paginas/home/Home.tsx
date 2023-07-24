import './Home.css';
// import homeLogo from '../../assets/home.png' //importando imagem
import {useState } from 'react';


const Home = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <>
            <div>
                {loggedIn ? ( 
                    <h1>Bem vindo de volta!</h1>
                ) : ( 
                    <button onClick={() => setLoggedIn(true)}>Entrar</button>
                )}
            </div>
        </>
    );
}

export default Home;//Expoprtando para que outro componente possa importar essa função

/*
    Por boas práticas, um componente.tsx (arquivo) só pode armazenar UMA função, caso o projeto exija a criação de x componentes/funções, será necessário criar x arquivos.tsx
    Os componentes (funções) React retornam elementos HTML para que possam ser exibidos em tela

    OBS: 
    De inicio, uma função só pode retornar um elemento HTML, para resolver esse problema você pode utilizar uma TAG container (como uma div) para armazenar mais de um elemento HTML
    Outra opção é utilizar uma pseudotag <> e </> (Fragment) para armazenar mais de um elementos HTML dentro do seu escopos. Dessa forma, podemos utilizar o Fragment ao invés de utilizar inúmeras divs

    PSEUDOTAG = Simula o comportamento de uma tag para o React, porém não é exibida na renderização/exibição do elemento (incluindo DevTools)
*/