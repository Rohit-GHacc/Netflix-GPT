import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Body from './components/Body.jsx';

function App() {
  const appRouter = createBrowserRouter([
    {
    path: "/",
    element: <Body />,          // 👈 yaha Body as parent
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
    ],
  },
  ]);

  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} >
          <Body/>
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
