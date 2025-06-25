// pages/api/login.js
import { applySession } from '@/lib/session';

async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { email, password } = req.body;

    const loginRes = await fetch('http://localhost:8000/accounts/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password }),
    });

    const data = await loginRes.json();

    if (!loginRes.ok) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.session.token = data.access;
    await req.session.save();
l
    res.status(200).json({ message: 'Logged in', token: data.access });
}

export default applySession(handler);
