/* eslint-disable @next/next/no-img-element */
import CountUp from "react-countup";

export default function ArtWorkSection() {
	return (
		<div className="fugu--artwork-section">
			<div id="fugu--counter2"></div>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<div className="fugu--artwork-right">
							<div className="fugu--artwork-thumb" id="rotatetwo">
								<img
									className="wow fadeInRight"
									data-wow-delay="0.10s"
									src="/images/all-img/v4/2_side_love.png"
									alt=""
								/>
								
							</div>
							<div className="fugu--shape-art">
								<img src="/images/shape2/shape-v2-3.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="fugu--default-content content-black">
							<h2>Revolutionizing Life Insurance with Blockchain</h2>
							<p>
Insure is poised to become a billion-dollar venture, offering future airdrops and exclusive opportunities to buy life insurance at launch. Join us in revolutionizing the insurance industry with blockchain technology and secure your spot in the future of decentralized finance.
							</p>
							<div className="fugu--counter-wrap fugu--counter-wrap2">
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="45" className="fugu--counter"></span>
										<CountUp end={613690} />
										<strong></strong>
									</h2>
									<p>Total insurance bought</p>
								</div>
								<div className="fugu--counter-data">
									<h2>
										<span data-percentage="86" className="fugu--counter"></span>
										<CountUp end={927.029} />
										<strong>m</strong>
									</h2>
									<p>Marcketcap</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
