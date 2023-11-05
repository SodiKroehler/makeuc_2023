import { NextResponse, NextRequest} from 'next/server'
import {prismaBugger } from "../../lib/prismaBugger";



export async function GET(req: NextRequest) {

    const userID =req.nextUrl.searchParams.get("userID")
  
    if(userID){
      const user = await prismaBugger.user.findUnique({
        where:{id: userID??''}
      })
      console.log(user)
      return NextResponse.json({user})
    } else {
      return NextResponse.json({status: 403})
    }
  }

// export async function GET(req: NextRequest) {

//     const userName =req.nextUrl.searchParams.get("userName")
//     const pwd =req.nextUrl.searchParams.get("pwd")
//     const email =req.nextUrl.searchParams.get("email")
//     const schoolName =req.nextUrl.searchParams.get("schoolName")



//     const school = await prismaBugger.school.create({
//         data: {
//           name: schoolName??''
//         }
//       });
  
//     const user = await prismaBugger.user.create({
//       data: {
//         name: userName??'',
//         isNice: pwd,
//         email: email??'',
//         schoolID: school.id
//       }
//     })
      
//       return NextResponse.json({user})
//   }

  //clokp4tzg0004soz46ntd21uy - sodiid