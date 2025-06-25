// lib/session.js
import nextSession from 'next-session';

export const getSession = nextSession({
  name: 'nextjs_session',
  cookie: {
    secure: process.env.NODE_ENV === 'production',
  },
});

// Wrapper for API handler
export const applySession = (handler) => async (req, res) => {
  const session = await getSession(req, res);
  req.session = session;
  return handler(req, res);
};

