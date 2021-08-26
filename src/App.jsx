import MenuBar from './components/menuBar/menuBar';
import Navbar from './components/navbar/navbar';
import SearchBar from './components/searchBar/searchBar';
import Board from './components/board/board';
import styles from './App.module.css'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import APIService from '../src/api/api'

const api = new APIService()

const categoryToEng = {
  '전체': 'all',
  '학사': 'haksa',
  '취업': 'employment',
  '창업': 'startup',
  '모집채용': 'recruit',
  '경조사': 'gyeongjosa',
  '일반': 'normal',
  '산학연구': 'research',
  '장학': 'scholarship',
  '행사안내': 'event'
}

const sectionToEng={
  '포털': 'portal',
  '컴소': 'cs',
  '경영': 'management',
  '기계': 'mechanic'
}

function App() {
  const [section, setSection] = useState('portal')
  const [infoList, setInfoList] = useState([])
  const mounted = useRef(false)
  let categoryList = ['전체', '학사', '입학', '취업', '창업']

  useEffect(() => {
    api.getAllNotice(section)
    .then(items => setInfoList(items))    
  }, [section])

  function handleSectionSelect(section) {
    const sectionEng = sectionToEng[section]
    setSection(sectionEng)
  }

  function handleCategorySelect(category) {
    const categoryEng = categoryToEng[category]
    if (categoryEng === 'all') {
      api.getAllNotice(section)
      .then(items => setInfoList(items))
    } else {
      api.getNoticeWithCategory(section, categoryEng)
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
          <MenuBar onSectionSelect={handleSectionSelect}/>
          <div className={styles.container}>
            <SearchBar/>
            <Board list={infoList} categorys={categoryList} onCategorySelect={handleCategorySelect}/>
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
