import { data } from "@/data/data";

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { email: emailReq, password: passwordReq } = JSON.parse(req.body);

    const userRequested = data.users.find((user) => {
      console.log(emailReq, passwordReq, user.email);
      return user.email === emailReq;
    });
    console.log(userRequested);

    if (!userRequested) {
      res.status(200).json({
        message: "Usuario o contraseñas no válidos.",
      });
    } else {
      res.status(200).json({ auth: true });
    }
  } else
    res.status(405).json({
      message: "Invalid request method GET",
    });
}
