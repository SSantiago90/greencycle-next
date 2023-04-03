import { data } from "@/data/data";

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { email: emailReq, password: passwordReq } = JSON.parse(req.body);

    const userRequested = data.users.find((user) => {
      return user.email === emailReq;
    });

    const passwordMatch = userRequested?.password === passwordReq;

    if (userRequested && passwordMatch) {
      res.status(200).json({ auth: true });
    } else {
      res.status(200).json({
        message: "Usuario o contraseñas no válidos.",
        auth: false,
      });
    }
  } else
    res.status(405).json({
      message: `Invalid request method. Expected POST, recieved ${req.method}`,
    });
}
