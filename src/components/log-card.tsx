import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { LogEntry } from '@/lib/data';
import { format } from 'date-fns';

interface LogCardProps {
  entry: LogEntry;
}

const LogCard: React.FC<LogCardProps> = ({ entry }) => {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-150 hover:-translate-y-1 hover:shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <span>{format(new Date(entry.date), 'MMMM d, yyyy')}</span>
          <Badge variant="logCategory">{entry.category}</Badge>
        </div>
        <CardTitle className="font-headline text-lg pt-2">{entry.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{entry.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
            ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default LogCard;
