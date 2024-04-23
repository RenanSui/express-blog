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

const auth = {
  author: 'Brian Jones',
  imageUrl:
    'https://images.unsplash.com/photo-1566866856854-a0b3d69a62c0?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  authorUrl:
    'https://unsplash.com/@briannjoness?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
  imagePageUrl:
    'https://unsplash.com/photos/curtain-buildings-at-night-JFpLW-xhvco?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
}

const oauthProviders = [
  { name: 'Google', providerType: 'google', icon: 'google' },
  { name: 'Discord', providerType: 'discord', icon: 'discord' },
  { name: 'Github', providerType: 'github', icon: 'github' },
]

export const siteConfig = {
  title: 'Sui Blog',
  description: 'Simple blog created with NodeJS, Express & Mongodb',
  links,
  unsplash: { auth },
  oauthProviders,
  mainNav: [...navbar.items],
}
