import "./form.css";

function Form({ note, setNote, setSkecth }) {
  return (
    <fieldset id="pop-up-Form">
      <legend>{note.titulo ? note.titulo : "Nota"}</legend>

      <form>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            value={note.titulo}
            minLength={3}
            maxLength={100}
            onChange={({ target }) =>
              setNote({ ...note, titulo: target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            value={note.descricao}
            minLength={3}
            maxLength={1000}
            rows={12}
            onChange={({ target }) =>
              setNote({ ...note, descricao: target.value })
            }
          />
        </div>

        <div>
          <button type="submit">Salvar</button>
          <button
            type="button"
            onClick={() => {
              if (note.titulo || note.descricao) {
                if (confirm("Deseja descartar alterações?")) {
                  setSkecth();
                  setNote();
                }
              } else {
                setSkecth();
                setNote();
              }
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </fieldset>
  );
}

export default Form;
