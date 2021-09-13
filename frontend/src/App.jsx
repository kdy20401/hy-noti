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
  const [infoList, setInfoList] = useState([])
  const section = useRef('portal')
  const mounted = useRef(false)
  let categoryList = ['전체', '학사', '입학', '취업', '창업']
  let sectionList = ['포털', '컴소', '경영', '기계']

  useEffect(() => {
    if (!mounted.current) {
      api.getAllNotice(section.current)
      .then(items => setInfoList(items))    

      mounted.current = true
    }
  })

  function handleSectionSelect(s) {
    const sectionEng = sectionToEng[s]
    api.getAllNotice(sectionEng)
    .then(items => setInfoList(items))
  }

  function handleCategorySelect(c) {
    const categoryEng = categoryToEng[c]
    if (categoryEng === 'all') {
      api.getAllNotice(section.current)
      .then(items => setInfoList(items))
    } else {
      api.getNoticeWithCategory(section.current, categoryEng)
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
          <MenuBar sectionList={sectionList} onSectionSelect={handleSectionSelect}/>
          <div className={styles.container}>
            <SearchBar/>
            <Board list={infoList} categoryList={categoryList} onCategorySelect={handleCategorySelect}/>
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
