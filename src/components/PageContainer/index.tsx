import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import type { NextSeoProps } from 'next-seo'
import React, {
  type FC,
  type PropsWithChildren,
  useEffect,
  useState
} from 'react'

import Footer from '~components/Footer'
import Header from '~components/Header'

type Props = PropsWithChildren<{ meta: NextSeoProps }>

const PageContainer: FC<Props> = ({ meta, children }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const reduceMotion =
      matchMedia('(prefers-reduced-motion: reduce)')?.matches || false

    setLoaded(!reduceMotion)
  }, [])

  return (
    <ThemedPageContainer
      header={<Header />}
      footer={
        <>
          <Footer />
          {loaded && <Backdrop />}
        </>
      }
      gutter
    >
      <Meta {...meta} />
      {children}
    </ThemedPageContainer>
  )
}

export default PageContainer
export { PageContainer }
