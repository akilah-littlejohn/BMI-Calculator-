export interface Content {
    header:  ContentInfo;
    articleResults:ContentInfo;
    articleLimitations:ContentInfo;
    column:  ContentInfo[];
    card:    ContentInfo[];
}

export interface Article {
    first:  ContentInfo;
    second: ContentInfo
}

export interface ContentInfo {
    title:     string;
    paragraph: string;
}

