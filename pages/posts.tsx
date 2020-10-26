import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Timeline } from 'react-twitter-widgets'

import styled from '@emotion/styled'

const Posts = () => {
  const [isDark, setDark] = useState(false)
  useEffect(() => {
    setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <StyledMain>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'ashitano_vest',
          }}
          options={{
            width: '420',
            theme: `${isDark ? 'dark' : 'light'}`,
            chrome: 'nofooternoheader',
          }}
        />
      </StyledMain>
    </Layout>
  )
}

const StyledMain = styled('main')`
  width: 420px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
`

export default Posts
