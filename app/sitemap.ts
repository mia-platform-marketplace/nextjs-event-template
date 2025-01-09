import { TalkType } from '../lib/types';
import { fetchCrudCollection } from '../api/crud';
import getConfig from 'next/config';


const staticPages = [
    '/',
    '/about',
    '/gallery',
    '/speakers',
    '/register-now',
    '/become-a-sponsor',
]

const { publicRuntimeConfig } = getConfig()

export default async function sitemap() {

    const talks: TalkType[] = await fetchCrudCollection({ endpoint: 'talks', query: '_p=readablePathId&_l=200' })

    const fields = staticPages.map(page => ({
        url: `${publicRuntimeConfig?.WEBSITE_BASE_PATH}${page}`,
        lastModified: new Date(),
        changeFrequency: 'always'
    }))

    talks?.forEach(talk => fields.push({
        url: `${publicRuntimeConfig?.WEBSITE_BASE_PATH}/talks-info/${talk.readablePathId}`,
        lastModified: new Date(),
        changeFrequency: 'always'
    }))

    return fields
}