

"use client";

import { SignedIn, SignedOut, SignInButton, SignUp, SignUpButton, UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header>

        {/* right side */}
        <div>
            <SignedIn>
<UserButton/>
            </SignedIn >
            <SignedOut>
                <div>please login</div>
                <SignInButton />
                <SignUpButton/>
            </SignedOut>
        </div>
    </header>
  )
}

export default Header;
