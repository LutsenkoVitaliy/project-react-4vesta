import { PageTitle } from './PageTitle/PageTitle';
import { PlanetList } from './PlanetList/PlanetList';
import catalogPlanet from '../catalog-planet.json';

export const App = () => {
  return (
    <div>
      <PageTitle text="WikiПланети" />
      <PlanetList planets={catalogPlanet} />
    </div>
  );
}


