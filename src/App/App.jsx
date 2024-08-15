import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./App.styles";
import { Login } from "./pages/Login/Login";
import { Profile } from "./pages/Profile/Profile";
import { AuthProvider } from "./providers/authProvider";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { routeMappings } from "./consts/routeMappings";
import { AuthRoute } from "./components/AuthRoute/AuthRoute";
import { NoAuthRoute } from "./components/NoAuthRoute/NoAuthRoute";

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AuthRoute />}>
            <Route path={routeMappings.profile} element={<Profile />} />
          </Route>

          <Route element={<NoAuthRoute />}>
            <Route path={routeMappings.login} element={<Login />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
