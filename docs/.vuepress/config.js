import { defineUserConfig } from 'vuepress';
import { defaultTheme } from 'vuepress';
import fs from 'fs';
import path from 'path';

const menus = fs
	.readdirSync(path.resolve(__dirname, '../'), { withFileTypes: true })
	.filter((dirent) => {
		return /md/.test(dirent.name) && dirent.name !== 'README.md';
	})
	.map((dirent) => dirent.name.replace(/.md$/, ''));
const base = '/CodeSharing/';

export default defineUserConfig({
	base,
	dest: './dist',
	lang: 'zh-CN',
	title: 'CaiCai 的分享库',
	description: '这是我的一个 代码分享 站点',
	head: [['link', { rel: 'icon', href: base + 'images/favicon.ico' }]],
	theme: defaultTheme({
		// 默认主题配置
		sidebar: menus,
		sidebarDepth: 0,
		repo: 'https://github.com/ClareCai/CodeSharing',
		editLink: false,
	}),
});
