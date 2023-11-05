import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function GET(req: NextRequest) {

    const userID =req.nextUrl.searchParams.get("userID")
    const selSchool =req.nextUrl.searchParams.get("schoolID")
  
    if(userID){
      const classList = await prismaBugger.class.findMany({
        where:{schoolID: selSchool??''}
      })

      return NextResponse.json({classes: classList})
    } else return NextResponse.json({status: 403})
  }