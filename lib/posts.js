import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

export function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id =fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            id, 
            ...matterResult.data,
        };
    });
    return allPostsData;
}

export function getSortedPostsData() {
    const allPostsData = getAllPosts()
    return allPostsData.sort((a, b) => {
        if (a.date<b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}

export function getSortedPostsByYear() {
    const res = {};
    const allPostsData = getSortedPostsData()
    allPostsData.forEach((article) => {
        const year = article.date.substring(0,4);
        if (Object.keys(res).indexOf(year)<0) {
            // res.set(year, []);
            res[year] = [];
        }
        res[year].push(article);
    });


    return res;
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}
