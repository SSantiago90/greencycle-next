import { data } from "@/data/data";

export default function handler(req, res) {
  const { id } = req.query;

  const userRequested = data.users.find((user) => {
    return user.id === Number(id);
  });

  if (userRequested) res.status(200).json(userRequested);
  else res.status(404).json({ error: "Usuario no encontrado" });
}
