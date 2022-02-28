export interface User {
  createdAt: Date;
  email: string;
  username: string;
  password: string;
  lists: {
    name: string;
    holdings: {
      [key: string]: {
        symbol: typeof key;
        volumes: {
          id: string;
          boughtAt: Date;
          initialPrice: number;
        }[];
      };
    };
  }[];
}
