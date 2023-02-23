import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

const URL = 'http://localhost/backend/index.php';

function App()
{
	const [desc, setDesc] = useState('');
	const [amount, setAmount] = useState('');
	useEffect(() =>
	{
		axios.get(URL).then((response) =>
		{
			setDesc(response.data);
		}).catch(error =>
		{
			alert(error);
		});
	}, []);
	
	function handleSubmit(e)
	{
		e.preventDefault();
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h3>Shopping list</h3>
			</div>
			<div>
				<label>New item </label>
				<input type="text" value={desc} onChange={e => setDesc(e.target.value)}/>
				<input type="number" value={amount} onChange={e => setAmount(e.target.value)}/>
				<button>Add</button>
			</div>
		</form>
	);
}

export default App;
