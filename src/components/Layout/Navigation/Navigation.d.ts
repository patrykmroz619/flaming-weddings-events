declare type NavSublinkData = {
  href: string;
  title: string;
};

declare type NavLinkData = NavSublinkData & {
  subLinks?: NavSublinkData[];
};
