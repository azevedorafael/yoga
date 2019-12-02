import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { ThemeProvider } from '@gympass/yoga';
import { version } from '@gympass/yoga/package.json';

import { Box, Description, Header, Title } from '../components/Home';
import { GlobalStyle } from '../components';
import Lotus from '../images/lotus.svg';
import Gympass from '../images/gympass-logo.svg';

const YogaLogo = styled(Lotus)`
  width: 78px;

  @media (max-width: 900px) {
    width: 50px;
  }
`;

const GympassLogo = styled(Gympass)`
  @media (max-width: 900px) {
    width: 80px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 24px;

  @media (max-width: 900px) {
    padding: 18px;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Version = styled.a(
  ({
    theme: {
      yoga: {
        colors: { gray },
      },
    },
  }) => `
  text-decoration: none;
  color: ${gray[4]};
  font-size: 16px;
`,
);

const boxes = [
  {
    title: 'guidelines',
    description:
      'Design principles, practical patterns and high quality design resources to help people create their product prototypes beautifully and efficiently.',
  },
  {
    title: 'components',
    description:
      'A React and React Native UI library that contains a set of high quality components that defines our interfaces.',
  },
];

const metaTitle = 'Yoga • Design System';
const metaDescription =
  'Yoga is a scientific system of practices made to help each one of us achieve our highest potential and experience.';

const Home = () => (
  <>
    <Helmet>
      <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
    </Helmet>
    <ThemeProvider>
      <GlobalStyle />
      <Wrapper>
        <Header>
          <YogaLogo />
          <Version
            href="https://github.com/gympass/yoga"
            rel="noopener noreferrer"
            target="_blank"
          >
            v{version}
          </Version>
        </Header>
        <Description>
          <Title>
            Yoga is a scientific system of practices made to help each one of us
            achieve our highest potential and experience.
          </Title>
          <GympassLogo />
        </Description>
        <BoxWrapper>
          {boxes.map(({ title, description }, index) => (
            <Box
              key={title}
              number={index + 1}
              title={title}
              description={description}
              href={`/${title}`}
            />
          ))}
        </BoxWrapper>
      </Wrapper>
    </ThemeProvider>
  </>
);

export default Home;
