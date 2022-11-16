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
          <ItemLista 
              signo="Peixes" dateInit="20/02"
              dateEnd='20/03' image="../../public/assets/peixes.jpg"
          />
          <ItemLista 
              signo="Áries" dateInit="21/03"
              dateEnd='20/04' image="../../public/assets/aries.jpg"
          />
          <ItemLista 
              signo="Touro" dateInit="21/04"
              dateEnd='20/04' image="../../public/assets/touro.jpg"
          />
          <ItemLista 
              signo="Gêmeos" dateInit="21/05"
              dateEnd='21/06' image="../../public/assets/gemeos.jpg"
          />
          <ItemLista 
              signo="Câncer" dateInit="21/06"
              dateEnd='23/07' image="../../public/assets/cancer.jpg"
          />
          <ItemLista 
              signo="Leão" dateInit="24/07"
              dateEnd='23/08' image="../../public/assets/leao.jpg"
          />
          <ItemLista 
              signo="Virgem" dateInit="24/08"
              dateEnd='23/09' image="../../public/assets/virgem.jpg"
          />
          <ItemLista 
              signo="Libra" dateInit="24/09"
              dateEnd='23/10' image="../../public/assets/libra.jpg"
          />
          <ItemLista 
              signo="Sagitário" dateInit="23/11"
              dateEnd='21/12' image="../../public/assets/sagitario.jpg"
          />
          <ItemLista 
              signo="Carpricórnio" dateInit="22/12"
              dateEnd='20/01' image="../../public/assets/capricornio.jpg"
          />
        </div>
      </div>
    )
  }
  
  export default ListaSignos;