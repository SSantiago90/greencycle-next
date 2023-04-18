import Link from "next/link";
import PedidosData from "../PedidosData";

export default function Pedido(props) {
  const { state, content, createdBy, id, tamaño } = props.prop;
  return (
    <Link href={"/pedido/" + id} className="pedidos_item">
      <PedidosData props={createdBy} content={content} size={tamaño} />
    </Link>
  );
}
