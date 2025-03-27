import React from 'react';
import { BlogPost } from '@/types/blog';
import BlogHeader from './BlogHeader';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";

const BlogPreview: React.FC<BlogPost> = (props) => {
    const { bodyText, title, createdAt, author, } = props;
    const previewText: string = bodyText.substring(0, 150) + '...';

    return (
        <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/20">
            <CardContent className="p-5 flex-grow space-y-4">
                <BlogHeader createdAt={createdAt} author={author} />

                <h2 className="text-xl font-bold leading-tight tracking-tight mt-4 line-clamp-2">
                    {title}
                </h2>

                <p className="mt-2 text-muted-foreground line-clamp-3">
                    {previewText}
                </p>

                {/* {tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )} */}
            </CardContent>

            <CardFooter className="px-5 py-4 border-t bg-muted/40">
                <div className="text-sm font-medium text-primary flex items-center">
                    Read more
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                </div>
            </CardFooter>
        </Card>
    );
};

export default BlogPreview;