import Layout from "./ui/components/LayoutComponent/Layout";
import ZonesPage from "./pages/ZonesPage/ZonesPage";
import { ZonesProvider } from "./ui/context/ZonesContext/ZonesProvider";

function App() {
  return (
    <ZonesProvider>
      <Layout>
        <ZonesPage />
      </Layout>
    </ZonesProvider>
  );
}

export default App;
