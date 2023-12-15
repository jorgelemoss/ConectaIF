export interface BookProps {
    higlights?: Higlight[];
    most_popular?: MostPopular[];
    id?: number;
    title?: string;
    author?: string;
    cover?: string;
    summary?: string;
}

export interface Higlight {
    id: number;
    title: string;
    author: string;
    cover: string;
    summary: string;
}

export interface MostPopular {
    id: number;
    title: string;
    author: string;
    cover: string;
    summary: string;
}