import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger} from "../../lib/prismaBugger";

export async function POST(req: NextRequest) {

    const userID =req.nextUrl.searchParams.get("userID")
    
    const thing = await req.json()
  
    if(userID){
      const newClass = await prismaBugger.class.create({
        data: {
          name: thing.name,
          number: thing.classNum,
          teacher: thing.prof,
          semester: thing.semester,
          time: '',
          days: '', 
          schoolID: thing.schoolID
        }
      })

      return NextResponse.json({id: newClass.id})
    } else return NextResponse.json({status: 403})
  }