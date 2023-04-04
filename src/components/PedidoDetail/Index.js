export default function PedidoDetail(props) {
  const { state, content, createdBy } = props.prop;
  console.log(state);

  return (
    <section>
      <h5>state = {state}</h5>
      <p>created by = {createdBy}</p>
      {content.vidrio > 0 ? <p>Vidrio = {content.vidrio}</p> : null}
      {content.carton > 0 ? <p>Carton = {content.carton}</p> : null}
      {content.plastico > 0 ? <p>Plastico = {content.plastico}</p> : null}
      {content.ewaste > 0 ? <p>Ewaste = {content.ewaste}</p> : null}
      <button>Tomar Pedido</button>
    </section>
  );
}
