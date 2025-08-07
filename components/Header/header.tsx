

"use client";

import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignUp, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import logo from "@/images/logo.png"
import { ChevronLeftIcon, MenuIcon } from "lucide-react";
import { useSidebar } from "../ui/sidebar";
function Header() {

    const { user } =useUser();
    const { toggleSidebar, open, isMobile } =useSidebar();
  return (
    <header className="flex items-centre justify-between p-2 border-b border-gray-200">
        {/* //left side */}

<div className="flex items-centre gap-2">
    <MenuIcon className="w-6 h-6" onClick={toggleSidebar} />

    <Image
    src={logo}
    alt="logo"
    width={130}
    height={130}
    className="hidden md:block"
    />
    <Image
    src={logo}
    alt="logo"
    width={100}
    height={100}
    className="block md:hidden"
    />
</div>
        {/* right side */}
    <div>
        <SignedIn>
            <UserButton />
        </SignedIn>

        <SignedOut>
         <Button asChild variant="outline">
            <SignInButton mode="modal" />
         </Button>
        </SignedOut>
    </div>


    </header>
  )
}

export default Header;
