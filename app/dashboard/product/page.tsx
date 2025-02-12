
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { sql } from "@vercel/postgres";

import { redirect } from "next/navigation";


export default async function StudentRegistrationForm() {
 async function registerProduct(formData: FormData) {
  'use server'
  const neme = formData.get('neme') as string;
  const description = formData.get('description') as string;
  await sql`INSERT INTO  products (neme, description) VALUES (${neme}, ${description})` 
  console.log('Produto registrado:', { neme, description })
 
  redirect('/dashboard/produtc/list');
 
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Cadastro de Produtos</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={registerProduct} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="neme">Nome</Label>
              <Input type="text" id="neme" name="neme" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Input type="text" id="description" name="description" required />
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-800">
              Cadastrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

