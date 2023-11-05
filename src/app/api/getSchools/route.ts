import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function GET(req: NextRequest) {

    const userID =req.nextUrl.searchParams.get("userID")
  
    if(userID){
      const listOfSchools = await prismaBugger.school.findMany()


      return NextResponse.json({schools: listOfSchools})
    } else return NextResponse.json({status: 403})
  }