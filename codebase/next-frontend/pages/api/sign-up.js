export default async function handler(req, res) {
    const response = await fetch('http://127.0.0.1:8000/api/user/');
    const data = await response.json();

    req.session.userData = data;
    await req.session.save();

    res.status(200).json({ message: 'Stored in session' });
}
