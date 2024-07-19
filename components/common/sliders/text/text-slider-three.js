/* eslint-disable @next/next/no-img-element */
import Slider from "react-slick";
export default function TextSliderThree() {
	const settings = {
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		cssEase: "linear",
		pauseOnHover: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="fugu--text-slider-section fugu--text-slider-section2">
			<div className="fugu--text-slider">
				<Slider {...settings}>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img src="/images/all-img/v4/star.png" alt="" />
						</div>
						<h3>Stay Tuned for the Latest Updates! </h3>
					</div>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img src="/images/all-img/v4/star.png" alt="" />
						</div>
						<h3>Insure Your Life with Trusted Coverage.</h3>
					</div>
					<div className="fugu--text-slider-data">
						<div className="fugu--text-slider-icon">
							<img src="/images/all-img/v4/star.png" alt="" />
						</div>
						<h3>Keep Up with the Latest Trends and Updates!</h3>
					</div>
				</Slider>
			</div>
		</div>
	);
}
