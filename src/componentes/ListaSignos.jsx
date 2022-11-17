import '../styles/componentes/ListaSignos.sass';
import ItemLista from './ItemLista';
import Titulo from './Titulo';
import AquarioIMG from '../image/aquario.jpg';
import AriesIMG from '../image/aries.jpg';
import CancerIMG from '../image/cancer.jpg';
import CapricornioIMG from '../image/capricornio.jpg';
import EscorpiaoIMG from '../image/escorpiao.jpg';
import GemeosIMG from '../image/gemeos.jpg';
import LeaoIMG from '../image/leao.jpg';
import LibraIMG from '../image/libra.jpg';
import PeixesIMG from '../image/peixes.jpg';
import SagitarioIMG from '../image/sagitario.jpg';
import TouroIMG from '../image/touro.jpg';
import VirgemIMG from '../image/virgem.jpg';













function ListaSignos() {
    return (
      <div className="container__listaSignos">
        <Titulo />
        <div className='container__itemlist'>
          <ItemLista 
              signo="Aquário" dateInit="21/01"
              dateEnd='19/02' image={AquarioIMG}
          />
          <ItemLista 
              signo="Peixes" dateInit="20/02"
              dateEnd='20/03' image={PeixesIMG}
          />
          <ItemLista 
              signo="Áries" dateInit="21/03"
              dateEnd='20/04' image={AriesIMG}
          />
          <ItemLista 
              signo="Touro" dateInit="21/04"
              dateEnd='20/04' image={TouroIMG}
          />
          <ItemLista 
              signo="Gêmeos" dateInit="21/05"
              dateEnd='21/06' image={GemeosIMG}
          />
          <ItemLista 
              signo="Câncer" dateInit="21/06"
              dateEnd='23/07' image={CancerIMG}
          />
          <ItemLista 
              signo="Leão" dateInit="24/07"
              dateEnd='23/08' image={LeaoIMG}
          />
          <ItemLista 
              signo="Virgem" dateInit="24/08"
              dateEnd='23/09' image={VirgemIMG}
          />
          <ItemLista 
              signo="Libra" dateInit="24/09"
              dateEnd='23/10' image={LibraIMG}
          />
          <ItemLista 
              signo="Sagitário" dateInit="23/11"
              dateEnd='21/12' image={SagitarioIMG}
          />
          <ItemLista 
              signo="Capricórnio" dateInit="22/12"
              dateEnd='20/01' image={CapricornioIMG}
          />
        </div>
      </div>
    )
  }
  
  export default ListaSignos;