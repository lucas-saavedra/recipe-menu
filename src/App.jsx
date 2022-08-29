
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import Home from "./components/Menu/Home";
import NavBar from "./components/NavBar/NavBar";
import { MenuProvider } from "./context/menuContext";
import PageNotFound from "./components/DisplayMessage/DisplayMessage";
import useToken from "./hooks/useToken";
import Login from "./components/Login/Login";
import SearchListContainer from './components/Search/Container';

function App() {

  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (

    < MenuProvider >
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <NavBar />
          <Routes>
            <Route exact path={ROUTES.MENU} element={<Home />} />
            <Route exact path={ROUTES.SEARCH} element={<SearchListContainer />} />
            <Route exact path={ROUTES.NOT_FOUND} element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MenuProvider >

  );
}

export default App;
