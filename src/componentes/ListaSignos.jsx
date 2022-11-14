import '../styles/componentes/ListaSignos.sass';
import ItemLista from './ItemLista';
import Titulo from './Titulo';

function ListaSignos() {
    return (
      <div className="container__listaSignos">
        <Titulo />
        <div className='container__itemlist'>
          <ItemLista />
        </div>
      </div>
    )
  }
  
  export default ListaSignos;