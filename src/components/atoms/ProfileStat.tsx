export default function ProfileStat({statNumber, statTitle}:{statNumber: number, statTitle: string}) {
    return (
        <div className="web:mr-4 mr-2 text-xs">
            <span className="font-bold">{statNumber}</span>
            <span className={"ml-1 font-light"}>{statTitle}</span>
        </div>
    );
}
