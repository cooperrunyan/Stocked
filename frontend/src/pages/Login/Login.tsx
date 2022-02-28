import { useRef, useState } from 'react';
import style from 'style/out/components/Login.module.css';
import router from 'next/router';
import { Container } from 'src/components';
import url from 'urlencode';

const validators = {
  email(email: string) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
      email,
    );
  },
  password(password: string) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
  },
};

export function Login() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [invalid, setInvalid] = useState<boolean>(false);

  async function login() {
    const user: any = {
      username: username.current?.value,
      password: password.current?.value,
    };

    if (!user.username || !user.password) return true;
    if (!validators.password(user.password)) return true;

    if (validators.email(user.username)) {
      user.email = user.username + '';
      delete user.username;
    }

    const res = await fetch('http://localhost:8000/api/users/login', {
      method: 'POST',
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (data.token) {
      console.log(data);
      document.cookie = 'jwt=' + data.token + ';path=/';
      router.push('/dashboard');

      return false;
    }

    return true;
  }

  async function send() {
    const worked = !(await login());

    if (!worked) setInvalid(true);
  }

  return (
    <Container>
      <div className={style.content}>
        <form
          className={style.form}
          onSubmit={async (e) => {
            e.preventDefault();
            await send();
          }}>
          <p className={style.login}>Login {invalid && <span className={style.didntWork}>Invalid credentials</span>}</p>
          <input className={style.inp} type="text" name="email" ref={username} placeholder="Email/Username" />
          <input className={style.inp} type="password" name="password" ref={password} placeholder="Password" />
          <button className={style.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </Container>
  );
}
