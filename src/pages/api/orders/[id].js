import { data } from "@/data/data";

export default function handler(req, res) {
  const { id } = req.query;

  const orderRequested = data.orders.find((order) => {
    return order.id === Number(id);
  });

  if (orderRequested) res.status(200).json(orderRequested);
  else res.status(404).json({ error: "Orden no encontrada" });
}
