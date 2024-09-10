import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home';
import Search from './views/Search/Search';
import JobInfo from  './views/JobInfo/JobInfo';
import News from './views/News/News';
import Login from './views/Login/Login';
import Setting from './views/Setting/Setting';
import RecuriterProfile from './views/RecuriterProfile/RecuriterProfile';
import 'remixicon/fonts/remixicon.css'
import { Toaster } from 'react-hot-toast';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/job/:id",
    element: <JobInfo />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/setting",
    element: <Setting />,
  },
  {
    path: "/profile",
    element: <RecuriterProfile />,
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  }
]);

root.render(
<>
<RouterProvider router={router}/> 
<Toaster/>
</>);



