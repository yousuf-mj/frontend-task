import React from 'react';
import './App.scss';

import Card from './containers/Card/Card'
import {SearchResults} from './components/SearchResults'

function App() {
	return (
		<div className="app">
            <SearchResults />
		</div>
	);
}

export default App;
