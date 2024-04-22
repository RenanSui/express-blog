const links = {
  githubAccount: 'https://github.com/RenanSui',
}

const navbar = {
  items: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Admin',
      href: '/admin',
    },
  ],
}

export const siteConfig = {
  title: 'Sui Blog',
  description: 'Simple blog created with NodeJS, Express & Mongodb',
  links,
  mainNav: [...navbar.items],
}
