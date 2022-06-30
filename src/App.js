import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 5;
  const apiKey = '51800353ee264b38af1b981e2a98d1c4';


  return (
    <div>
      <Router>
        <NavBar />

        {/*<News pageSize={pageSize} country="in" category="sport"/>*/}
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}></Route>
          <Route exact path="/business" element={<News apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />}> </Route>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} key="" pageSize={pageSize} country="in" category="entertainment" />}> </Route>
          <Route exact path="/general" element={<News apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />}> </Route>
          <Route exact path="/health" element={<News apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />}> </Route>
          <Route exact path="/science" element={<News apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />}> </Route>
          <Route exact path="/sports" element={<News apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />}> </Route>
          <Route exact path="/technology" element={<News apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />}> </Route>
          {/*}  <Route index element={<Home />} />
       <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
    <Route index element={<LeagueStandings />} />
    </Route>*/}

        </Routes>
      </Router>
    </div>
  )

}

export default App;