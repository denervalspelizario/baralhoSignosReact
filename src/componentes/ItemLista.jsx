

import '../styles/componentes/ItemLista.sass';

function ItemLista() {
    return (
      <div className="box__signo">
        <div className="box__signo__nome">
          <p>Aquário</p> 
        </div>
        <img className='box__signo__image' src="../../public/assets/aquario.jpg" alt="Aquário" />
        <div className="box__signo__rage">
          <p>21/01 - 19/02</p>
        </div>
      </div>
    )
  }
  
  export default ItemLista;