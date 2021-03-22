import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.yeti.exchange/#/pool',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.yeti.exchange/#/swap',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/',
      },
    ],
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/yetiexchange/',
      },
      {
        label: 'Docs',
        href: 'https://yetiexchange.gitbook.io/',
      },
      {
        label: 'Blog',
        href: 'https://yetiexchange.medium.com/',
      },
    ],
  },

  {
    label: 'Roadmap',
    icon: 'NftIcon',
    href: 'https://yetiexchange.gitbook.io/yetiexchange/ecosystem/road-map',
  },

  {
    label: 'Feedback',
    icon: 'TicketIcon',
    href: 'https://yeti.nolt.io/ ',
  },
]

export default config
