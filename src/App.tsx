import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Cadastro from './paginas/cadastro/Cadastro';
import { AuthProvider } from './contexts/AuthContext';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import FormularioTema from './components/temas/formularioTema/FormularioTema';
import ListaTemas from './components/temas/listaTemas/ListaTemas';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} /> {/* Parametro id informado na URL para editar uma postagem específica*/}
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} /> {/* Parametro id informado na URL para deletar uma postagem específica*/}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;