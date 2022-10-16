// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetailsList} = props
  const {appName, imageUrl} = appDetailsList

  return (
    <li className="app-list-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
