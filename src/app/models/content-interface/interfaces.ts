export interface Content {
    header: ContentInfo;

    articleResults: ContentInfo;
    articleLimitations: ContentInfo;
    column: {
        content: ContentInfo[],
        images: string[]

    };
    card: {
        content: ContentInfo[],
        images: string[]

    };
}

export interface Article {
    first: ContentInfo;
    second: ContentInfo
}
export interface Column {
    content: ContentInfo[],
    images: string[]
}
export interface Card {
    content: ContentInfo[],
    images: string[]
}
export interface ContentInfo {
    title: string;
    paragraph: string;
}
{

}
