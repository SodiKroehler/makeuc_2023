import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function GET(req: NextRequest) {

    const userID =req.nextUrl.searchParams.get("userID")
    const schoolID =req.nextUrl.searchParams.get("schoolID")
    const topicID =req.nextUrl.searchParams.get("topicID")
    const classID =req.nextUrl.searchParams.get("classID")
    // let results = [];
  
    if(userID){
      if(schoolID){
        if(topicID){
          if(classID){
            const results = await prismaBugger.note.findMany({
              where: {classID: classID}
            })
            return NextResponse.json({topics: results})
          }
        }
      }

      
    } else return NextResponse.json({status: 403})
  }