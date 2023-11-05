import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function POST(req: NextRequest) {

    const userID =req.nextUrl.searchParams.get("userID")
    
    const thing = await req.json()
  
    if(userID){
      const newNote = await prismaBugger.note.create({
        data: {
          body: thing.body,
          classID: thing.classID,
          keywords: thing.keywords,
          description: thing.desc,
          title: thing.title,
          public: true, 
          date: thing.date,
          ownerID: userID,
          topic: thing.topics
        }
      })

      return NextResponse.json({id: newNote.id})
    } else return NextResponse.json({status: 403})
  }