import { HTMLAttributes } from 'react';
import { Link } from '..';
import style from 'style/components/Navigation.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

import * as icons from './svg';

import { useRouter } from 'next/router';
import useTheme from 'src/hooks/useTheme';
import { animation } from 'src/config';

export function Navigation({ className }: HTMLAttributes<HTMLDivElement>) {
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <>
      <input type="checkbox" name="clicker" id="clicker" className={style.clicker} />
      <div className={style.nav + ' ' + className}>
        <AnimatePresence exitBeforeEnter initial>
          <ul className={style.ul}>
            <motion.li
              className={style.li}
              variants={{
                from: {
                  color: theme.layer,
                  background: '#00000000',
                },
                to: {
                  color: /dashboard/g.test(router.route) ? theme.background : theme.layer,
                  background: /dashboard/g.test(router.route) ? theme.layer : `${theme.background}00`,
                },
              }}
              initial="from"
              exit="from"
              animate="to"
              transition={animation}>
              <Link className={style.link} href="/dashboard">
                Dashboard <icons.Dashboard />
              </Link>
            </motion.li>

            <motion.li
              className={style.li}
              variants={{
                from: {
                  color: theme.layer,
                  background: '#00000000',
                },
                to: {
                  color: /lists/g.test(router.route) ? theme.background : theme.layer,
                  background: /lists/g.test(router.route) ? theme.layer : `${theme.background}00`,
                },
              }}
              initial="from"
              exit="from"
              animate="to"
              transition={animation}>
              <Link className={style.link} href="/lists">
                Lists <icons.Lists />
              </Link>
            </motion.li>

            <motion.li
              className={style.li}
              variants={{
                from: {
                  color: theme.layer,
                  background: '#00000000',
                },
                to: {
                  color: /search/g.test(router.route) ? theme.background : theme.layer,
                  background: /search/g.test(router.route) ? theme.layer : `${theme.background}00`,
                },
              }}
              initial="from"
              exit="from"
              animate="to"
              transition={animation}>
              <Link className={style.link} href="/search">
                Search <icons.Search />
              </Link>
            </motion.li>

            <motion.li
              className={style.li}
              variants={{
                from: {
                  color: theme.layer,
                  background: '#00000000',
                },
                to: {
                  color: /settings/g.test(router.route) ? theme.background : theme.layer,
                  background: /settings/g.test(router.route) ? theme.layer : `${theme.background}00`,
                },
              }}
              initial="from"
              exit="from"
              animate="to"
              transition={animation}>
              <Link className={style.link} href="/settings">
                Settings <icons.Settings />
              </Link>
            </motion.li>
          </ul>
        </AnimatePresence>
        <icons.Stocked />
      </div>
    </>
  );
}
