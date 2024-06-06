import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrencyHeader = () => (
    <div className="crypto-header">
      <p className="">Coin Type</p>
      <div className="">
        <p className="">USD</p>
        <p className="">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrencyView = () => {
    const {cryptoCurrencyData} = this.props

    return (
      <div className="">
        {this.renderCryptoCurrencyHeader()}
        <ul className="list-items">
          {cryptoCurrencyData.map(eachCryptoCurrency => (
            <CryptocurrencyItem
              key={eachCryptoCurrency.id}
              cryptoCurrencyDetails={eachCryptoCurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <div className="">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        {this.renderCryptoCurrencyView()}
      </div>
    )
  }
}
export default CryptocurrenciesList
