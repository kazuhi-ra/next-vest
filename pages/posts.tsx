import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Timeline } from 'react-twitter-widgets'
import styled from '@emotion/styled'

import useGetWidth from '../hooks/use-get-width'

const Posts = () => {
  const [isDark, setDark] = useState(false)
  const currentWidth = useGetWidth()
  const timelineWidth = currentWidth && currentWidth > 541 ? 500 : 300

  useEffect(() => {
    setDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  return (
    <Layout title='みんなの投稿 - あしたのベストNext'>
      <StyledMain>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'ashitano_vest',
          }}
          options={{
            width: `${timelineWidth}`,
            theme: `${isDark ? 'dark' : 'light'}`,
            chrome: 'nofooternoheader',
          }}
        />
      </StyledMain>
    </Layout>
  )
}


const StyledMain = styled('main')`
  width: 70%;
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
`

export default Posts
