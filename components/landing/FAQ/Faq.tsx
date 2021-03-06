import FaqComponent from "react-faq-component";

const Faq: React.FC = (): JSX.Element => {
	const data = {
		rows: [
			{
				title:
					"How can you give me a quote without seeing the work in person?",
				content: `We know it sounds unbelivable but it's definitely possible, over the years we've perfected our pricing system to work to pinpoint accuracy so it generates the most accurate market price for your project.`,
			},
			{
				title:
					"How can you give me a quote without seeing the work in person?",
				content: `We know it sounds unbelivable but it's definitely possible, over the years we've perfected our pricing system to work to pinpoint accuracy so it generates the most accurate market price for your project.`,
			},
			{
				title:
					"How can you give me a quote without seeing the work in person?",
				content: `We know it sounds unbelivable but it's definitely possible, over the years we've perfected our pricing system to work to pinpoint accuracy so it generates the most accurate market price for your project.`,
			},
			{
				title:
					"How can you give me a quote without seeing the work in person?",
				content: `We know it sounds unbelivable but it's definitely possible, over the years we've perfected our pricing system to work to pinpoint accuracy so it generates the most accurate market price for your project.`,
			},
			{
				title:
					"How can you give me a quote without seeing the work in person?",
				content: `We know it sounds unbelivable but it's definitely possible, over the years we've perfected our pricing system to work to pinpoint accuracy so it generates the most accurate market price for your project.`,
			},
			{
				title:
					"How can you give me a quote without seeing the work in person?",
				content: `We know it sounds unbelivable but it's definitely possible, over the years we've perfected our pricing system to work to pinpoint accuracy so it generates the most accurate market price for your project.`,
			},
		],
	};
	const styles = {
		bgColor: "#FFF3F3",
		rowTitleColor: "black",
		rowContentColor: "grey",
		rowContentPaddingTop: "7px",
		rowContentPaddingLeft: "47px",
		rowContentPaddingBottom: "44px",
	};
	return (
		<div>
			<p className="text-xl font-montserrat-bold">Common Questions</p>
			<div className="pt-14">
				<FaqComponent data={data} styles={styles} />
			</div>
		</div>
	);
};

export default Faq;
