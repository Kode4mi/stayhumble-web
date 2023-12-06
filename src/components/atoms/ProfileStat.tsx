export default function ProfileStat({statNumber, statTitle}:{statNumber: number, statTitle: string}) {
    return (
        <div className="mr-4 text-sm">
            <span className="font-bold">{statNumber}</span>
            <span className={"ml-1 font-light"}>{statTitle}</span>
        </div>
    );
}
