import React, { useState, useEffect } from "react";
import "./App.css";

import Loader from "./components/Loader/Loader";
import Anim from "./components/Anim/Anim";
import CustomCurcor from "./components/CustomCursor/CustomCurcor";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Имитация загрузки 3 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <CustomCurcor/>
      {loading && <Loader />}
      {!loading && <Anim />}
    </>
  );
};

export default App;
