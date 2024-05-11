// pages
import {
  Home,
  About,
  Create,
  Contact,
  Login,
  Signup,
  SingleRecipe,
} from "./pages";
// components
import { RecipiesList, ProtectedRoutes } from "./components";

// context
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context/globalContext";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";

// action
import { action as SignUpAction } from "./pages/Signup";
import { action as LoginAction } from "./pages/Login";
import { action as CreateAction } from "./pages/Create";

// react-router-dom
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

// layout
import MainLayout from "./layout/MainLayout";

function App() {
  const { user, dispatch, authReady } = useContext(GlobalContext);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/create",
          element: <Create />,
          action: CreateAction,
        },
        {
          path: "/recipe/:id",
          element: <SingleRecipe />,
        },
        {
          path: "recipes",
          element: <RecipiesList />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
      action: LoginAction,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
      action: SignUpAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);

  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
