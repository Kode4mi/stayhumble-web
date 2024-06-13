import Header from "@/components/molecules/Header";
import {AddNewPost} from "@/components/atoms/AddNewPost";

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return <div>
        <Header />
        <div className="px-4">
            <AddNewPost />
            {children}
        </div>
    </div>
}