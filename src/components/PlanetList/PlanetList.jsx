import PropTypes from 'prop-types';
import { BoardPlanet } from '../BoardPlanet/BoardPlanet'
import css from './PlanetList.module.css'

export const PlanetList = ({ planets }) => {
  console.log(planets);
  return <div className={css.planetList}>
    {planets.map(({name, img, diameter, distance, rotation, temperature}) => <div >
      <BoardPlanet key={name} img={img} name={name} diameter={diameter} 
      distance={distance} rotation={rotation} temperature={temperature}/>
    </div>)}
  </div>;
}



PlanetList.propsTypes = {
  planets: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      diameter: PropTypes.string.isRequired,
      distance: PropTypes.string.isRequired,
      rotation: PropTypes.string.isRequired,
      temperature: PropTypes.string.isRequired
    })
  )
}