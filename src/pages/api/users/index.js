import { users } from "@/data/data";

export default function handler(req, res) {
  const jsonUsers = JSON.stringify(users);
  res.status(405).json(users);
}
