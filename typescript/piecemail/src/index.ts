import { User } from './models/User';

const user = new User({});

user.set({ name: 'Martin' });

user.on('change', () => {
  console.log('Change 1');
  
})

user.on('change', () => {
  console.log('Change 2');
  
})

user.trigger('change')