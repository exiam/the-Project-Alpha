import * as React from 'react'
import { NextSFC } from '../@types'
import {
  Container,
  Title,
  Bold,
  Section0,
  Section1,
  Subtitle,
  Integration,
  Section2,
  Section3,
} from '../components/layout'
import Button from '../components/button/button.component'
import FileImage from '../img/file-drawing'
import styled from 'styled-components'
import {
  PrettierIntegration,
  TSIntegrations,
  GulpIntegration,
} from '../img/integrations'

const FileImageSVG = styled.svg`
  align-self: flex-end;
  position: absolute;
  top: 5vh;
  width: 800px;
  left: calc(100vw - 850px);
  @media screen and (min-width: 1900px) {
    right: -400px;
    left: unset;
  }
`

const Index: NextSFC<{}> = () => (
  <Container>
    <Section0>
      <Title light>
        Your <Bold>config files</Bold> in
        <br /> the <Bold>cloud</Bold>
      </Title>
      <FileImage SVGElement={FileImageSVG} />
      <table>
        <tbody>
          <tr>
            <td colSpan={2}>
              <Button primary large="+ 12">
                Getting Started
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <Button>Documentation</Button>
            </td>
            <td>
              <Button>Login</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Section0>
    <Section1>
      <Title color="#2F4858" as="h2">
        <Bold weight={800}>Integrated with</Bold>
      </Title>
      <Integration>
        <PrettierIntegration />
        <Subtitle>Prettier</Subtitle>
      </Integration>
      <Integration right>
        <TSIntegrations />
        <Subtitle>Typescript</Subtitle>
      </Integration>
      <Integration>
        <GulpIntegration />
        <Subtitle>Gulp</Subtitle>
      </Integration>
    </Section1>
    <Section2>
      <Title s2>On September 2020</Title>
    </Section2>
    <Section3>
      <Title>
        <Bold>Contribution</Bold>
      </Title>
      <a href="/contribution">
        <Button large color="#256071" hoverColor="#2F4858">
          Go to page
        </Button>
      </a>
    </Section3>
  </Container>
)

export default Index
