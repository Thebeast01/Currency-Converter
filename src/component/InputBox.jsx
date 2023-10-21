import {React , useId} from 'react'
//# useId hooks give uniqe id to the attributes :

function InputBox(
  //# An Array consisting of all the value that the function will get:

  {
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], //# Array which holds the value of the currency Options like usd, inr, euro etc
  selectCurrency = 'usd',
  amountDiable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId() // Gives unique value using numbers string and characters : It just for optimization

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          //# Binding unique id to input:

          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDiable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //# Becoz javascript most of the time return the value in string thus we will wrap the "e.target.vlaue" into a Number to convert it from string to number :
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (

            <option key = {currency} value={currency}>
              {/* //# Always use key when ever using the loops in react to prevent from the performance degredation : */}
              {currency}
            </option>
          ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;
