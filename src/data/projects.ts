export type Project = {
	title: string;
	techs: string[];
	link: string;
	badge?: { type: "info" | "warning" | "tip"; text: string };
	isComingSoon?: boolean;
};

const projects: Project[] = [
	{
		title: "Wisp",
		techs: ["Dart", "Flutter"],
		link: "https://www.zephyrqu.top/wisp/",
		badge: { type: "info", text: "v1.0.0-beta.1" },
	},
	{
		title: "Kanso",
		techs: ["Golang", "React"],
		link: "https://www.zephyrqu.top/kanso/",
		badge: { type: "info", text: "v0.5.1" },
	},
	{
		title: "Zephyr Reader",
		techs: ["Dart", "Flutter", "Rust"],
		link: "https://github.com/zephyr-qu/zephyr_reader",
		badge: { type: "tip", text: "v0.0.1" },
	},
	{
		title: "FoxPlayer",
		techs: ["Dart", "Flutter", "Signal.dart"],
		link: "https://github.com/zephyr-qu/fox_player_app",
		badge: { type: "tip", text: "v1.0.0" },
	},
	{
		title: "Zephyr Comics",
		techs: ["Dart", "Flutter", "Rust"],
		link: "https://github.com/zephyr-qu/zephyr_comics",
		badge: { type: "info", text: "v0.1.0" },
	}
];

export default projects;
