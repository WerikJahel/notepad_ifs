import { useGlobal } from "../../../contexts/GlobalContext";
import { useEffect } from "react";
import "./Loading.css";

export default function Loading() {
  const { statusLoading, setStatusLoading, textLoading, setTextLoading } =
    useGlobal();

  if (statusLoading === "none") return null;

  useEffect(() => {
    if (statusLoading === "success" || statusLoading === "error")
      setTimeout(() => {
        setStatusLoading("none");
        setTextLoading("");
      }, 1500);
  }, [statusLoading]);

  return (
    <div
      style={{
        zIndex: "1000",
        position: "fixed",
        top: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor:
          statusLoading === "error"
            ? "rgb(231, 76, 60, .1)"
            : statusLoading === "success"
            ? "rgb(46, 204, 113, .1)"
            : "rgb(211, 211, 211, .3)",

        display: "grid",
        placeItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          placeItems: "center",
          backgroundColor: "rgb(211, 211, 211, .8)",
          padding: "2vh",
          borderRadius: "2vh",
          minWidth: "150px",
          minHeight: "120px",
        }}
      >
        {statusLoading === "loading" ? (
          <div id="spinner" />
        ) : statusLoading === "success" ? (
          <svg id="checkmark" viewBox="0 0 52 52">
            <path d="M14 27 L22 35 L38 18" />
          </svg>
        ) : (
          <svg id="crossmark" viewBox="0 0 52 52">
            <line x1="16" y1="16" x2="36" y2="36" />
            <line x1="36" y1="16" x2="16" y2="36" />
          </svg>
        )}

        <p>
          <strong>
            {statusLoading === "error"
              ? "Erro inesperado"
              : textLoading
              ? textLoading
              : statusLoading === "loading"
              ? "Carregando..."
              : statusLoading === "success"
              ? "Carregado"
              : "Erro inesperado"}
          </strong>
        </p>
      </div>
    </div>
  );
}
