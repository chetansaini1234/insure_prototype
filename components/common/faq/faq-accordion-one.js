import { Accordion } from "react-bootstrap";
export default function FaqAccordionOne() {
	return (
		<div className="fugu--faq-section fugu--section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="fugu--default-content content-black">
							<h2>Frequently asked questions</h2>
							<p>
								FAQ used to refer to a list of answers to typical Company questions that users might ask.
							</p>
						</div>
					</div>
					<div className="col-lg-7 offset-lg-1">
						<div className="fugu--accordion-one">
							<Accordion defaultActiveKey="0">
								<Accordion.Item eventKey="0">
									<Accordion.Header>What is an Insure?</Accordion.Header>
									<Accordion.Body>
									An insurer is a company that provides insurance coverage. In the I Token project, “Insure” refers to our decentralized life insurance platform using blockchain technology for transparency and security.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>What makes an Insure valuable?</Accordion.Header>
									<Accordion.Body>An Insure is valuable because it offers transparency, security, and efficiency through blockchain technology. By using smart contracts and decentralized oracles, it ensures fair claims processing and reduces fraud, enhancing trust and accessibility for policyholders.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>What’s the Difference between Insure and normal life insurance?</Accordion.Header>
									<Accordion.Body>
									Insure, our decentralized life insurance platform, leverages blockchain technology for transparency, security, and efficiency. Unlike traditional life insurance, which relies on centralized entities and manual processes, Insure uses smart contracts and decentralized oracles to automate and verify claims, reducing fraud and increasing accessibility.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>What is Insure’s I Token future??</Accordion.Header>
									<Accordion.Body>
									The future of Insure’s I Token involves increasing its value and utility through our deflationary model, where 90% of tokens collected as premiums are burned. This approach aims to reduce supply, potentially enhance value, and support the growth of a robust, decentralized insurance ecosystem.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="4">
									<Accordion.Header>How does Insure ensure fairness in its claims process?</Accordion.Header>
									<Accordion.Body>
									Insure ensures fairness in its claims process through the use of decentralized oracles and smart contracts, which provide automated, transparent, and verifiable claim assessments, minimizing the risk of fraud and bias.
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
