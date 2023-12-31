import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function GET(req: NextRequest) {

    const userID =req.nextUrl.searchParams.get("userID")
    const schoolID =req.nextUrl.searchParams.get("schoolID")
    const topicID =req.nextUrl.searchParams.get("topicID")
  
    if(userID){
      const listOfClasses = await prismaBugger.class.findMany({
        where: {schoolID: schoolID??''}
      })
  
      return NextResponse.json({topics: listOfClasses})
    } else return NextResponse.json({status: 403})
  }