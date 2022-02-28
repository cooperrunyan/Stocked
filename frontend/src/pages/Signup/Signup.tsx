import { useRef, useState } from 'react';
import style from 'style/out/components/Login.module.css';
import router from 'next/router';
import { Container } from 'src/components';

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

export function Signup() {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);

  const [err, setErr] = useState<string>('');

  async function login() {
    const user: any = {
      username: username.current?.value,
      password: password.current?.value,
      email: email.current?.value,
      confirmPassword: confirmPassword.current?.value,
    };

    if (!user.username || !user.password || !user.email || !user.confirmPassword) return 'Missing required fields';
    if (!validators.password(user.password)) return 'Invalid password';

    if (user.password !== user.confirmPassword) return "Passwords don't match";

    const res = await fetch('http://localhost:8000/api/users/signup', {
      method: 'POST',
      body: JSON.stringify(user),
    });

    const data = await res.json();

    if (data.token) {
      console.log(data);
      document.cookie = 'jwt=' + data.token + ';path=/';
      router.push('/dashboard');

      return '';
    }

    return data.message as string;
  }

  async function send() {
    const msg = await login();

    if (msg) setErr(msg);
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
          <p className={style.login}>Signup {err && <span className={style.didntWork}>{err}</span>}</p>
          <input className={style.inp} type="text" name="email" ref={username} placeholder="Username" />
          <input className={style.inp} type="text" name="email" ref={email} placeholder="Email" />
          <input className={style.inp} type="password" name="password" ref={password} placeholder="Password" />
          <input className={style.inp} type="password" name="password" ref={confirmPassword} placeholder="Confirm Password" />
          <button className={style.button} type="submit">
            Signup
          </button>
        </form>
      </div>
    </Container>
  );
}
