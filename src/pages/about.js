import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import React from "react";
import {
  Blocks,
  HeaderBasic,
  HeaderLogo2,
  QuoteBasic,
  TaglineContent,
} from "@blocks/react";
export default () => (
  <Blocks.Root>
    <HeaderBasic>
      <HeaderBasic.Logo to="/">Hello</HeaderBasic.Logo>
      <HeaderBasic.Nav>
        <HeaderBasic.Link to="/about">About</HeaderBasic.Link>
        <HeaderBasic.Link to="/blog">Blog</HeaderBasic.Link>
        <HeaderBasic.Link to="/contact">Contact</HeaderBasic.Link>
      </HeaderBasic.Nav>
    </HeaderBasic>
    <HeaderBasic>
      <HeaderBasic.Logo to="/">Hello</HeaderBasic.Logo>
      <HeaderBasic.Nav>
        <HeaderBasic.Link to="/about">About</HeaderBasic.Link>
        <HeaderBasic.Link to="/blog">Blog</HeaderBasic.Link>
        <HeaderBasic.Link to="/contact">Contact</HeaderBasic.Link>
      </HeaderBasic.Nav>
    </HeaderBasic>
    <HeaderBasic>
      <HeaderBasic.Logo to="/">Hello</HeaderBasic.Logo>
      <HeaderBasic.Nav>
        <HeaderBasic.Link to="/about">About</HeaderBasic.Link>
        <HeaderBasic.Link to="/blog">Blog</HeaderBasic.Link>
        <HeaderBasic.Link to="/contact">Contact</HeaderBasic.Link>
      </HeaderBasic.Nav>
    </HeaderBasic>
    <HeaderLogo2>
      <HeaderLogo2.Logo to="/" />
      <HeaderLogo2.Nav>
        <HeaderLogo2.Link to="/about">About</HeaderLogo2.Link>
        <HeaderLogo2.Link to="/blog">Blog</HeaderLogo2.Link>
        <HeaderLogo2.Link to="/contact">Contact</HeaderLogo2.Link>
      </HeaderLogo2.Nav>
    </HeaderLogo2>
    <QuoteBasic>
      <QuoteBasic.Content>Science is magic that works.</QuoteBasic.Content>
      <QuoteBasic.Author>Kurt Vonnegut</QuoteBasic.Author>
    </QuoteBasic>
    <TaglineContent>
      <TaglineContent.Container>
        <TaglineContent.Heading>What is a block?</TaglineContent.Heading>
        <TaglineContent.Paragraph>
          A Block refers to a piece of content or a component. It's a section of
          your content while a document is a collection of blocks.
        </TaglineContent.Paragraph>
        <TaglineContent.Paragraph>
          Blocks can be simple like a paragraph of text or even a box with a
          tomato background color. Blocks can be complex like an embedded
          spreadsheet or a chart that fetches live data.
        </TaglineContent.Paragraph>
      </TaglineContent.Container>
    </TaglineContent>
  </Blocks.Root>
);
export default PageName

