import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return ( 
	<h1> {props.text} </h1>
	)
}

const Button = (props) =>{
	return ( 
			<button onClick={props.handleClick}>
				{props.text}
			</button>
		)
}
	

const StatisticLine = (props) => {
	return(
		<div>
			{props.text} {props.value}
		</div>
	)


}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let all = 0

  return (
    <div>
		<Header text='Give feedback'/>

		<Button handleClick={() => setGood(good+1)} text='good'/>
	  	<Button handleClick={() => setNeutral(neutral+1)} text='neutral'/>
	  	<Button handleClick={() => setBad(bad+1)} text='bad'/>
	  
	  	<Header text='Statistics'/>
		<table>
			<tbody>
				<tr>
					<td>
						<StatisticLine text = 'good' value = {good}/>
						<StatisticLine text = 'neutral' value = {neutral}/>
						<StatisticLine text = 'bad' value = {bad}/>
						<StatisticLine text = 'all' value = {all = good + bad + neutral}/>
						average {(good*1+neutral*0+bad*(-1))/(all)} <br></br>
						positive {((good)/(all))*100} %
					</td>
				</tr>
			</tbody>
		</table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)