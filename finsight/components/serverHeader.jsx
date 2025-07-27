// Server Component – no "use client"
import { checkUser } from "@/lib/checkUser";
import HeaderClient from "./HeaderClient";

const serverHeader = async () => {
  await checkUser(); // Runs only on server
  return <HeaderClient />;
};

export default serverHeader;
