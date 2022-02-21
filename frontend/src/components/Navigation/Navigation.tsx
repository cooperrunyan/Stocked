import { HTMLAttributes, useEffect, useState } from 'react';
import { Link } from '..';
import style from 'style/components/Navigation.module.scss';
import { motion, Variant, AnimatePresence } from 'framer-motion';

const defaultOptions = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  time: 0.2,
};

const animation = {
  function: 'ease-in-out',
  socialOutlineDuration: 0.75,
  globalDelay: 0.1,
};

import * as icons from './svg';

import { Router, useRouter } from 'next/router';
import { ColorController } from 'src/config/ColorController';
import { pallette } from 'src/config';
import useTheme from 'src/hooks/useTheme';

type MotionSettings = {
  ease?: string;
  delay?: number;
  finish?: (definition: unknown) => void;
};

export function Navigation({ className }: HTMLAttributes<HTMLDivElement>) {
  const [layer, setLayer] = useState<typeof pallette.black | typeof pallette.white>('#000000');
  const [background, setBackground] = useState<typeof pallette.black | typeof pallette.white>('#ffffff');

  const { theme } = useTheme();

  const router = useRouter();

  useEffect(() => {
    const controller = new ColorController();
    setLayer(controller.layer);
    setBackground(controller.background);
  }, []);

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
              transition={transition}>
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
              transition={transition}>
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
              transition={transition}>
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
              transition={transition}>
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

const transition = {
  ease: 'easeInOut',
  duration: 0.2,
};
