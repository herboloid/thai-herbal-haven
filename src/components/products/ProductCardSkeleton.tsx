import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <Card className="border-none overflow-hidden bg-white/95 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <Skeleton className="w-full h-48" />
      </div>
      <CardContent className="p-4">
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-3" />
        
        <div className="flex items-center mb-3">
          <Skeleton className="h-4 w-24" />
        </div>
        
        <div className="flex items-center justify-between mb-3">
          <Skeleton className="h-6 w-20" />
        </div>
        
        <div className="flex flex-col gap-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};
