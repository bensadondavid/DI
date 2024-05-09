import { useState } from 'react'
import './App.css'
import BuggyCounter from './BuggyCounter'
import ErrorBoundary from './ErrorBoundary'
import Color, {Child} from './color'

function App() {

  return (
    <>
    <ErrorBoundary>
     <BuggyCounter />
     </ErrorBoundary>
     <Color/>
     <Child/>
    </>
  )
}

export default App
