import PropTypes from 'prop-types';
import css from './BoardPlanet.module.css'

export const BoardPlanet = ({ name,
  img,
  diameter,
  distance,
  rotation,
  temperature,
  general }) => {

  return <div className={css.board}> 
  <img src="" alt={name} className={css.imgPlanet}/>
  <h2>{name}</h2>
  <button>Більше інформації...</button>
  </div>
}

BoardPlanet.propsTypes = {
  name: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  rotation: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  general: PropTypes.string.isRequired
}
