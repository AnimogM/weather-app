import React from "react";

const DisplayResult = ({ data }) => {

	const {
		main: { temp, feels_like, humidity },
		name,
		wind: { speed },
		sys: { country },
        weather
	} = data;

	return (
		<>
			<section className="result">
				<div>
					<p>
						{data.main && (
							<span>
								{name}, <span className="con">{country}</span>
							</span>
						)}
					</p>
					<h3>
						{data.main && temp.toFixed()}
						<sup>o</sup>C
					</h3>
				</div>
				<span className="status">{weather[0].main}</span>
			</section>
			<section className="box">
				<div className="box-content">
					<div>
						<h4>
							{data.main && feels_like.toFixed()}
							<sup>o</sup>C
						</h4>
						<p>Feels Like</p>
					</div>
					<div>
						<h4>{data.main && speed.toFixed()} MPH</h4>
						<p>wind speed</p>
					</div>
					<div>
						<h4>{data.main && humidity.toFixed()}%</h4>
						<p>Humidity</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default DisplayResult;
