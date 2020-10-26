import Head from 'next/head'
import Layout from '../components/Layout'
import Roulette from '../components/Roulette'

const IndexPage = () => (
  <>
    <Head>
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@kazuhi_ra' />
      <meta property='og:title' content='あしたのベスト' />
      <meta property='og:url' content='https://ashitano.kazuhira.com/' />
      <meta
        property='og:description'
        content='まわしますか、まわしませんか。'
      />
      <meta
        property='og:image'
        content='https://ashitano.herokuapp.com/images/tweet-card.jpg'
      />
    </Head>
    <Layout title='あしたのベストNext'>
      <Roulette />
    </Layout>
  </>
)

export default IndexPage
