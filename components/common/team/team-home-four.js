import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function TeamHomeFour() {
	return (
		<div className="fugu--team-section version-04 fugu--team-two">
			<div className="container">
				<div className="fugu--section-title">
					<div className="fugu--default-content content-black">
						<h2>Meet our creative team</h2>
						<p>
							A creative workplace gives employees the ability to come up with unique solutions to
							challenges instead of simply told what to do.
						</p>
					</div>
				</div>
				<div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
					<div className="col-lg-3 col-md-6" style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0s">
							<div className="fugu--team-thumb">
								<img src="/images/all-img/v4/team4.png" alt="Eleanor Pena" />
							</div>
							<div className="fugu--team-data">
								<h4>Chetan Saini</h4>
								<p>CEO & blockchain dev</p>
								<div className="fugu--social-icon fugu--social-icon2">
									<ul>
										<li>
											<Link href={"#"}>
												<img src="/images/social2/twitter.svg" alt="Twitter" />
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/social2/facebook.svg" alt="Facebook" />
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/social2/instagram.svg" alt="Instagram" />
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/social2/github.svg" alt="GitHub" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-md-6" style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
						<div className="fugu--team-wrap wow fadeInUpX" data-wow-delay="0.30s">
							<div className="fugu--team-thumb">
								<img src="/images/all-img/v4/team1.png" alt="Jerome Bell" />
							</div>
							<div className="fugu--team-data">
								<h4>Neeraj rathi</h4>
								<p>ceo & blockchain dev</p>
								<div className="fugu--social-icon fugu--social-icon2">
									<ul>
										<li>
											<Link href={"#"}>
												<img src="/images/social2/twitter.svg" alt="Twitter" />
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/social2/facebook.svg" alt="Facebook" />
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/social2/instagram.svg" alt="Instagram" />
											</Link>
										</li>
										<li>
											<Link href={"#"}>
												<img src="/images/social2/github.svg" alt="GitHub" />
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}