import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultPage } from "./pages/DefaultPage";
import { NewVideo } from './pages/NewVideo';
import { Home } from './pages/Home';
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} ></Route>
          <Route path="/novoVideo" element={<NewVideo />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );  
}


