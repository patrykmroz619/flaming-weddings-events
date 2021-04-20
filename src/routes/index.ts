type Routes = { [index: string]: PageRoute };

export const routes: Routes = {
  home: {
    href: `/`,
    title: `Strona główna`,
  },
  about: {
    href: `/o-mnie`,
    title: `O mnie`,
  },
  offer: {
    href: `/oferta`,
    title: `Oferta`,
    subroutes: [
      {
        href: `/oferta/wesela`,
        title: `Wesela`,
      },
      {
        href: `/oferta/eventy`,
        title: `Eventy`,
      },
      {
        href: `/oferta/bary`,
        title: `Bary`,
      },
    ],
  },
  gallery: {
    href: `/galeria`,
    title: `Galeria`,
  },
  contact: {
    href: `/kontakt`,
    title: `Kontakt`,
  },
};
