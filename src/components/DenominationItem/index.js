// Write your code here

import './index.css'

const DenominationItem = props => {
  const {details, updateBalance} = props
  const {value} = details

  const onWithdraw = () => {
    updateBalance(value)
  }

  return (
    <li className="li">
      <button type="button" className="button" onClick={onWithdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
