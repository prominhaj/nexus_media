import { Card, Skeleton } from '@nextui-org/react';
import React from 'react';

const PostLoading = () => {
    return (
        <div>
            <div className="flex items-center w-full max-w-full gap-3">
                <div>
                    <Skeleton className="flex w-12 h-12 rounded-full" />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <Skeleton className="w-3/5 h-3 rounded-lg" />
                    <Skeleton className="w-4/5 h-3 rounded-lg" />
                </div>
            </div>
            <Card className="w-full p-4 mt-4 space-y-5" radius="lg">
                <Skeleton className="rounded-lg">
                    <div className="h-48 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg">
                        <div className="w-3/5 h-3 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                        <div className="w-4/5 h-3 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                        <div className="w-2/5 h-3 rounded-lg bg-default-300"></div>
                    </Skeleton>
                </div>
            </Card>
        </div>
    );
};

export default PostLoading;