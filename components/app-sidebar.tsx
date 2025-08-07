import * as React from "react"
import { CodeIcon, GalleryVerticalEnd, HomeIcon, Minus, Plus, TrendingUpIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import logo from "@/images/logo.png"
// import CreateCommunityButton from "./Header/createcommunitybutton"
import { SearchForm } from "@/components/search-form"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import CreateCommunityButton from "./Header/CreateCommunityButton"

type sidebarData ={
  navMain: {
    title: string;
    url: string;
    items: {
      title: string;
      url: string;
      isActive: boolean;
    }[];
  }[];
};

// This is sample data.
const sidebarData: SidebarData = {
  navMain: [
    {
      title: "Communities",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
 // TODO get all from sanitary
 //const subreddits = await getSubreddits();
 
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              {/* <Link href="/"> */}
              <Image src={logo} alt="logo" width={150} height={150} />
              {/* </Link> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
      <SidebarGroup>
        <SidebarMenuItem>
        <SidebarMenuButton asChild>
        <CreateCommunityButton />
        </SidebarMenuButton>
        <SidebarMenuButton asChild className="p-5">
          <Link href="/">
          <HomeIcon className="w-4 h-4 mr-2"/>
          Home
          </Link>
        </SidebarMenuButton>

 <SidebarMenuButton asChild className="p-5">
          <Link href="/">
          <TrendingUpIcon className="w-4 h-4 mr-2"/>
          Trending Talks
          </Link>
        </SidebarMenuButton> 

         <SidebarMenuButton asChild className="p-5">
          <Link href="/">
          <CodeIcon className="w-4 h-4 mr-2"/>
          Complier
          </Link>
        </SidebarMenuButton>        

        </SidebarMenuItem>
      </SidebarGroup>

        <SidebarGroup>
          <SidebarMenu>
            {sidebarData.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={item.isActive}
                            >
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
