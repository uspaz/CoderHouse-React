import './styles/HeaderItem.scss'

const HeaderItem = ( {greeting, slogan}) => {
  return (
    <div className="header--title">
      <h1>{greeting}</h1>
      <p>{slogan}</p>
    </div>
  )
}

export default HeaderItem