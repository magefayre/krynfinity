import { Prose, SmartLink } from '@newhighsco/chipset'
import { type NextPage } from 'next'
import React from 'react'

import PageContainer from '~components/PageContainer'

const meta = {
  title: 'Page not found',
  description: 'Sorry, this page could not be found',
  noindex: true,
  nofollow: true
}

const NotFoundPage: NextPage = () => (
  <PageContainer meta={meta}>
    <Prose>
      The Light
      <br />
      of the <em>Luxon</em>
      <br />
      shines
      <br />
      <del>not</del> <SmartLink href="/">here</SmartLink>
      <em>.</em>
    </Prose>
  </PageContainer>
)

export default NotFoundPage
