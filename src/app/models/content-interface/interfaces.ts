export interface Content {
    header: VisualContentInfo;

    articleResults:VisualContentInfo;
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
// refactor interfaces to be more dry
export interface VisualContentInfo  {
    content: ContentInfo;
    Image: string;
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

