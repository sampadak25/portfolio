// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Sidenav from './Sidenav'
import Main from './MainContent'
import Company from './Company'
import Contact from './Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div>
    <Sidenav />
    <Main />
    <Company />
    <Contact />
  </div>
  )
}

export default App
