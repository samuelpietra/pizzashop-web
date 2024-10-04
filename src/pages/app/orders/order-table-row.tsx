import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

// export interface OrderTableRow {}

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button size="xs" variant="outline">
          <Search className="h-3 w-3" />
          <span className="sr-only">Order details</span>
        </Button>
      </TableCell>

      <TableCell className="font-mono text-sm font-medium">
        123abc456def789ghi
      </TableCell>

      <TableCell className="text-muted-foreground">15 minute(s) ago</TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pending</span>
        </div>
      </TableCell>

      <TableCell className="font-medium">Samuel Pietra</TableCell>

      <TableCell className="font-medium">$ 69.90</TableCell>

      <TableCell>
        <Button variant="outline" size="xs">
          <ArrowRight className="mr-2 h-3 w-3" />
          Approve
        </Button>
      </TableCell>

      <TableCell>
        <Button variant="ghost" size="xs">
          <X className="mr-2 h-3 w-3" />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}
