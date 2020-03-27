import React from 'react';
import './App.scss';

import Card from './containers/Card/Card'

function App() {
	return (
		<div className="app">
			<Card
                id={1}
                title="React Developer"
                salary="75000"
                type="Permanent"
                location="London"
                description="React Developer Circa £75,000 City of London - Marylebone (NW1) The React Developer will work on a re-platforming of existing products ..."
                logo="https://logo.clearbit.com/company.com"
                company="Acme Company"
            />
		</div>
	);
}

export default App;
