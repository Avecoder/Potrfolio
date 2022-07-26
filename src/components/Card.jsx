import { Link } from 'react-router-dom'

const Card = ({id, imageUrl, title, description}) => {

  return (
    <Link to={`/info/${id}`} className="dark:text-white card text-center transition ease-in-out hover:scale-105 duration-300">
      <img src={imageUrl} className="rounded-md" alt="preview"/>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm font-light">{description}</p>
    </Link>
  )
}

export default Card
