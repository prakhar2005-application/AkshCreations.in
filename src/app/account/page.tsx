import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function AccountPage() {
    return (
        <div className="container py-12">
            <header className="mb-8">
                <h1 className="text-4xl font-headline font-bold">My Account</h1>
                <p className="text-muted-foreground">Manage your orders and personal information.</p>
            </header>
            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order History</CardTitle>
                            <CardDescription>A list of your recent orders.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Order ID</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="text-right">Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">#PP-1234</TableCell>
                                        <TableCell>2024-05-20</TableCell>
                                        <TableCell>Shipped</TableCell>
                                        <TableCell className="text-right">₹3499.00</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">#PP-1233</TableCell>
                                        <TableCell>2024-05-15</TableCell>
                                        <TableCell>Delivered</TableCell>
                                        <TableCell className="text-right">₹5999.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
                <div>
                     <Card>
                        <CardHeader>
                            <CardTitle>Account Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <div>
                                <h4 className="font-semibold">John Doe</h4>
                                <p className="text-sm text-muted-foreground">j.doe@example.com</p>
                           </div>
                           <Separator />
                            <div>
                                <h4 className="font-semibold">Shipping Address</h4>
                                <p className="text-sm text-muted-foreground">
                                    123 Print St<br />
                                    Design City, DC 12345
                                </p>
                           </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
