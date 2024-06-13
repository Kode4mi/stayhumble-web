export interface PostModel {
    authorName: string;
    content: string;
    likes: number;
    dislikes: number;
    shares: number;
    commentCount: number;
    time: string;
    imageUrl?: string;
    replies?: PostModel[];
}