import ItemLista from './componentes/ItemLista';
import ListaSignos from './componentes/ListaSignos';
import Titulo from './componentes/Titulo';

import './styles/App.sass'


function App() {


  return (
    <div className="App">
      <h1>Ola mundo</h1>
      <ItemLista />
      <ListaSignos />
      <Titulo />
    </div>
  )
}

export default App
