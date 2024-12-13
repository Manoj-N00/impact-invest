import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDistanceToNow } from "date-fns";

interface Donor {
  id: string;
  name: string;
  amount: number;
  avatar?: string;
  donatedAt: string;
}

interface RecentDonorsProps {
  donors: Donor[];
}

export function RecentDonors({ donors }: RecentDonorsProps) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Recent Supporters</h3>
      <div className="space-y-4">
        {donors.map((donor) => (
          <div key={donor.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={donor.avatar} />
                <AvatarFallback>{donor.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{donor.name}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDistanceToNow(new Date(donor.donatedAt), { addSuffix: true })}
                </p>
              </div>
            </div>
            <p className="font-semibold">₹{donor.amount.toLocaleString()}</p>
          </div>
        ))}

        {donors.length === 0 && (
          <p className="text-center text-muted-foreground">No donations yet. Be the first to support!</p>
        )}
      </div>
    </Card>
  );
}