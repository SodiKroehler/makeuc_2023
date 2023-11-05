import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function GET(req: NextRequest) {

    const userID =req.nextUrl.searchParams.get("userID")
  
    if(userID){
      const listOfTopics = await prismaBugger.topic.findMany()

      return NextResponse.json({topics: listOfTopics})
    } else return NextResponse.json({status: 403})
  }