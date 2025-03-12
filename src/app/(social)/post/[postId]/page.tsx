"use client"
import {PostModel} from "@/models/post.model";
import ProfilePicture from "@/components/atoms/ProfilePicture";
import PostContent from "@/components/atoms/PostContent";
import React from "react";
import Link from "next/link";
import PostStats from "@/components/atoms/PostStats";
import Post from "@/components/molecules/Post";
import Image from "next/image";

const examplePosts: PostModel[] = [
    {
        authorName: "KotKamil",
        content: "Hello, this is my first post!",
        likes: 3,
        dislikes: 2,
        commentCount: 2,
        shares: 1,
        time: "1h ago",
        imageUrl: "https://pbs.twimg.com/media/GP84giCWkAA-5rX?format=jpg&name=medium",
        replies: [
            { authorName: "KotKamil", content: "CIAPAKAI", likes: 123, dislikes: 2, shares: 2, commentCount: 2, time: "2024-06-26 09:45" },
            { authorName: "Artur", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie, risus quis rutrum venenatis, massa eros mollis metus, vitae eleifend nunc felis sit amet urna. Nunc faucibus porttitor mi ut hendrerit. Donec eget nulla non velit efficitur efficitur at in risus. Mauris et turpis tempor, consequat eros et, elementum lectus. Fusce consectetur neque eu ipsum lobortis accumsan. Suspendisse potenti. Aenean at elit non mauris finibus dignissim quis eget orci. Morbi placerat, metus vel vehicula eleifend, nunc dolor egestas massa, ut dictum tellus tellus eget metus. Donec dignissim porttitor orci, eget accumsan turpis maximus in. Aenean pellentesque odio quis odio semper pretium. Curabitur libero felis, accumsan id vestibulum hendrerit, gravida eget enim. Vestibulum orci nisi, consequat quis dolor et, faucibus ullamcorper quam. Nam velit neque, accumsan dapibus egestas sit amet, tristique eget metus.", likes: 25555, dislikes: 125, shares: 3, commentCount: 6, time: "2024-06-26 10:05" },
            { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 15156151651, dislikes: 0, shares: 454564654, commentCount: 151561, time: "2024-06-26 14:05" },
            { authorName: "KotKamil", content: "CIAPAKAI", likes: 123, dislikes: 2, shares: 2, commentCount: 2, time: "2024-06-26 09:45" },    { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 15156151651, dislikes: 0, shares: 454564654, commentCount: 151561, time: "2024-06-26 14:05" },
            { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 5555, dislikes: 0, shares: 454564654, commentCount: 151561, time: "2024-06-26 14:05" },
            { authorName: "KotKamil", content: "CIAPAKAI", likes: 4242444, dislikes: 2, shares: 2, commentCount: 2, time: "2024-06-26 09:45" },
            { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 999999, dislikes: 0, shares: 454562224654, commentCount: 999999, time: "2024-06-26 14:05" },
            { authorName: "KotKamil", content: "CIAPAKAI", likes: 535, dislikes: 2, shares: 2, commentCount: 2, time: "2024-06-26 09:45" },    { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 15156151651, dislikes: 0, shares: 454564654, commentCount: 151561, time: "2024-06-26 14:05" },
            { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 21, dislikes: 0, shares: 454564654, commentCount: 151561, time: "2024-06-26 14:05" },
            { authorName: "KotKamil", content: "CIAPAKAI", likes: 3, dislikes: 2, shares: 2, commentCount: 2, time: "2024-06-26 09:45" },
            { authorName: "KotKamil", content: "CIAPAKAI", likes: 123, dislikes: 2, shares: 2, commentCount: 2, time: "2024-06-26 09:45" },    { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 15156151651, dislikes: 0, shares: 454564654, commentCount: 151561, time: "2024-06-26 14:05" },
            { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 5555, dislikes: 0, shares: 454564654, commentCount: 151561, time: "2024-06-26 14:05" },
        ]
    }
]

type PostPageProps = {
		params: {
				postId: string
		}
}

export default function PostPage({ params }: PostPageProps) {
    const { postId } = params
    const { authorName, content, likes, dislikes, commentCount, shares, time: postTime, replies, imageUrl } = examplePosts[Number(postId)]

    const [ response, setResponse ] = React.useState<string>('')
    const [ selectedImageName, setSelectedImageName ] = React.useState<string>('')
    const [ selectedImageURL, setSelectedImageURL ] = React.useState<string | undefined>(undefined)

    function handleResponse() {
        console.log(response)
        setResponse('')
    }

    function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files === null) return;

        setSelectedImageName(e.target.value)
        const selectedFile = e.target.files[0];
        setSelectedImageURL(URL.createObjectURL(selectedFile));
    }

    function cancelImageSelect() {
        setSelectedImageName('')
        setSelectedImageURL(undefined)
    }

    return <div className="w-full min-h-screen">
        <div className="w-full dark:bg-gray-800 bg-slate-300 h-16 px-4 flex items-center">
            <Link href="/home">
                <span className="material-symbols-outlined">
                    arrow_back
                </span>
            </Link>
        </div>
        <div className="px-4 dark:bg-gray-800 bg-slate-300 border-y-2 dark:border-gray-900 border-white">
            <div className="flex py-2">
                <ProfilePicture userName={authorName}/>
                <div className="px-2">
                    <h3 className="h-10 leading-10 font-bold">
                        {authorName}
                        <span className="font-extralight mx-4 text-sm">{postTime}</span>
                    </h3>
                </div>
            </div>
            <PostContent content={content} imageUrl={imageUrl}/>
        </div>
        <div className="w-full dark:bg-gray-800 bg-slate-300 p-4">
            <PostStats likes={likes} dislikes={dislikes} comments={commentCount} shares={shares}/>
        </div>
        <div className="w-full dark:bg-gray-950 bg-slate-500 flex">
            <div className="flex flex-col w-full">
                <textarea value={response} onChange={e => setResponse(e.target.value)} placeholder="Napisz odpowiedź..." className="h-full p-4 text-lg bg-transparent outline-0 flex-1 resize-none"/>
                {selectedImageURL &&
                    <div className="w-20 h-20 rounded-2xl overflow-hidden relative mx-2 mb-2 cursor-pointer" onClick={cancelImageSelect}>
                        <span className="absolute text-8xl leading-[5rem] text-center w-20 bg-opacity-50 bg-black">
                            &times;
                        </span>
                        <Image src={selectedImageURL} alt="selected image" fill style={{objectFit: 'cover'}} />
                    </div>
                }
            </div>
            <div className="flex flex-col">
                <button onClick={handleResponse} className="w-16 h-16 leading-14">
                    <span className="material-symbols-outlined">
                        reply
                    </span>
                </button>
                <label htmlFor="imageInput" className="w-16 h-16 leading-14 flex justify-center items-center">
                    <span className="material-symbols-outlined">
                        add_photo_alternate
                    </span>
                </label>
                <input type="file" id="imageInput" value={selectedImageName} onChange={handleFileSelect} className="hidden"/>
            </div>
        </div>
        <div className="w-full space-y-2 p-2">
            {
                replies?.map((post, index) => (<div key={index}>
                    <Post authorName={post.authorName} content={post.content} likes={post.likes} dislikes={post.dislikes} shares={post.shares} comments={post.commentCount} postTime={post.time}/>
                </div>))
            }
        </div>
    </div>;
}