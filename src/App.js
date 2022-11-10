import React, { useState } from "react";

import "./App.css";
import Header from "./Component/Header/Header";
import Edit from "../src/Component/Edit/Edit.jsx";

function App() {
  const [isEdit, setEdit] = useState(false);

  return (
    <div className="App">
      {isEdit ? <Edit setEdit={setEdit} /> : <Header setEdit={setEdit} />}
    </div>
  );
}

export default App;
