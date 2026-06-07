import 'bootstrap/dist/css/bootstrap.min.css' // importa o css do bootstrap e aplica os estilos em toda a aplicacao
import { StrictMode } from 'react' // ferramenta que detecta problemas no codigo e avisa no console
import { createRoot } from 'react-dom/client' // importa a funcao que conecta (injeta) o react ao html (index.html)
import AppRoutes from './routes' // importa o componente de rotas que foi criado

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes /> 
  </StrictMode>,
)

//StrictMode: envolve todas as rotas e renderiza o sistema de navegacao inteiro
