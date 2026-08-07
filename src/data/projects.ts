export type Project = {
	title: string;
	techs: string[];
	link: string;
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "在线简历-OnlineR",
		techs: ["React", "Vite", "TypeScript"],
		link: "https://gitee.com/zs2084035767/online-resume",
	},
	{
		title: "深选-SiftDeep",
		techs: ["Next.js", "Nest.js", "TypeScript"],
		link: "https://gitee.com/zs2084035767/SiftDeep",
	},
	{
		title: "骑迹-Miracle",
		techs: ["SpringBoot", "Vue", "UniApp"],
		link: "https://gitee.com/zs2084035767/Miracle",
	},
	{
		title: "代办事项-TodoApp",
		techs: ["Dart", "Flutter"],
		link: "https://gitee.com/zs2084035767/flutter_todo_app",
	},
	{
		title: "狐狸视频-FoxPlayer",
		techs: ["Dart", "Flutter", "Signal.dart"],
		link: "https://gitee.com/zs2084035767/fox_player_app",
	},
];

export default projects;
