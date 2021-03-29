import logo from './logo.svg';
import './App.css';
import {useState } from 'react'


function App() {
	const [value,setValue] = useState(0);
	const [select,setSelect] = useState('prime');


	const inputValue = (e) => {
		var input_value = e.target.value;
		setValue(input_value >= 0 ? input_value : 1);
	}

	const isSquare = (n) => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
	};

	//Equation modified from http://www.geeksforgeeks.org/check-number-fibonacci-number/
	const isFibonacci = (numberToCheck) =>
	{
	    // numberToCheck is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
	    // is a perferct square
	    return isSquare(5*numberToCheck*numberToCheck + 4) ||
	           isSquare(5*numberToCheck*numberToCheck - 4);
	}

	function isPrime(num) {
	  var sqrtnum=Math.floor(Math.sqrt(num));
	    var prime = num != 1;
	    for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
	        if(num % i == 0) {
	            prime = false;
	            break;
	        }
	    }
	    return prime;
	}

	const condition = () => {
		console.log(select)
		if(select === 'prime' ) {
			return value > 0 && isPrime(value)
		}

		return isFibonacci(value)
	}

  return (
    <div className="App">
      <div className="container">
      	<div className="col-left">
      		<input min="0" type="number" value={value} onChange={inputValue}/>
	      </div>
	      <div className="col-middle">
	      	<select value={select} onChange={(e)=>setSelect(e.target.value)}>
	      		<option value="prime">isPrime</option>
	      		<option value="fibanacci">IsFibanacci</option>
	      	</select>
	      </div>
	      <div className="col-right">
	      	{condition().toString()}
	      </div>
      </div>
    </div>
  );
}

export default App;
