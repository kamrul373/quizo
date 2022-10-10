import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Main from './Layout/Main';
import loadTopic from './Utility/loadTopic';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: loadTopic,
      children: [
        { path: "/", loader: loadTopic, element: <Home></Home> },
        { path: "/home", loader: loadTopic, element: <Home></Home> }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
