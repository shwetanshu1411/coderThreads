"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
import { DialogHeader } from "../ui/dialog";
import { useUser } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { useState } from "react";

function CreateCommunityButton()
{
  const {user} =useUser();
  const [open, setOpen] = useState(false);

    return (<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger className="w-full p-2 pl-5 flex items-centre 
  rounded-md cursor-pointer bg-black text-white hover:bg-black 
  transition-all duration-200 disabled:text-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled={!user}>
    <Plus className="w-4 h-5.5 mr-2" />
      {user ? "Create a Community" : "Sign in to create community"}
    
    
    </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Create a Community</DialogTitle>
      <DialogDescription>
        Create a community to discuss about your doubts or new idea and get feedback.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>)
}

export default CreateCommunityButton;