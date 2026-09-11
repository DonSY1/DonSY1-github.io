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
	{
		id: 2,
		title: "贪吃蛇",
		imgurl: "https://blog.yindiot.xyz/_astro/avatar.TikwgH7w_1A9ymT.webp",
		desc: "控制蛇吃掉食物，避免撞墙和自己",
		siteurl: "/games/snake.html",
		tags: ["Game"],
	},
	{
		id: 3,
		title: "俄罗斯方块",
		imgurl: "https://blog.yindiot.xyz/_astro/avatar.TikwgH7w_1A9ymT.webp",
		desc: "消除行以获得高分",
		siteurl: "/games/tetris.html",
		tags: ["Game"],
	},
	{
		id: 4,
		title: "扫雷",
		imgurl: "https://blog.yindiot.xyz/_astro/avatar.TikwgH7w_1A9ymT.webp",
		desc: "在雷区中找到所有安全的方块",
		siteurl: "/games/mine_clearance.html",
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

