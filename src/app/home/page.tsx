"use client";
import Header from "@/components/molecules/Header";
import Post from "@/components/molecules/Post";
import {PostModel} from "@/models/post.model";


export default function HeaderPage() {

  const posts: PostModel[] = [
    { authorName: "KotKamil", content: "CIAPAKAI", likes: 123, dislikes: 2, shares: 2, comments: 2, time: "2024-06-26 09:45" },
    { authorName: "Artur", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie, risus quis rutrum venenatis, massa eros mollis metus, vitae eleifend nunc felis sit amet urna. Nunc faucibus porttitor mi ut hendrerit. Donec eget nulla non velit efficitur efficitur at in risus. Mauris et turpis tempor, consequat eros et, elementum lectus. Fusce consectetur neque eu ipsum lobortis accumsan. Suspendisse potenti. Aenean at elit non mauris finibus dignissim quis eget orci. Morbi placerat, metus vel vehicula eleifend, nunc dolor egestas massa, ut dictum tellus tellus eget metus. Donec dignissim porttitor orci, eget accumsan turpis maximus in. Aenean pellentesque odio quis odio semper pretium. Curabitur libero felis, accumsan id vestibulum hendrerit, gravida eget enim. Vestibulum orci nisi, consequat quis dolor et, faucibus ullamcorper quam. Nam velit neque, accumsan dapibus egestas sit amet, tristique eget metus.", likes: 25555, dislikes: 125, shares: 3, comments: 6, time: "2024-06-26 10:05" },
    { authorName: "QSPYX", content: "EL0O ZIOMKI", likes: 15156151651, dislikes: 0, shares: 454564654, comments: 151561, time: "2024-06-26 14:05" },
  ];

  return (
    <div>
      <Header />
      <div className="px-4 space-y-8 pt-4">
        {posts.map((post, index) => (
          <Post key={index} authorName={post.authorName} content={post.content} likes={post.likes} dislikes={post.dislikes} shares={post.shares} comments={post.comments} postTime={post.time} />
        ))}
      </div>
    </div>
  );
}
