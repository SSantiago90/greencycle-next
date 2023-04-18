import React from "react";
import {
  GiWineGlass,
  GiSmartphone,
  GiNewspaper,
  GiBeerBottle,
} from "react-icons/gi";
const PedidosData = ({ createdBy, content, size }) => {
  return (
    <div className="pedidos_item_data">
      {content.vidrio > 0 ? (
        <>
          <p className="p_size">{size}</p>
          <p className="p_cantidad">{content.vidrio}</p>
          <GiWineGlass className="pedido_icon" />
        </>
      ) : null}
      {content.carton > 0 ? (
        <>
          <p className="p_size">{size}</p>
          <p className="p_cantidad"> {content.carton}</p>
          <GiNewspaper />
        </>
      ) : null}
      {content.plastico > 0 ? (
        <>
          <p className="p_size">{size}</p>
          <p className="p_cantidad"> {content.plastico}</p>
          <GiBeerBottle />
        </>
      ) : null}
      {content.ewaste > 0 ? (
        <>
          <p className="p_size">{size}</p>
          <p className="p_cantidad"> {content.ewaste}</p>
          <GiSmartphone />
        </>
      ) : null}
    </div>
  );
};

export default PedidosData;
