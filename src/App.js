import { createBrowserRouter, RouterProvider, useLoaderData } from 'react-router-dom';
import './App.css';
import Quiz from './Components/Quiz/Quiz';
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
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
        }
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
