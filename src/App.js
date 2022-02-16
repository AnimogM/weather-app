import { useState, useEffect } from "react";
import DisplayResult from "./components/DisplayResult";
const API_KEY = "3812821b256871b4e510bd732397b64f";
function App() {
	const [city, setCity] = useState("");
	const [query, setQuery] = useState("new york");
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [error, setError] = useState("");
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${API_KEY}`;

	const getWeather = async (url) => {
		setData([])
		setLoading(true);
		setError(false);
		try {
			const response = await fetch(url);
			const datas = await response.json();
			setLoading(false);
			if (datas.cod === "404") {
				setError(true);
				setData(datas.message);
			}else{
				setData(datas);
			}
			
		} catch (error) {
			console.log(error.message);
			setLoading(false);
		}
	};
	useEffect(() => {
		getWeather(url);
	}, [url]);

	const handleSearch = (e) => {
		if(!city){
			setError(true)
			setData("Empty input field")
		}
		e.preventDefault();
		setQuery(city);
	};
	return (
		<main>
			<div className="container">
				<form onSubmit={handleSearch}>
					<input
						type="text"
						placeholder="Enter city or country name..."
						value={city}
						onChange={(e) => setCity(e.target.value)}
					/>
				</form>
				{loading && <p className="load">loading ...</p>}
				{error && <h2 className="err">{data}</h2>}
				{data.main? <DisplayResult data={data}/>: ""}
			</div>
		</main>
	);
}

export default App;
