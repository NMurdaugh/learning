import { User } from './models/User';

const user = new User({});

user.set({ name: 'Martin' });

console.log(user.get('name'));
console.log(user.get('age'));
