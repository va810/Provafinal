import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { sql } from "@vercel/postgres";


export default async function list() {
 
    const { rows }= await sql`SELECT * FROM products`

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50%]">Nome</TableHead>
                        <TableHead>DESCRIÇÃO</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((product) => (
                        <TableRow key={product.id}>
                            <TableCell className="font-medium">{product.neme}</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )

}