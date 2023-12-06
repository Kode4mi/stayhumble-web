export default function UserPageLayout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex w-screen">
            <div className="h-screen flex-1 ">Navbar placeholder</div>
            <div className="h-screen flex-[2.5] ">{children}</div>
            <div className="h-screen flex-1 ">Second Navbar placeholder</div>
        </div>
    )
}