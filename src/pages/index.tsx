import { Prose, VisuallyHidden } from '@newhighsco/chipset'
import type { NextPage } from 'next'
import { LogoJsonLd, SocialProfileJsonLd } from 'next-seo'
import React, { useEffect, useState } from 'react'
import urlJoin from 'url-join'

import PageContainer from '~components/PageContainer'
import config from '~config'

const { name, title, logo, socialLinks, url } = config
const meta = { canonical: urlJoin(url, '/'), customTitle: true, title }
const messages = [
  <>
    Putting
    <br /> the you
    <br /> in <em>Umavi</em>.
  </>,
  <>
    <del>Typhros</del>
    <br />
    No fuss<em>.</em>
  </>,
  <>
    <em>Dunamis</em>
    <br />
    out<em>.</em>
  </>,
  <>
    <span aria-hidden>
      B<small>∞</small>k
    </span>
    <VisuallyHidden>Book</VisuallyHidden>
    <br />
    your
    <br />
    <em>consecution</em>
    <br />
    <strong>today</strong>
  </>
]

const HomePage: NextPage = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const index = Math.floor(Math.random() * messages.length)

    setIndex(index)
  }, [])

  return (
    <PageContainer meta={meta}>
      <SocialProfileJsonLd
        type="Organization"
        name={name}
        url={url}
        sameAs={Object.values(socialLinks)}
      />
      {logo?.bitmap && (
        <LogoJsonLd url={url} logo={urlJoin(url, logo.bitmap)} />
      )}
      <Prose>{messages[index]}</Prose>
    </PageContainer>
  )
}

export default HomePage
