export default async function handler(req, res) {
  // Miniapp client cuma butuh 200 OK cepat.
  if (req.method !== "POST") {
    return res.status(200).json({ ok: true });
  }
  // Opsional: log event
  // console.log("miniapp event:", req.body);
  return res.status(200).json({ ok: true });
}
