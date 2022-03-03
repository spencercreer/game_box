import { useState, useEffect } from "react"

import Header from './components/Header'
import Page from './components/Page'

import './App.css'

function App() {

  const [currentPage, setCurrentPage] = useState()

  useEffect(() => {
    document.title = `Game Box | ${currentPage}`
  }, [currentPage]);

  return (
    <>
      <Header
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <Page currentPage={currentPage} />
      {/* <Footer /> */}
    </>
  );
}

export default App
