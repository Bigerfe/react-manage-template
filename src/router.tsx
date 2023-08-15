import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import WelCome from './pages/welcome'
import Ms1 from './pages/ms1'
import Ms2 from './pages/ms2'

function ErrorPage(){
  return <div>404啦！</div>
}

let router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage/>,
    element: <WelCome/>,
  },
  {
    path: '/welcome',
    Component: WelCome
  },
  {
    path: 'ms1',
    Component: Ms1
  },
  {
    path: 'ms2',
    Component: Ms2
  }
]);

export default function CustomerRouter() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
