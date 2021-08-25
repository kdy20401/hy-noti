import MenuBar from './components/menuBar/menuBar';
import Navbar from './components/navbar/navbar';
import SearchBar from './components/searchBar/searchBar';
import Board from './components/board/board';
import styles from './App.module.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import APIService from '../src/api/api'

const api = new APIService

function App() {
  const [section, setSection] = useState('portal')
  const [infoList, setInfoList] = useState([])
  const mounted = useRef(false)

  useEffect(() => {
    !mounted.current && 
    api.getAllPortalNotice()
      .then(items => setInfoList(items))
    mounted.current = true
  })

  function handleCategorySelect(category) {
    if (category === 'all') {
      api.getAllPortalNotice()
      .then(items => setInfoList(items))
    } else {
      api.getPortalNoticeWithCategory(category)
      .then(items => setInfoList(items))
    }
  }


  return (
    <BrowserRouter>
      <Navbar/>

      <Switch>
        <Route exact path='/'>
          <Redirect to='/notice'/>
        </Route>
        <Route exact path='/notice'>
          <MenuBar/>
          <div className={styles.container}>
            <SearchBar/>
            <Board list={infoList} onCategorySelect={handleCategorySelect}/>
          </div>
        </Route>
        <Route exact path='/board'>
          <h1>board view</h1>
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
