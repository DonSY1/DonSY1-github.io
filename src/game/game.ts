export interface GameItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "猜数字",
		imgurl: "https://blog.711250.xyz/_astro/wuan.CBihK-Dp_Z2gIanU.webp",
		desc: "喜欢睡午觉",
		siteurl: "https://blog.yindiot.xyz/src/game/game.html",
		tags: ["Game"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): GameItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): GameItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
