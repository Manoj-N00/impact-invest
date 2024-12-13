import { ProjectDocument } from '@/lib/types/project';
import { Card } from '@/components/ui/card';
import { FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectDocumentsProps {
  documents: ProjectDocument[];
}

export function ProjectDocuments({ documents }: ProjectDocumentsProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Project Documents</h3>
      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">{doc.name}</p>
                <p className="text-sm text-muted-foreground">
                  Uploaded on {new Date(doc.uploadedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}