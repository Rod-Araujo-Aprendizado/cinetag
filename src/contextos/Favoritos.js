import { createContext, useContext, useState } from "react";

export const FavorirosContext = createContext();
FavorirosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavorirosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavorirosContext.Provider>
  );
}

export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavorirosContext);

  function adicionarFavorito(novoFavorito) {
    const favoritoRepetido = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista.splice(novaLista.indexOf(novoFavorito), 1);
    return setFavorito(novaLista);
  }

  return {
    favorito,
    adicionarFavorito,
  };
}
