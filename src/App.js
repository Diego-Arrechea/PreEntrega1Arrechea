import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Error from "./pages/error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<ItemListContainer />} />
        <Route path="category/:category" element={<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
