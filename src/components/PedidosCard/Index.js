import Link from "next/link";

export default function Pedido(props) {
  const { state, content, createdBy, id } = props.prop;
  return (
    <Link href={"/pedido/" + id}>
      <h5>state = {state}</h5>
      <p>created by = {createdBy}</p>
      {content.vidrio > 0 ? <p>Vidrio = {content.vidrio}</p> : null}
      {content.carton > 0 ? <p>Carton = {content.carton}</p> : null}
      {content.plastico > 0 ? <p>Plastico = {content.plastico}</p> : null}
      {content.ewaste > 0 ? <p>Ewaste = {content.ewaste}</p> : null}
    </Link>
  );
}
