import React, { Component } from 'react';
import Logo from './Logo'

import './index.css'
import {
  Heading,
  Button,
  TextInput
} from 'umich-lib-components-react'

class App extends Component {
  render() {
    return (
      <div className="canvas-widget-app">
        <header role="banner">
          <a href="https://lib.umich.edu/">
            <Logo />
          </a>
        </header>

        <main role="main" aria-labelledby="library-canvas-widget">
          <Heading id="library-canvas-widget" size="large" level={1} className="visually-hidden">Library Canvas Widget</Heading>

          <form action="https://search.lib.umich.edu/everything" method="get" className="y-spacing">
            <Heading size="large" level={2}>Library Everything Search</Heading>
            <p className="text">Use to see a broad sampling of results and to explore specific areas and records in greater detail.</p>
            <div className="x-spacing layout-flex">
              <TextInput
                labelText="Search Research Guides"
                hideLabel
                placeholder="Find articles, books, and more"
                name="query"
              />
              <Button type="submit">Search</Button>
            </div>
          </form>

          <form action="https://guides.lib.umich.edu/srch.php" method="get" className="y-spacing">
            <Heading size="large" level={2}>Search Research Guides</Heading>

            <p className="text">Use to find research resources and help guides created by Library experts (Ann Arbor).</p>
            <div className="x-spacing layout-flex">
              <TextInput
                labelText="Search Research Guides"
                hideLabel
                placeholder="Find research resources, help guides, and more"
                name="q"
              />
              <Button type="submit">Search</Button>
            </div>
          </form>
        </main>

        <footer class="margin-top-two" role="complementary" aria-labelledby="additional-links">
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
