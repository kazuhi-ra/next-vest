import { useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Roulette from '../components/Roulette'

const IndexPage = () => {
  const heads = ['h1', 'h2', 'h3']
  const vests = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9']
  const foots = ['p1', 'p2', 'p3', 'p4', 'p5']
  useEffect(() => {
    [...heads, ...vests, ...foots].forEach(src => {
      const Img = new Image()
      Img.src = `/images/${src}.jpg`
    })

  }, [])

  return (
    <>
      <Head>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@kazuhi_ra' />
        <meta property='og:title' content='NEXTのベスト' />
        <meta property='og:url' content='https://next-vest.kazuhira.dev' />
        <meta
          property='og:description'
          content='あれが帰ってきた'
        />
        <meta
          property='og:image'
          content='https://next-vest.kazuhira.dev/images/tweet-card.jpg'
        />
      </Head>
      <Layout title='NEXTのベスト'>
        <Roulette />
      </Layout>
    </>
  )
}
export default IndexPage
