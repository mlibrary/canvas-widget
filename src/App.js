import React, { Component } from 'react';
import Logo from './Logo'

import './index.css'
import {
  Heading,
  Button,
  TextInput,
  Chat
} from 'umich-lib-components-react'

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
          <Heading id="library-canvas-widget" size="large" level={1} className="visually-hidden">Library Canvas Widget</Heading>

          <form
            action="https://search.lib.umich.edu/everything"
            method="get"
            className="y-spacing"
            role="search"
            onSubmit={this.handleLibrarySearchSubmit}
          >
            <Heading size="large" level={2}>Library Everything Search</Heading>
            <p className="text">Use to see a broad sampling of results and to explore specific areas and records in greater detail.</p>
            <div className="x-spacing layout-flex layout-flex-start">
              <TextInput
                id="library-search"
                labelText="Library Search"
                hideLabel
                value={librarySearchQuery}
                invalid={librarySearchInvalid}
                invalidText={librarySearchInvalidText}
                placeholder="Find articles, books, and more"
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
            <Heading size="large" level={2}>Search Research Guides</Heading>

            <p className="text">Use to find research resources and help guides created by Library experts (Ann Arbor).</p>
            <div className="x-spacing layout-flex layout-flex-start">
              <TextInput
                id="research-guides-search"
                labelText="Search Research Guides"
                hideLabel
                value={libGuideQuery}
                invalid={libGuideInvalid}
                invalidText={libGuideInvalidText}
                placeholder="Find research resources, help guides, and more"
                onChange={this.handleLibGuideQueryChange}
                name="q"
              />
              <Button type="submit">Search</Button>
            </div>
          </form>
        </main>

        <footer className="margin-top-two" role="complementary" aria-labelledby="additional-links">
      		<Heading id="additional-links" size="medium" level={2}>Additional links</Heading>

      		<ul>
      			<li>
      				<a href="https://lib.umich.edu">University Library</a>
      			</li>
      			<li>
      				<a href="https://www.lib.umich.edu/ask-librarian">Ask a Librarian</a>
      			</li>
      			<li>
      				<a href="https://www.lib.umich.edu/hours">Hours</a>
      			</li>
      			<li>
      				<a href="https://www.lib.umich.edu/libraries-and-departments">Locations</a>
      			</li>
      		</ul>
      	</footer>
      </div>
    );
  }
}

export default App;
