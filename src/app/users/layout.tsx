import SearchBar from "@/components/atoms/SearchBar";
import Navbar from "@/components/molecules/Navbar";
import SuggestedFriendsNavbar from "@/components/molecules/SuggestedFriendsNavbar";

export default function UserPageLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex w-screen dark:bg-gray-900">
            <div className="h-screen w-[22%]"><Navbar /></div>
            <div className="h-screen flex-1 px-2">{children}</div>
            <div className="h-screen w-[22%]"><SearchBar/> <SuggestedFriendsNavbar /></div>
        </div>
    )
}