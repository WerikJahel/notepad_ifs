import { useEffect } from "react";
import { useGlobal } from "../../../contexts/GlobalContext";
import "./header.css";

export default function Header() {
  const { setStatusLoading, setTextLoading, centralName, setTextNotAccess } =
    useGlobal();

  const idUser = JSON.parse(localStorage.getItem("access")) || null;

  const renderMenu = () => (
    <nav>
      <ul>
        {!idUser ? (
          <li key={idUser}>
            <p>
              <a>{`${idUser}📋`}</a>
            </p>
          </li>
        ) : (
          ""
        )}

        <li>
          <p>
            {!idUser ? (
              <a onClick={() => logout()} key={"sair"}>
                sair
              </a>
            ) : (
              <a href="/login" key={"login"}>
                login
              </a>
            )}
          </p>
        </li>
      </ul>
    </nav>
  );

  function logout() {
    if (confirm("Você deseja encerrar sessão de login?")) {
      localStorage.clear();

      window.location.reload();
    }
  }

  useEffect(() => {
    document.title = centralName;
  }, [centralName]);

  return (
    <header>
      <div>
        <img src="/img/ifs_logo.png" alt="Logo IFS" />
      </div>

      <p>Bloco de Notas</p>

      <div>
        <img src="/img/do-utilizador.png" alt="Usuário" />

        {renderMenu()}
      </div>
    </header>
  );
}
