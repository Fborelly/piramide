import './App.css';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
  RouterProvider
  
} from 'react-router-dom'
import { PersonalInfo } from './pages/PersonalInfo';
import { Products } from './pages/Products';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Login/>
//   },
//   {
//     path: '/home',
//     element: <Home/>,
//     children: [
//       {
//         path: '/personal-info',
//         element: <PersonalInfo/>
//       },
//       {
//         path: '/products',
//         element: <Products/>
//       }
//     ]
//   }
// ])

export const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}>
          <Route path='' element={<Products/>}/>
          <Route path='personal-info' element={<PersonalInfo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    // <RouterProvider router={router} />
  )
}
