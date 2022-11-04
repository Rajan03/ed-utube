export const VideoCard = ({ video }) => {
	const { title, description, thumbnail, videoId } = video;
	return (
		<div className="video-card">
			<img src={thumbnail} alt={title} />
			<div className="video-card__info">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}
