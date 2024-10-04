import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order ID: abc1234</DialogTitle>
        <DialogDescription>Order details</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pending
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Customer name
              </TableCell>
              <TableCell className="flex justify-end">Samuel Pietra</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Phone number
              </TableCell>
              <TableCell className="flex justify-end">(706) 565-1558</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                E-mail address
              </TableCell>
              <TableCell className="flex justify-end">
                samuel@customer.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Ordered at
              </TableCell>
              <TableCell className="flex justify-end">
                15 minute(s) ago
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Large Pepperoni Pizza</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$ 20.00</TableCell>
              <TableCell className="text-right">$ 40.00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Small Mozzarella Pizza</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">$ 15.90</TableCell>
              <TableCell className="text-right">$ 31.80</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Order total</TableCell>
              <TableCell className="text-right font-medium">$ 71.80</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
