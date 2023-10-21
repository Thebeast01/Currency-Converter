import { InputBox } from './component';
import useCurrencyInfo from './hooks/useCurrencyinfo';
import { useState } from 'react';
function App() {
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState('usd');
	const [to, setTo] = useState('inr');
	const [convertedAmount, setConvertedAmount] = useState(0);

	const currencyInfo = useCurrencyInfo(from);
	const options = Object.keys(currencyInfo);
	//# Swapping functionality :
	const swap = () => {
		setFrom(to);
		setTo(from);
		setConvertedAmount(amount);
		setAmount(convertedAmount);
	};
	//#Function to convert

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	};
	return (
		<div
			className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
			style={{
				backgroundImage: `url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=1742&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
			}}
		>
			<div className='w-full'>
				<div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-slate-600/60 '>
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<div className='w-full mb-1'>
							<InputBox label='From'
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setAmount(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              />
						</div>
						<div className='relative w-full h-0.5'>
							<button
								type='button'
								className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
							>
								swap
							</button>
						</div>
						<div className='w-full mt-1 mb-4'>
							<InputBox label='To'
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
               />
						</div>
						<button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg' onClick={convert}>
							Convert {from.toUpperCase() } to {to.toUpperCase()}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;