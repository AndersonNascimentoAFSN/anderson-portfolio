import path from 'path';
import { promises as fs } from 'fs';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const filePath = path.resolve('./public/pdf', 'anderson-nascimento-curriculum.pdf');
  const fileContents = await fs.readFile(filePath);

  return new Response(fileContents, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=anderson-nascimento-curriculum.pdf',
    }
  });
}