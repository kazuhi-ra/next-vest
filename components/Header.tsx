import React, { FC } from 'react'
import styled from '@emotion/styled'

import Link from 'next/link'

type Props = {}

const Header: FC<Props> = () => (
  <StyledHeader>
    <HeaderLimitter>
      <StyledH1>
        {/* <StyledA href='/'>あしたのベストNext</StyledA> */}
        <Link href='/' passHref>
          <StyledA>あしたのベストNext</StyledA>
        </Link>
      </StyledH1>
      <StyledNav>
        <Link href='/vests' passHref>
          <StyledNavA>ベスト一覧</StyledNavA>
        </Link>
        <Link href='/posts' passHref>
          <StyledNavA>みんなの投稿</StyledNavA>
        </Link>
        <StyledNavA
          href='https://www.amazon.jp/hz/wishlist/ls/24ZYKIXEM3SQV?ref_=wl_share'
          target='_blank'
        >
          応援する
        </StyledNavA>
      </StyledNav>
    </HeaderLimitter>
  </StyledHeader>
)


const StyledHeader = styled('header')`
  background-color: #17223b;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.15);
  padding: 20px 40px;
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

export default Header
