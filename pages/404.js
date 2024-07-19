/* eslint-disable react/no-unescaped-entities */
export default function ErrorPage() {
	return (
		<div className="section">
			<div className="container">
				<div className="fugu-error-content wow fadeInUpX">
					<h1>🙊🎁</h1>
					<h2>We are coming soon...</h2>
					<p>
					We are bringing you something amazing. Enter your email to receive a notification email when
					we launch it.
					</p>
					<a  href="">
						Go To Homepage
					</a>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	return { props: { header: "six", footer: "one" } };
}
