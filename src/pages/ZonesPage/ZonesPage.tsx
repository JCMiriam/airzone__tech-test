import { ZonesDashboard } from "@/components/ZonesDashboard/ZonesDashboard";
import styles from "./ZonesPage.module.scss";

const ZonesPage: React.FC = () => {
  return (
    <main className={styles.zonesPage}>
      <div>
        <h2>My zones</h2>
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <ZonesDashboard />
    </main>
  );
};

export default ZonesPage;