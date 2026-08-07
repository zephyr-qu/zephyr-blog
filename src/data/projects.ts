export type Project = {
	title: string;
	techs: string[];
	link: string;
	badge?: { type: "info" | "warning" | "tip"; text: string };
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "OnlineR",
		techs: ["React", "Vite", "TypeScript"],
		link: "https://gitee.com/zs2084035767/online-resume",
		badge: { type: "info", text: "已存档" },
	},
	{
		title: "SiftDeep",
		techs: ["Next.js", "Nest.js", "TypeScript"],
		link: "https://gitee.com/zs2084035767/SiftDeep",
		badge: { type: "warning", text: "暂停中" },
	},
	{
		title: "Miracle",
		techs: ["SpringBoot", "Vue", "UniApp"],
		link: "https://gitee.com/zs2084035767/Miracle",
		badge: { type: "info", text: "已存档" },
	},
	{
		title: "TodoApp",
		techs: ["Dart", "Flutter"],
		link: "https://gitee.com/zs2084035767/flutter_todo_app",
		badge: { type: "info", text: "已存档" },
	},
	{
		title: "FoxPlayer",
		techs: ["Dart", "Flutter", "Signal.dart"],
		link: "https://gitee.com/zs2084035767/fox_player_app",
		badge: { type: "tip", text: "v1.0.0" },
	},
];

export default projects;
