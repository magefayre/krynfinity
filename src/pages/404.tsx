import { type NextPage } from 'next'
import React from 'react'

import PageContainer from '~components/PageContainer'

const meta = {
  title: 'Page not found',
  description: 'Sorry, this page could not be found',
  noindex: true,
  nofollow: true
}

const NotFoundPage: NextPage = () => <PageContainer meta={meta} />

export default NotFoundPage
