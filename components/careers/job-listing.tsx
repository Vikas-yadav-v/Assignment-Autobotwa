import { Button } from "@/components/ui/button"
import { MapPin, Clock, ArrowRight } from "lucide-react"

export interface JobOpening {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string
}

interface JobListingProps {
  job: JobOpening
}

export function JobListing({ job }: JobListingProps) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
            <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">{job.department}</span>
          </div>
          <p className="text-muted-foreground mb-4">{job.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {job.type}
            </div>
          </div>
        </div>
        <Button className="w-fit">
          Apply Now <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
