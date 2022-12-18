import {
	FavoriteOutlined,
	HeadphonesOutlined, LiveTvOutlined,
	LocalLibraryOutlined,
	NewspaperOutlined, PublicOutlined,
	SportsEsportsOutlined,
	SportsFootballOutlined,
	VideocamOutlined,
	WhatshotOutlined
} from "@mui/icons-material";

export const user = {
	username: "john doe",
	avatar: "https://i.pravatar.cc/300",
	email: "johndoe@gmail.com",
	subscriptions: [
		{
			id: 1,
			name: "Channel 1",
			avatar: "https://i.pravatar.cc/300",
			cover: "https://i.pravatar.cc/300",
			subscribers: 1000,
			videos: 100,
			joined: true,
		},
		{
			id: 2,
			name: "Channel 2",
			avatar: "https://i.pravatar.cc/300",
			cover: "https://i.pravatar.cc/300",
			subscribers: 1000,
			videos: 100,
			joined: false,
		},
		{
			id: 3,
			name: "Channel 3",
			avatar: "https://i.pravatar.cc/300",
			cover: "https://i.pravatar.cc/300",
			subscribers: 1000,
			videos: 100,
			joined: false,
		},
		{
			id: 4,
			name: "Channel 4",
			avatar: "https://i.pravatar.cc/300",
			cover: "https://i.pravatar.cc/300",
			subscribers: 1000,
			videos: 100,
			joined: false,
		}
	],
	savedVideos: [
		{
			id: 1,
			title: "Video 1",
			duration: "2:30",
			thumbnail: "https://i.pravatar.cc/300",
			channel: {
				id: 1,
				name: "Channel 1",
				avatar: "https://i.pravatar.cc/300",
			},
			views: 1000,
			timestamp: "2 days ago",

		},
		{
			id: 2,
			title: "Video 2",
			duration: "2:30",
			thumbnail: "https://i.pravatar.cc/300",
			channel: {
				id: 2,
				name: "Channel 2",
				avatar: "https://i.pravatar.cc/300",
			},
			views: 1000,
			timestamp: "2 days ago"
		}
	],
	history: [
		{
			id: 1,
			title: "Video 1",
			duration: "2:30",
			thumbnail: "https://i.pravatar.cc/300",
			channel: {
				id: 1,
				name: "Channel 1",
				avatar: "https://i.pravatar.cc/300",
			},
			views: 1000,
			timestamp: "2 days ago"
		},
		{
			id: 2,
			title: "Video 2",
			duration: "2:30",
			thumbnail: "https://i.pravatar.cc/300",
			channel: {
				id: 2,
				name: "Channel 2",
				avatar: "https://i.pravatar.cc/300",
			},
			views: 1000,
			timestamp: "2 days ago"
		}
	],
	likedVideos: [
		{
			id: 1,
			title: "Video 1",
			duration: "2:30",
			thumbnail: "https://i.pravatar.cc/300",
			channel: {
				id: 1,
				name: "Channel 1",
				avatar: "https://i.pravatar.cc/300",
			},
			views: 1000,
			timestamp: "2 days ago"
		},
		{
			id: 2,
			title: "Video 2",
			duration: "2:30",
			thumbnail: "https://i.pravatar.cc/300",
			channel: {
				id: 2,
				name: "Channel 2",
				avatar: "https://i.pravatar.cc/300",
			},
			views: 1000,
			timestamp: "2 days ago"
		}
	],
	playlists: [
		{
			id: 1,
			name: "Playlist 1",
			videosCount: 5,
			thumbnail: "https://i.pravatar.cc/300",
			videos: [
				{
					id: 1,
					title: "Video 1",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 1,
						name: "Channel 1",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				},
				{
					id: 2,
					title: "Video 2",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 2,
						name: "Channel 2",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				},
				{
					id: 3,
					title: "Video 3",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 3,
						name: "Channel 3",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				},
				{
					id: 4,
					title: "Video 4",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 4,
						name: "Channel 4",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				},
				{
					id: 5,
					title: "Video 5",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 5,
						name: "Channel 5",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				}
			]
		},
		{
			id: 2,
			name: "Playlist 2",
			videosCount: 5,
			thumbnail: "https://i.pravatar.cc/300",
			videos: [
				{
					id: 1,
					title: "Video 01",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 1,
						name: "Channel 1",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				},
				{
					id: 2,
					title: "Video 2",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 2,
						name: "Channel 2",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				},
				{
					id: 3,
					title: "Video 3",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 3,
						name: "Channel 3",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				},
				{
					id: 4,
					title: "Video 4",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 4,
						name: "Channel 4",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				},
				{
					id: 5,
					title: "Video 5",
					duration: "2:30",
					thumbnail: "https://i.pravatar.cc/300",
					channel: {
						id: 5,
						name: "Channel 5",
						avatar: "https://i.pravatar.cc/300",
					},
					views: 1000,
					timestamp: "2 days ago"
				}
			]
		}
	]
};

export const categories = [
	'All',
	'JavaScript',
	'Python',
	'Ruby',
	'Java',
	'Go',
	'C++',
	'C#',
	'PHP',
	'Kotlin',
	'HTML',
	'CSS',
	'Swift',
	'Objective-C',
	'Assembly',
	'C',
	'Rust',
	'Scala',
	'Perl',
	'Groovy',
	'Haskell',
	'Clojure',
];
export const timings = [
	'Today',
	'Yesterday',
	'This Week',
	'This Month',
	'Last Month',
	'This Year',
	'Older',
];

export const exploreCategories = [
	{
		id: 1,
		title: 'Trending',
		icon: <WhatshotOutlined/>,
	},
	{
		id: 2,
		title: 'Gaming',
		icon: <SportsEsportsOutlined/>,
	},
	{
		id: 3,
		title: 'Music',
		icon: <HeadphonesOutlined/>,
	},
	{
		id: 4,
		title: 'News',
		icon: <NewspaperOutlined/>,
	},
	{
		id: 5,
		title: 'Movies',
		icon: <VideocamOutlined/>,
	},
	{
		id: 6,
		title: 'Fashion',
		icon: <FavoriteOutlined/>,
	},
	{
		id: 7,
		title: 'Learning',
		icon: <LocalLibraryOutlined/>,
	},
	{
		id: 8,
		title: 'Sports',
		icon: <SportsFootballOutlined/>,
	},
	{
		id: 9,
		title: 'Live',
		icon: <LiveTvOutlined/>,
	},
	{
		id: 10,
		title: '360° Video',
		icon: <PublicOutlined/>,
	}
];

export const getVideos = () => {
	const videos = [];
	for (let i = 0; i < 24; i++) {
		videos.push({
			id: i,
			title: "Video " + Math.floor(Math.random() * 9) + 1,
			duration: Math.floor(Math.random() * 9) + 1 + ":30",
			thumbnail: "https://picsum.photos/300/200",
			channel: {
				id: Math.floor(Math.random() * 9) + 1,
				name: "Channel " + Math.floor(Math.random() * 9) + 1,
				avatar: "https://i.pravatar.cc/300",
			},
			views: 1000,
			likes: 200,
			dislikes: 10,
			timestamp: (Math.floor(Math.random() * 9) + 1) + " days ago"
		});
	}
	return videos;
}
