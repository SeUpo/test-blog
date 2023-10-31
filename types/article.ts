import type { DefineComponent } from 'vue'

export type articleListBlock = {
    type: string; 
    id: string; 
    data: { 
        title: string;
        articles: { 
            link: string;
            image: string;
            title: string;
        }[];
    };
}

export type article = {
    meta: articleMeta;
    body: articleBody;
}

export type articleMeta = {
    description: string;
    slug: string;
    title: string;
}

export type articleBody = Array<block> 

export type block = {
    type: string; 
    id: string; 
    data: { 
        image: string; 
        reading_time: number;
        short_description: string;
        title: string;
        views_count: number;
        src?: string; 
        caption?: string; 
    };
}

export type sliderBlock = {
    type: string; 
    id: string; 
    data: string[];
}

export type renderBlockType = {
    [key: string]: DefineComponent<{}, {}, any>;
}