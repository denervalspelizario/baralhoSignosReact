
import '../styles/componentes/ItemLista.sass';

function ItemLista(props) {
    return (
      <div className="box__signo">
        <div className="box__signo__nome">
          <p>{props.signo}</p> 
        </div>
        <img className='box__signo__image' src={props.image} alt={props.signo} />
        <div className="box__signo__rage">
          <p>{props.dateInit}{props.dateEnd}</p>
        </div>
      </div>
    )
  }
  
  export default ItemLista;