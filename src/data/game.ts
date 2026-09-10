// 游戏页面数据配置
// 用于管理游戏页面的数据

export interface GameItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 游戏数据
export const gameData: GameItem[] = [
	{
		id: 1,
		title: "猜数字",
		imgurl: "https://blog.yindiot.xyz/_astro/avatar.TikwgH7w_1A9ymT.webp",
		desc: "猜出 1~100 之间的随机数字",
		siteurl: "/games/game.html",
		tags: ["Game"],
	},
];

// 获取所有游戏数据
export function getGamesList(): GameItem[] {
	return gameData;
}

// 获取随机排序的游戏数据
export function getShuffledGamesList(): GameItem[] {
	const shuffled = [...gameData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

