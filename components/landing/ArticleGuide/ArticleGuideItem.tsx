import RoundButton from "../Renovation/RoundButton";

interface IProps {
	srcImage: string;
	alt: string;
	title: string;
	date: string;
	description: string;
}

const ArticleGuideItem: React.FC<IProps> = ({
	srcImage,
	title,
	alt,
	date,
	description,
}): JSX.Element => {
	return (
		<div className="mx-2 pb-14 rounded-2xl border">
			<img
				src={srcImage}
				alt={alt}
				height={360}
				width={572}
				className="bg-cover bg-center rounded-t-xl"
			/>
			<div className="px-5">
				<p className="mt-5 text-xl font-montserrat-bold">{title}</p>
				<p className="pt-2.5 text-sm text-gray-light">{date}</p>
				<p className="pt-8 text-base text-gray-light">
					{description}
				</p>
				<div className="pt-8">
					<RoundButton padding="px-8 py-2.5" fontSize="text-xs">
						Read More
					</RoundButton>
				</div>
			</div>
		</div>
	);
};

export default ArticleGuideItem;
