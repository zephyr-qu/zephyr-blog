/**
 * Rehype 插件：优化 Markdown 图片
 *
 * - 添加 loading="lazy" / decoding="async"
 * - 包裹 figure 容器用于响应式样式
 * - 保留原有 alt / title 属性
 */

import type { Root, Element } from 'hast'

export function rehypeImageOptimize() {
	return (tree: Root) => {
		walk(tree);
	};
}

function walk(node: Element | Root) {
	if (node.type === "element" && node.tagName === "img") {
		enhanceImage(node);
		return; // images are leaf nodes
	}
	if ("children" in node && Array.isArray(node.children)) {
		const children = node.children;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child.type === "element" && child.tagName === "img") {
				// Wrap in a <figure> for styling
				const img = child as Element;
				enhanceImage(img);
				const figure = createFigureWrapper(img);
				children[i] = figure;
			} else if (child.type === "element") {
				walk(child);
			}
		}
	}
}

function enhanceImage(img: Element) {
	img.properties = img.properties || {};

	// Lazy loading & async decode
	img.properties.loading = "lazy";
	img.properties.decoding = "async";

	// Add class for styling
	let cls = img.properties.className;
	if (!cls) {
		cls = [];
	} else if (typeof cls === "string") {
		cls = [cls];
	}
	const classList = Array.isArray(cls) ? cls : [];
	if (!classList.includes("post-image")) {
		classList.push("post-image");
	}
	img.properties.className = classList;
}

function createFigureWrapper(img: Element): Element {
	return {
		type: "element",
		tagName: "figure",
		properties: { class: "post-figure" },
		children: [
			img,
			// If the image has a title attribute, use it as a figcaption
			...(img.properties?.title
				? [
						{
							type: "element",
							tagName: "figcaption",
							properties: {},
							children: [{ type: "text", value: String(img.properties.title) }],
						} as Element,
					]
				: []),
		],
	};
}
