interface Props {
	srcImage: string;
	alt: string;
	title: string;
}

const PopularItem: React.FC<Props> = ({
	srcImage,
	title,
	alt,
}): JSX.Element => {
	return (
		<div className="px-2">
			<img
				src={srcImage}
				alt={alt}
				height="h-580"
				className="rounded-lg"
			/>
			<p className="text-base pt-5">{title}</p>
		</div>
	);
};

export default PopularItem;