import { User } from 'src/models';

export async function getUser(): Promise<User> {
  const token = /jwt=.+\n/
    .exec((document.cookie + ';').split(';').join('\n'))
    ?.at(0)
    ?.replaceAll('jwt=', '')
    .replace(';', '');
  const res = await fetch(`http://localhost:8000/api/users?token=${token}`, {
    method: 'GET',
  });
  const response = await res.json();

  return response.user;
}
