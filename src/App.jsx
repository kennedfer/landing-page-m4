import { useEffect, useState } from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Card } from "./components/Card";

import axios from "axios";

function App() {
  const getApiData = async () => {
    const [pollutionData, deforestationData] = await Promise.allSettled([
      axios("http://localhost:3000/pollution"),
      axios("http://localhost:3000/desmatacao"),
    ]);

    if (pollutionData.value.status == 200) {
      setPollutionInfo(pollutionData.value.data);
    }

    if (deforestationData.value.status == 200) {
      setDeforestationInfo(deforestationData.value.data);
    }
  };

  const [pollutionInfo, setPollutionInfo] = useState([]);
  const [deforestationInfo, setDeforestationInfo] = useState([]);

  useEffect(() => getApiData, []);

  return (
    <div className="app-container">
      <header className="header-container">
        <h2 className="header-title">Consciente-se</h2>
        <a className="onu-link" href="https://brasil.un.org/pt-br">
          ONU
        </a>
        <a className="pda-link" href="https://programadoresdoamanha.org/">
          PDA
        </a>
      </header>
      <Main />
      <div className="cards-container">
        {pollutionInfo.map((pollution) => (
          <Card
            key={pollution.id}
            title={pollution.type}
            message={pollution.description}
          />
        ))}

        {deforestationInfo.map((deforestationInfo) => (
          <Card
            key={deforestationInfo.ano}
            title={"Desmatamento"}
            message={deforestationInfo.informacao}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
