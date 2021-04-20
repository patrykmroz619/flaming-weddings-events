declare type PageRoute = {
  href: `/${string}`;
  title: string;
  subroutes?: Array<{
    href: `/${string}`;
    title: string;
  }>;
};
