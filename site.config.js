import logoBitmap from '~images/logo.png'
import logoVector from '~images/logo.svg'
import openGraphImage from '~images/sharing.jpg'
import colors from '~styles/colors.module.scss'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: 'KRYN',
  shortName: '∞',
  titleTemplate: name => `%s // ${name}`,
  title: 'KRYN // Putting the you in Umavi',
  description: 'Putting the you in Umavi',
  logo: { bitmap: logoBitmap.src, vector: logoVector },
  openGraphImage: openGraphImage.src,
  themeColor: colors.purple,
  socialLinks: { Instagram: 'https://instagram.com/krynfinity' }
}

export default config
