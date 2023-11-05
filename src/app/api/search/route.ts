import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function GET(req: NextRequest) {

    const userID =req.nextUrl.searchParams.get("userID")
    const schoolID =req.nextUrl.searchParams.get("schoolID")
    const topicID =req.nextUrl.searchParams.get("topicID")
    const prof =req.nextUrl.searchParams.get("prof")
    const classNum =req.nextUrl.searchParams.get("classNum")

    let selectedNotes = null
  
    if(userID){
        selectedNotes = await prismaBugger.note.findMany()
      
      return NextResponse.json({notes: selectedNotes})
    } else return NextResponse.json({status: 403})
  }