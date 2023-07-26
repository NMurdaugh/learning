import { Request, Response } from 'express';
import { controller, get } from './decorators';

interface requestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller('/auth')
export class LoginController {
  @get('/login')
  getLogin(req: requestWithBody, res: Response) {
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
  }
}
