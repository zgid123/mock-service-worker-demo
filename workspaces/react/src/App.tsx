import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Overview } from 'pages/Overview';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Overview />} />
    </Routes>
  );
}

export default App;
