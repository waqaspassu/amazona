const data = {
  headerMenues: [
    {
      name: "today's deal",
      href: '/search?tag=todays-deal',
    },
    {
      name: 'new arrivial',
      href: '/search?tag=new-arrivial',
    },
    {
      name: 'Featured products',
      href: '/search?tag=featured',
    },
    {
      name: 'Best Sellers',
      href: '/search?tag=best-sellers',
    },
    {
      name: 'Browsing history',
      href: '/search?tag=browsing-history',
    },
    {
      name: 'Customer Service',
      href: '/search?tag=customer-service',
    },
    {
      name: 'About us',
      href: '/search?tag=about-us',
    },
    {
      name: 'help',
      href: '/search?tag=help',
    },
  ],
  carousels: [
    {
      title: 'Most popular shoes for sale',
      buttonCaption: 'Shop Now',
      image: '/images/banner3.jpg',
      url: '/search?category=shoes',
      isPublished: true,
    },
    {
      title: 'Best Sellers in T-shirts',
      buttonCaption: 'Shop Now',
      image: '/images/banner1.jpg',
      url: '/search?category=t-shirts',
      isPublished: true,
    },
    {
      title: 'Best Deals on Wrist Watches',
      buttonCaption: 'Shop Now',
      image: '/images/banner2.jpg',
      url: '/search?category=Wrist watches',
      isPublished: true,
    },
  ],
}

export default data
