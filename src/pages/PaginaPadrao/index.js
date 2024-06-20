import Cabecalho from "components/Cabecalho";
import Container from "components/Container";
import Footer from "components/Footer";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
  return (
    <main>
      <Cabecalho />
      <FavoritosProvider>
        <Container>
          <Outlet />
        </Container>
      </FavoritosProvider>
      <Footer />
    </main>
  );
}
