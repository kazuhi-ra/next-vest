import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import styled from '@emotion/styled'

const heads = ['h1', 'h2', 'h3']
const vests = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8', 'v9']
const foots = ['p1', 'p2', 'p3', 'p4', 'p5']

type Props = {
  src: string
  imgHeight: number
}

const Image: FC<Props> = ({ src, imgHeight }) => {
  return (
    <img
      src={`/images/${src}.jpg`}
      alt='服の画像'
      width='300'
      height={imgHeight}
    />
  )
}

const IndexPage = () => {
  const router = useRouter()
  const id = router.query.id

  const headId = id && Number(id[0])
  const vestId = id && Number(id[1])
  const footId = id && Number(id[2])
  
  const headSrc = headId ? heads[headId] : 'blank_vest'
  const vestSrc = vestId ? vests[vestId] : 'blank_vest'
  const footSrc = footId ? foots[footId] : 'blank_vest'
  

  return (
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
      <Layout title='みんなの投稿 - あしたのベストNext'>
        <MainWrapper className='wrapper'>
          <ImageWrapper>
            <Image src={headSrc} imgHeight={120} />
            <Image src={vestSrc} imgHeight={150} />
            <Image src={footSrc} imgHeight={232} />
          </ImageWrapper>
        </MainWrapper>
        <ReturnButton>
          <Link href='/' passHref>
            <StyledA className='return'>ルーレットにもどる</StyledA>
          </Link>
        </ReturnButton>
      </Layout>
    </>
  )
}

const MainWrapper = styled('main')`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`

const ImageWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`

const ReturnButton = styled('div')`
  display: flex;
  flex-direction: column;
`

const StyledA = styled('a')`
  color: #dedede;
  cursor: pointer;
  width: 240px;
  height: 36px;
  background-color: #ef454a;
  box-shadow: 0 4px 0 #d1483e;
  border-radius: 8px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  user-select: none;
  margin: 20px auto 20px auto;
  text-decoration: none;

  &:active {
    margin: 25px auto 20px auto;
    box-shadow: none;
  }
`

export default IndexPage
