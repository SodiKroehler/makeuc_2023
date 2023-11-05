import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function POST(req: NextRequest) {

    const userName =req.nextUrl.searchParams.get("userName")
    
    const thing = await req.json()
  
    if(userName){
      const newUser = await prismaBugger.user.create({
        data: {
          name: thing.name,
          isNice: thing.pwd,
          email: thing.email,
          schoolID: thing.schoolID,
        }
      })

      return NextResponse.json({id: newUser.id})
    } else return NextResponse.json({status: 403})
  }