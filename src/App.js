import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Error from './Components/Error/Error';
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Home from './Home/Home';
import Main from './Layout/Main';
import loadTopic from './Utility/loadTopic';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      loader: loadTopic,
      errorElement: <Error></Error>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
        },
        { path: "/topics", element: <Topics></Topics> },
        { path: "/statistics", element: <Statistics></Statistics> },
        { path: "/blogs", element: <Blogs></Blogs> },
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
