// import {currentUser} from "@clerk/nextjs/server";

// export const checkUser=async()=>{
//     const user=await currentUser();

//     if(!user){
//         return null;
//     }
//     try{
//         const loggedInUser=await db.user.findUnique({
//             where:{
//                 clerkUserId:user.id,
//             },
//         });

//         if(loggedInUser){
//             return loggedInUser;
//         }

//         const name=`${user.firstName} ${user.lastName}`;
//         const newUser=await db.user.create({
//             data:{
//                 clerkUserId: user.id,
//                 name,
//                 imageUrl:user.imageUrl,
//                 email:user.emailAddresses[0].emailAddress,
//             },
//         });
//         return newUser;
//     }catch(error){
//         console.log(error.message);
//     }
// };

import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db"; // Make sure this path is correct

export const checkUser = async () => {
  const user = await currentUser();

  if (!user) return null;

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) return loggedInUser;

    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    return newUser;
  } catch (error) {
    console.error("checkUser error:", error);
    return null;
  }
};
