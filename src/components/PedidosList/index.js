import { data } from "@/data/data";
import Pedido from "@/components/PedidosCard/Index";
import { useState, useEffect } from "react";

export default function PedidosList(prop) {
  const [pedidos, setPedidos] = useState([]);
  const orders = data.orders;

  useEffect(() => {
    const result = orders.filter((o) => o.state === prop.state);
    setPedidos(result);
  }, []);

  return (
    <section className="pedidos_container">
      {pedidos.map((p) => {
        return <Pedido key={p.id} prop={p} />;
      })}
    </section>
  );
}
