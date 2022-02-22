import { useContext } from 'react';
import Theme from 'src/context/Theme';

export default () => {
  const context = useContext(Theme);
  return context;
};
