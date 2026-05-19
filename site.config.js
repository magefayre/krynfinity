import logoBitmap from '~images/logo.png'
import logoVector from '~images/logo.svg'
import openGraphImage from '~images/sharing.jpg'
import colors from '~styles/colors.module'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: 'Krynfinity',
  shortName: null,
  title: 'Krynfinity',
  description: 'TODO:',
  logo: { bitmap: logoBitmap.src, vector: logoVector },
  openGraphImage: openGraphImage.src,
  themeColor: colors.black,
  socialLinks: { Instagram: 'https://instagram.com/krynfinity' }
}

export default config
