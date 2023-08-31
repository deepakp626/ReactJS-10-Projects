import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import Signup from "./pages/Auth/Signup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ForgotPasswordSend from "./pages/Auth/ForgotPasswordSend/ForgotPasswordSend";
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess";
import ResetPassWord from "./pages/Auth/ResetPassword/ResetPassWord";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools"
import Protectedroute from "./components/Auth/Protectedroute"
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<Protectedroute>
        <Dashboard />
      </Protectedroute>),
    },
    {
      path: "/transactions",
      element: (<Protectedroute>
        <TransactionPage />
      </Protectedroute>),
    },
    {
      path: "/support",
      element: (<Protectedroute>
        <Support />
      </Protectedroute>),
    },
    {
      path: "/signup",
      element: (<AlreadySigninRoute>
        <Signup />
      </AlreadySigninRoute> ),
    },
    {
      path: "/signin",
      element: (<AlreadySigninRoute>
        <Signin />
      </AlreadySigninRoute>) ,
    },
    {
      path: "/register-email-verify/:email",
      element: (<AlreadySigninRoute>
        <RegisterEmailVerify />
      </AlreadySigninRoute>) ,
    },
    {
      path: "/email-verify/:token",
      element: (<AlreadySigninRoute>
        <RegisterSuccess /> 
      </AlreadySigninRoute>),
    },
    {
      path: "/forgot-password",
      element: (<AlreadySigninRoute>
        <ForgotPassword />
      </AlreadySigninRoute>) ,
    },
    {
      path: "/forgot-success/:email",
      element: (<AlreadySigninRoute>
        <ForgotPasswordSend />
      </AlreadySigninRoute>),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (<AlreadySigninRoute>
        <ResetPassWord />
      </AlreadySigninRoute>),
    },
    {
      path: "/reset-success",
      element: (<AlreadySigninRoute>
        <ResetPasswordSuccess />
      </AlreadySigninRoute>),
    },
  ]);

  const queryClient = new QueryClient()
  return (
    <>
     <QueryClientProvider client={queryClient}>
         <RouterProvider router={router} />
         <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
    </>
  );
}

export default App;
