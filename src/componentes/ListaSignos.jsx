import '../styles/componentes/ListaSignos.sass';
import ItemLista from './ItemLista';
import Titulo from './Titulo';

function ListaSignos() {
    return (
      <div className="container__listaSignos">
        <Titulo />
        <div className='container__itemlist'>
          <ItemLista 
              signo="Aquário" dateInit="21/01"
              dateEnd='19/02' image="../../public/assets/aquario.jpg"
          />
        </div>
      </div>
    )
  }
  
  export default ListaSignos;