/**
 * 估算文章阅读时间
 * @param text 文章正文文本（不含 HTML 标签）
 * @param wordsPerMin 中文阅读速度（字/分钟），默认 200
 * @returns 阅读时间字符串，如 "5 min read"
 */
export function getReadTime(text: string, wordsPerMin = 200): string {
	// 去除 HTML 标签、Markdown 语法、空白字符
	const clean = text
		.replace(/<[^>]*>/g, "")
		.replace(/[#*_~`[\]()>|:-]/g, "")
		.replace(/\s+/g, "");

	const chars = clean.length;
	const minutes = Math.max(1, Math.round(chars / wordsPerMin));
	return `${minutes} min read`;
}
