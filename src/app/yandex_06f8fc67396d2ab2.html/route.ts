import { NextResponse } from "next/server";

const html = `<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>Verification: 06f8fc67396d2ab2</body>
</html>`;

export async function GET() {
  return new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "Cache-Control": "public, max-age=300"
    }
  });
}
