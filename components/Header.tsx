import React, { FC } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

import useGetWidth from '../hooks/use-get-width'

type Props = {
  children: React.ReactElement
}

type NavAProps = {
  children: string
  href: string
}

const Yo: FC<Props> = ({ children }) => {
  const currentWidth = useGetWidth()

  if (currentWidth && currentWidth > 541) {
    return <StyledHeader>{children}</StyledHeader>
  } else {
    return <StyledHeaderSm>{children}</StyledHeaderSm>
  }
}

const Title = () => {
  const currentWidth = useGetWidth()
  if (currentWidth && currentWidth > 541) {
    return (
      <StyledH1>
        <Link href='/' passHref>
          <StyledA>あしたのベストNext</StyledA>
        </Link>
      </StyledH1>
    )
  } else {
    return (
      <StyledH1Sm>
        <Link href='/' passHref>
          <StyledA>あしたのベストNext</StyledA>
        </Link>
      </StyledH1Sm>
    )
  }
}

const NavA: FC<NavAProps> = ({ children, href }) => {
  const currentWidth = useGetWidth()

  if (currentWidth && currentWidth > 541) {
    return (
      <Link href={href} passHref>
        <StyledNavA>{children}</StyledNavA>
      </Link>
    )
  } else {
    return (
      <Link href={href} passHref>
        <StyledNavASm>{children}</StyledNavASm>
      </Link>
    )
  }
}

const Header = () => {
  return (
    <Yo>
      <HeaderLimitter>
        <Title />
        <StyledNav>
          <Link href='/vests' passHref>
            <NavA>ベスト一覧</NavA>
          </Link>
          <Link href='/posts' passHref>
            <NavA>みんなの投稿</NavA>
          </Link>
          {/* <StyledNavA
          href='https://www.amazon.jp/hz/wishlist/ls/24ZYKIXEM3SQV?ref_=wl_share'
          target='_blank'
        >
          応援する
        </StyledNavA> */}
        </StyledNav>
      </HeaderLimitter>
    </Yo>
  )
}

const StyledHeader = styled('header')`
  background-color: #17223b;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  padding: 20px 40px;
  height: 80px;
  box-sizing: border-box;
`

const StyledHeaderSm = styled('header')`
  background-color: #17223b;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  padding: 22px 8px;
  height: 80px;
  box-sizing: border-box;
`

const HeaderLimitter = styled('div')`
  max-width: 1200px;
  text-align: center;
  margin: 0 auto;
`

const StyledH1 = styled('h1')`
  float: left;
  line-height: 40px;
  margin: 0;
  font-size: 24px;
`
const StyledH1Sm = styled('h1')`
  float: left;
  line-height: 40px;
  margin: 0;
  font-size: 18px;
`

const StyledA = styled('a')`
  color: #ffffff;
  text-decoration: none;
`

const StyledNav = styled('nav')`
  float: right;
  height: 40px;
  line-height: 40px;
`

const StyledNavA = styled('a')`
  display: inline-block;
  padding: 0 5px;
  text-decoration: none;
  color: #ffffff;
  opacity: 0.65;
  font-size: 16px;
`

const StyledNavASm = styled('a')`
  display: inline-block;
  padding: 0 5px;
  text-decoration: none;
  color: #ffffff;
  opacity: 0.65;
  font-size: 14px;
`

export default Header
