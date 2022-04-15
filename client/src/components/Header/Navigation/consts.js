const navigationItems = [
  {
    label: "HOME",
    url: "/",
  },
  {
    label: "NEWS",
    url: "/news/",
  },
  {
    label: "MUSIC",
    url: "/music/",
  },
  {
    label: "CONTACT",
    url: "/contact/",
  },
];

const navigationItemsLabels = navigationItems.reduce(
  (obj, item) => (
    {
      ...obj,
      [item.label]: item.label,
    }
  ), {},
);

const navigationItemsUrls = navigationItems.reduce(
  (obj, item) => (
    {
      ...obj,
      [item.label]: item.url,
    }
  ), {},
);

export { navigationItems, navigationItemsLabels, navigationItemsUrls };
