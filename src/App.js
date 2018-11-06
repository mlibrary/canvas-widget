import React, { Component } from 'react';
import Chat from '@umich-lib-ui/chat'
import Button from '@umich-lib-ui/button'
import TextInput from '@umich-lib-ui/text-input'
import Heading from '@umich-lib-ui/heading'
import VisuallyHidden from '@reach/visually-hidden'
import Logo from './Logo'
import './index.css'

class App extends Component {
  state = {
    librarySearchQuery: '',
    libGuideQuery: ''
  }

  handleLibrarySearchQueryChange = (e) => {
    this.setState({ librarySearchQuery: e.target.value })
  }

  handleLibrarySearchSubmit = (e) => {
    const {
      librarySearchQuery
    } = this.state

    if (librarySearchQuery.length === 0) {
      e.preventDefault()
      this.setState({ librarySearchInvalidText: 'Enter a query to search.' })
    } else {
      this.setState({ librarySearchInvalidText: undefined })
    }
  }

  handleLibGuideQueryChange = (e) => {
    this.setState({ libGuideQuery: e.target.value })
  }

  handleLibGuideSubmit = (e) => {
    const {
      libGuideQuery
    } = this.state

    if (libGuideQuery.length === 0) {
      e.preventDefault()
      this.setState({ libGuideInvalidText: 'Enter a query to search.' })
    } else {
      this.setState({ libGuideInvalidText: undefined })
    }
  }

  render() {
    const {
      librarySearchQuery,
      libGuideQuery,
      librarySearchInvalidText,
      libGuideInvalidText
    } = this.state

    const librarySearchInvalid = librarySearchInvalidText ? true : false
    const libGuideInvalid = libGuideInvalidText ? true : false

    return (
      <div className="canvas-widget-app">
        <header role="banner" className="canvas-widget-app__header">
          <a href="https://lib.umich.edu/">
            <Logo />
          </a>

          <Chat />
        </header>

        <main role="main" aria-labelledby="library-canvas-widget">
          <VisuallyHidden>
            <Heading id="library-canvas-widget" size="xlarge" level={1}>Library Canvas Widget</Heading>
          </VisuallyHidden>

          <form
            action="https://search.lib.umich.edu/everything"
            method="get"
            className="y-spacing"
            role="search"
            onSubmit={this.handleLibrarySearchSubmit}
          >
            <Heading size="medium" level={2}>Library Everything Search</Heading>
            <p className="text">See results from the U-M Library catalog, articles, databases, online journals, and the library website.</p>
            <div className="x-spacing layout-flex layout-flex-start">
              <TextInput
                id="library-search"
                labelText="Library Everything Search"
                hideLabel
                value={librarySearchQuery}
                invalid={librarySearchInvalid}
                invalidText={librarySearchInvalidText}
                name="query"
                onChange={this.handleLibrarySearchQueryChange}
              />
              <Button type="submit">Search</Button>
            </div>
          </form>

          <form
            action="https://guides.lib.umich.edu/srch.php"
            method="get"
            className="y-spacing"
            role="search"
            onSubmit={this.handleLibGuideSubmit}
          >
            <Heading size="medium" level={2}>Research Guides Search</Heading>

            <p className="text">Find research resources and help guides created by experts from U-M Library (Ann Arbor).</p>
            <div className="x-spacing layout-flex layout-flex-start">
              <TextInput
                id="research-guides-search"
                labelText="Research Guides Search"
                hideLabel
                value={libGuideQuery}
                invalid={libGuideInvalid}
                invalidText={libGuideInvalidText}
                onChange={this.handleLibGuideQueryChange}
                name="q"
              />
              <Button type="submit">Search</Button>
            </div>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
