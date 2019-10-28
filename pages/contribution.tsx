import * as React from 'react'
import { Container, Title } from '../components/layout'
import Tile from '../components/tile/tile.component'
import { FaGithub } from 'react-icons/fa'
import { NextSFC } from '../@types'
import fetch from 'isomorphic-unfetch'
import Markdown from 'react-markdown'

const Contribution: NextSFC<{ githubPageContent: string }> = ({
  githubPageContent,
}) => {
  return (
    <Container>
      <Title>Contribution</Title>
      <Tile
        href="https://github.com/hugos29dev/the-Project-Alpha"
        label="Github repository"
        img={<FaGithub />}
        fontIcon
        external
      />
      <Markdown source={githubPageContent} escapeHtml={false} />
    </Container>
  )
}

Contribution.getInitialProps = async function() {
  const githubPageContent = await fetch(
    'https://raw.githubusercontent.com/hugos29dev/the-Project-Alpha/master/CONTRIBUTING.md'
  ).then(r => r.text())
  return {
    githubPageContent,
  }
}

export default Contribution
