import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger } from "../../lib/prismaBugger";



export async function POST(req: NextRequest, res: NextResponse) {

    const userID =req.nextUrl.searchParams.get("userID")
  
    if(userID){
      const user = await prismaBugger.user.findUnique({
        where:{id: userID??''}
      })

      return NextResponse.json({user})
    } else return NextResponse.json({status: 403})
  }