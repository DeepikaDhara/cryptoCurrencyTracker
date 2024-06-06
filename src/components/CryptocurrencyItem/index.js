import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrencyDetails} = props
  const {
    currencyName,
    usdValue,
    euroValue,
    currencyLogo,
  } = cryptoCurrencyDetails
  return (
    <li className="container">
      <div className="logo-and-title-container">
        <img src={currencyLogo} alt={currencyName} />
        <p className="">{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p className="">{usdValue}</p>
        <p className="">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
