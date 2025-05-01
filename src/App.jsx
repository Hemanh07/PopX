import './App.css'
import { Outlet, RouterProvider } from 'react-router-dom'
import { UserDataProvider } from './data/DataProvider'

function App() {

  return (
    <>
      <UserDataProvider>
        <Outlet />
      </UserDataProvider>

    </>
  )
}

export default App
