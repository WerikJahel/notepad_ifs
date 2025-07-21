import { useState } from "react";
import Form from "./components/form/form";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || {
      0: {
        titulo: "Título 01",
        descricao:
          " Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01 Descrição 01",
        edicao: 2500000,
      },
      1: { titulo: "Título 02", descricao: "Descrição 02", edicao: 65000000 },
      2: { titulo: "Título 01", descricao: "Descrição 01", edicao: 2500000 },
      3: { titulo: "Título 02", descricao: "Descrição 02", edicao: 65000000 },
      4: { titulo: "Título 01", descricao: "Descrição 01", edicao: 2500000 },
      5: { titulo: "Título 02", descricao: "Descrição 02", edicao: 65000000 },
    }
  );

  const [popUpInfo, setPopUpInfo] = useState();
  const [popUpForm, setPopUpForm] = useState();
  const [sketch, setSketch] = useState();

  const renderNotes = () => {
    const arrayElements = [];

    Object.entries(notes)
      .sort((a, b) => a.edicao - b.edicao)
      .forEach(([criacao, note]) => {
        const { titulo, descricao, edicao } = note;

        arrayElements.push(
          <div onClick={() => setPopUpInfo({ criacao, ...note })}>
            <div>
              <h3>{titulo}</h3>
              <p>{descricao}</p>
            </div>
            <p>edição: {new Date(edicao).toLocaleString()}</p>
          </div>
        );
      });

    if (arrayElements.length) {
      return arrayElements;
    } else {
      return "Adicione uma nota...";
    }
  };

  return (
    <div id="body">
      <div id="notes">{renderNotes()}</div>

      {popUpForm && (
        <div
          className="pop-ups"
          onClick={(e) => {
            const container = document.getElementById("pop-up-Form");

            if (!container.contains(e.target)) {
              if (popUpForm.titulo !== "" || popUpForm.descricao !== "")
                setSketch(popUpForm);

              setPopUpForm();
            }
          }}
        >
          <Form note={popUpForm} setNote={setPopUpForm} setSkecth={setSketch} />
        </div>
      )}

      <div id="buttons-fixed">
        {!popUpForm && sketch && (
          <img
            src="/img/skecth.png"
            alt="Adicionar"
            title="Adicionar"
            id="add"
            onClick={() => setPopUpForm(sketch)}
          />
        )}
        {!popUpForm && !sketch && (
          <img
            src="/img/add.png"
            alt="Adicionar"
            title="Adicionar"
            id="add"
            onClick={() => setPopUpForm({ titulo: "", descricao: "" })}
          />
        )}
      </div>
    </div>
  );
}

export default App;
