export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({
      message:
        "Tus datos se procesaron de forma correcta. ¡Bienvenido a GreenCycle!",
    });
  } else
    res.status(405).json({
      message: `Invalid request method. Expected POST, recieved ${req.method}`,
    });
}
