import { Request, Response, Router } from 'express';

interface requestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req: requestWithBody, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label for="email-input">Email:</label>
        <input type="text" id="email-input" name="email">
      </div>
      <div>
        <label for="password-input">Password:</label>
        <input type="password" id="password-input" name="password">
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post('/login', (req: requestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email/password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

export { router };
