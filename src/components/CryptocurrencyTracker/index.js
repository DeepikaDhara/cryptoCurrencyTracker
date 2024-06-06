import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'
class CryptocurrencyTracker extends Component {
  state = {
    cryptoCurrencyData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencies()
  }

  getCryptocurrencies = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()

    this.setState({
      cryptoCurrencyData: fetchedData.map(eachCryptoCurrency => ({
        id: eachCryptoCurrency.id,
        currencyName: eachCryptoCurrency.currency_name,
        usdValue: eachCryptoCurrency.usd_value,
        euroValue: eachCryptoCurrency.euro_value,
        currencyLogo: eachCryptoCurrency.currency_logo,
      })),
      isLoading: false,
    })
  }

  renderCryptoCurrenciesList = () => {
    const {cryptoCurrencyData} = this.state
    return <CryptocurrenciesList cryptoCurrencyData={cryptoCurrencyData} />
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="list-container">
        {isLoading ? this.renderCryptoCurrenciesList() : this.renderLoader()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
