// Write your code here

import {Component} from 'react'
import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = amount => {
    const {balance} = this.state
    this.setState(prevBalance => ({balance: prevBalance.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const nameSlice = name.slice(0, 1)

    return (
      <div className="container">
        <div className="card-container">
          <div className="name-container">
            <div>
              <p className="firstLetter">{nameSlice}</p>
            </div>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="below-container">
            <p className="withdraw">Withdraw</p>
            <p className="choose">CHOOSE SUM (IN RUPEES)</p>
            <ul className="button-container">
              {denominationsList.map(each => (
                <DenominationItem
                  key={each.id}
                  details={each}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
