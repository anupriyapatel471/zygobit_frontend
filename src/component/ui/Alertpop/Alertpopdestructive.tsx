import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle className="text-red-500">Error</AlertTitle>
      <AlertDescription className="text-red-500">
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
