import { FC, ReactElement } from 'react'
import Link from 'next/link'

import styled from '@emotion/styled'
import Layout from '../components/Layout'

import useGetWidth from '../hooks/use-get-width'

type Props = { children: ReactElement }

const Yo: FC<Props> = ({ children }) => {
  const currentWidth = useGetWidth()

  if (currentWidth && currentWidth < 541) {
    return <StyledDescriptionSm>{children}</StyledDescriptionSm>
  } else {
    return <StyledDescriptionMd>{children}</StyledDescriptionMd>
  }
}

const Vests = () => {
  const descriptions = [
    'MHL.のベストです',
    '古着のベストです',
    'BEAMSのベストです',
    'BEAMSのベスト2です',
    'mont-bellのベストです',
    'BEAMSのベスト3です',
    'MHL.のベスト2です',
    'カーディガンです',
    '贈り物のベストです',
  ]

  return (
    <Layout title='Home | Next.js + TypeScript Example'>
      <StyledMain>
        <Wrapper>
          <StyledH1>いろんなベスト</StyledH1>
          <VesftsWrapper>
            {descriptions.map((description, i) => (
              <Yo key={description}>
                <StyledImg
                  src={`https://ashitano.herokuapp.com/images/v${i + 1}.jpg`}
                />
                <StyledP>{description}</StyledP>
              </Yo>
            ))}
          </VesftsWrapper>
        </Wrapper>
      </StyledMain>
      <ReturnButton>
        <Link href='/' passHref>
          <StyledA className='return'>
            ルーレットにもどる
          </StyledA>
        </Link>
      </ReturnButton>
    </Layout>
  )
}

const StyledMain = styled('main')`
  width: 98%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0 15px;
`

const Wrapper = styled('div')`
  padding-bottom: 30px;
  text-align: center;
  background-color: rgba(168, 168, 168, 0.9);
`

const StyledH1 = styled('h1')`
  color: black;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 30px;
`

const VesftsWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const StyledDescriptionMd = styled('div')`
  width: 31%;
`

const StyledDescriptionSm = styled('div')`
  width: 40%;
`

const StyledImg = styled('img')`
  width: 100%;
`

const StyledP = styled('p')`
  margin: 10px auto 20px;
  font-size: 14px;
  color: black;
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

export default Vests
