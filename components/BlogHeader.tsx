import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, LinkIcon } from "lucide-react";

interface HeaderProps {
    createdAt: string;
    author: {
        name: string;
        avatar: string;
        url: string;
    };
}

export default function BlogHeader({ createdAt, author }: HeaderProps) {
    const createdDate: Date = new Date(createdAt);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    return (
        <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12 border">
                <AvatarImage src={author.avatar} alt={`${author.name}'s profile picture`} />
                <AvatarFallback>{author.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
                <p className="font-semibold text-base">{author.name}</p>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <LinkIcon className="mr-1 h-3 w-3" />
                        <span>{author.url}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        <span>{createdDate.toLocaleDateString('en-US', options)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}