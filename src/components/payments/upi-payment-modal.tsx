import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { QRCodeSVG } from "qrcode.react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { mockProjects } from "@/lib/data/mock-projects";
import { useAuth } from "@/lib/auth/auth-context";

interface UPIPaymentModalProps {
  open: boolean;
  onClose: () => void;
  projectName: string;
  projectId: string;
  onNewDonation?: (donor: { name: string; amount: number; donatedAt: string }) => void;
}

export function UPIPaymentModal({ open, onClose, projectName, projectId, onNewDonation }: UPIPaymentModalProps) {
  const [amount, setAmount] = useState<string>("");
  const [showQR, setShowQR] = useState(false);
  const { user } = useAuth();
  const upiId = "darshannaikn2020-1@oksbi";
  const upiUrl = `upi://pay?pa=${upiId}&pn=Impact%20Invest&tn=${encodeURIComponent(projectName)}&am=${amount}`;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (showQR) {
      timeoutId = setTimeout(() => {
        const project = mockProjects.find(p => p.id === projectId);
        if (project) {
          const newAmount = parseFloat(amount);
          project.raised += newAmount;
          
          // Add new investor or update existing one
          const existingInvestor = project.investors.find(i => i.id === user?.id);
          if (existingInvestor) {
            existingInvestor.amount += newAmount;
          } else if (user) {
            project.investors.push({
              id: user.id,
              name: user.name,
              amount: newAmount,
              investedAt: new Date().toISOString()
            });
          }
          
          // Check if project is completed
          if (project.raised >= project.goal) {
            project.status = 'completed';
            toast.success("Project goal achieved!", {
              description: `${project.name} has been fully funded!`
            });
          }

          const newDonation = {
            name: user?.name || "Anonymous Donor",
            amount: newAmount,
            donatedAt: new Date().toISOString(),
          };
          onNewDonation?.(newDonation);
          toast.success("Donation successful!", {
            description: `₹${newAmount.toLocaleString()} donated to ${projectName}`
          });
        }
        handleClose();
      }, 20000);
    }
    return () => clearTimeout(timeoutId);
  }, [showQR, amount, projectId, projectName, onNewDonation, user]);

  const handleAmountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseFloat(amount) > 0) {
      setShowQR(true);
    }
  };

  const handleClose = () => {
    setShowQR(false);
    setAmount("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{showQR ? "Scan QR Code to Pay" : "Enter Donation Amount"}</DialogTitle>
        </DialogHeader>
        {!showQR ? (
          <form onSubmit={handleAmountSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input
                id="amount"
                type="number"
                min="1"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="text-lg"
              />
            </div>
            <Button type="submit" className="w-full" disabled={!amount || parseFloat(amount) <= 0}>
              Proceed to Pay
            </Button>
          </form>
        ) : (
          <div className="flex flex-col items-center space-y-4 p-6">
            <div className="bg-white p-4 rounded-lg">
              <QRCodeSVG value={upiUrl} size={200} />
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Amount: ₹{parseFloat(amount).toLocaleString()}
              <br />
              UPI ID: {upiId}
            </p>
            <Button variant="outline" onClick={() => setShowQR(false)}>
              Change Amount
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}