// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetailList, updateActiveTab, isActive} = props
  const {tabId, displayText} = tabDetailList

  const onClickTab = () => {
    updateActiveTab(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''
  return (
    <li className="tab-list-container">
      <button
        type="button"
        className={`tab-button ${activeTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
