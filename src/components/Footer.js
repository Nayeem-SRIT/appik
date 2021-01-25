import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../styles/theme'

import { Wrapper, Button } from '../styles/MyStyles'
import { Box, Flex, Text } from "../components"

import { social } from '../data/social'
import logo from '../assets/logo/appikBlack.svg'

const LogoBox = styled(Box)`
  @media only screen and (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    padding: 0 20px;
  }
`

const LinkBox = styled(Box)`
  @media only screen and (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    margin-top: 40px;
  }
`

const NewsletterBox = styled(Box)`
  @media only screen and (max-width: ${theme.breakpoints.md}) {
    text-align: center;
    margin-top: 40px;
  }
`

const Logo = styled.img`
  width: 98px;
  margin-bottom: 28px;
`

const Ul = styled.ul`
  list-style: none;
`

const Li = styled.li`
  text-decoration: none;
  line-height: 150%;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    margin-bottom: 10px;
  }
`

const Form = styled.form`
  position: relative;
  margin-bottom: 32px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 24px;
  font-family: "Roboto", sans-serif;
  color: ${theme.colors.defaultText};
  border: 1px solid ${theme.colors.gray2};
  border-radius: 30px;
  outline: none;

  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    padding: 15px 24px;
  }
`

const CustomButton = styled(Button)`
  padding: 0 30px;
  min-width: 50px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 14px;
`

const Social = styled.div`
  margin-top: 4px;
  float: right;

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    float: none;
  }
`

const Image = styled.img`
  width: 100%;
  max-width: 40px;
  height: auto;
`

const SocialLink = styled(Link)`
  :not(:first-child) {
    margin-left: 18px;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    :not(:first-child) {
      margin-left: 24px;
    }
  }
`

const MyLink = styled(Link)`
  text-decoration: none;
`

const CopyText = styled(Text)`
  @media only screen and (max-width: ${theme.breakpoints.lg}) {
    text-align: center;
  }

  @media only screen and (max-width: ${theme.breakpoints.md}) {
    margin-top: 32px;
  }
`

export default function Footer() {
  return (
    <Wrapper>
      <Flex flexWrap="wrap" pt={75}>
        <LogoBox width={[1, 1, 1/2, 1/3]} pr={[0, 0, 5]}>
          <Link to="/"><Logo src={logo} alt="logo" /></Link>
          <Text variant="p" mb={28}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</Text>
        </LogoBox>

        <LinkBox width={[1, 1, 1/2, 1/3]} pl={[0, 0, 0, 40]}>
          <Text variant="h5" mb={28}>Useful Links</Text>
          <Flex flexWrap="wrap">
            <Box width={[1, 1, 1/2, 1/2]}>
              <Ul>
                <Li>
                  <MyLink to="/"><Text variant="p">Home</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="/"><Text variant="p">Pages</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="/"><Text variant="p">Features</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="/"><Text variant="p">How it works</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="/"><Text variant="p">App faces</Text></MyLink>
                </Li>
              </Ul>
            </Box>
            <Box width={[1, 1, 1/2, 1/2]}>
              <Ul>
                <Li>
                  <MyLink to="/"><Text variant="p">Download</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="/"><Text variant="p">FAQ's</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="/"><Text variant="p">Support</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="/"><Text variant="p">Pricing</Text></MyLink>
                </Li>
                <Li>
                  <MyLink to="/"><Text variant="p">Contact us</Text></MyLink>
                </Li>
              </Ul>
            </Box>
          </Flex>
        </LinkBox>

        <NewsletterBox width={[1, 1, 1, 1/3]}>

          <Flex flexWrap="wrap">
            <Box width={1}>
              <Text variant="h5" mb={28}>Newsletter</Text>
              <Text variant="p" mb={4}>Subscribe our newsletter to get our update. We don't send span email to you.</Text>
            </Box>

            <Box width={[1, 1, 7/12, 1]}>
              <Form>
                <Input id="email" name="email" type="email" required />
                <CustomButton>SUBSCRIBE</CustomButton>
              </Form>
            </Box>

            <Box width={[1, 1, 5/12, 1]}>
              <Social>
                { social.map(( logo, index ) => (
                  <SocialLink to={logo.to}><Image src={logo.src} alt={logo.alt} key={index} /></SocialLink>
                )) }
              </Social>
            </Box>
          </Flex>
        </NewsletterBox>
      </Flex>
      <CopyText variant="p">Copyright 2021. www.appik.com. All Rights Reserved.</CopyText>
    </Wrapper>
  )
}
