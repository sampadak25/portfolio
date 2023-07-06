// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Sidenav from './Sidenav'
import Main from './MainContent'
import Company from './Company'
import Contact from './Contact'
import Technology from './Technology'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <div >
    {/* <div className='bubble'> </div> */}

    <Sidenav />
    <Main />
    <Company />
    <Technology />
    <Contact />
   
  </div>
  )
}

export default App
