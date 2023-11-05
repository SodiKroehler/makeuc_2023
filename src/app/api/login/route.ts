import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function GET(req: NextRequest) {

    const userName =req.nextUrl.searchParams.get("userName")
    const pwd =req.nextUrl.searchParams.get("pwd")
  
    if(userName){
      const users = await prismaBugger.user.findMany({
        where: {name: userName??''}
      })

      for (var u=0; u=users.length; u++){
        if (users[u].isNice === pwd){
          return NextResponse.json({userID: users[u].id})
        }
      }

      return NextResponse.json({userID: null})

    } else return NextResponse.json({status: 500})
  }