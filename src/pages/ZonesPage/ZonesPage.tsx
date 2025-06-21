import { ZonesDashboard } from "@/components/ZonesDashboard/ZonesDashboard";
import styles from "./ZonesPage.module.scss";

const ZonesPage: React.FC = () => {
  return (
    <main className={styles.zonesPage}>
      <div className={styles.zonesTitle}>
        <h2 className={styles.zonesTitle__text}>My zones</h2>
        <div className={styles.zonesTitle__settings}>
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