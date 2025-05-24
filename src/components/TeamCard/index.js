import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {teamImageUrl, name, id} = teamDetails
  return (
    <Link className="list-cont-home" to={`/team-matches/${id}`}>
      <li className="li-fjdk">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
