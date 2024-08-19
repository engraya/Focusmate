import Link from "next/link"
import {
  Bell,
  Home,
  Menu,
  Package2,
  Search,
} from "lucide-react"
import { FaRegNewspaper } from "react-icons/fa6";
import { FcSerialTasks } from "react-icons/fc";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdPending } from "react-icons/md";
import { MdNotificationImportant } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggler } from "../ThemeToggler/ThemeToggler"

export function GlobalLayoutProvider({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Focus Mate</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <SignedIn>
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/tasks"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <FcSerialTasks className="h-4 w-4" />
                Tasks
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  6
                </Badge>
              </Link>
              <Link
                href="/notes"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <FaRegNewspaper className="h-4 w-4" />
                Notes{" "}
              </Link>
              <Link
                href="/events"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <RiCalendarEventLine className="h-4 w-4" />
                Events
              </Link>
              <Link
                href="/important"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <MdNotificationImportant className="h-4 w-4" />
                Priorities
              </Link>
              <Link
                href="/incomplete"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <MdPending className="h-4 w-4" />
                Pending
              </Link>
              <Link
                href="/completed"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <GrCompliance className="h-4 w-4" />
                Completed
              </Link>
            </nav>
            </SignedIn>
          </div>
          <div className="mb-6 p-4">
          <SignedOut>
              <div className="flex items-center cursor-pointer rounded-lg justify-center bg-[#35be91] px-8 py-2 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                <p className="font-bold">
                <SignInButton />
                </p>
                <svg className="h-4 w-4 flex-none" fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                </svg>
              </div>
          </SignedOut>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
           
            <SheetContent side="left" className="flex flex-col">
            <SignedIn>
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                   href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Focus Mate</span>
                </Link>
                <Link
                  href="/"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/tasks"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <FcSerialTasks className="h-5 w-5" />
                  Tasks
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="/notes"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <FaRegNewspaper className="h-5 w-5" />
                  Notes{" "}
                </Link>
                <Link
                 href="/events"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <RiCalendarEventLine className="h-5 w-5" />
                  Events
                </Link>
                <Link
                 href="/important"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <MdNotificationImportant className="h-5 w-5" />
                  Priorities
                </Link>
                <Link
                href="/incomplete"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <MdPending className="h-5 w-5" />
                  Pending
                </Link>
                <Link
                href="/completed"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <MdNotificationImportant className="h-5 w-5" />
                  Completed
                </Link>
              </nav>
              <div className="mt-auto mx-auto">
                <UserButton/>
              </div>
              </SignedIn>
              <div className="mb-6 mt-auto p-4">
              <SignedOut>
              <div className="flex items-center cursor-pointer rounded-lg justify-center bg-[#35be91] px-8 py-2 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                <p className="font-bold">
                <SignInButton />
                </p>
                <svg className="h-4 w-4 flex-none" fill="currentColor" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <title>Arrow Right</title>
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9" />
                </svg>
              </div>
              </SignedOut>
          </div>
            </SheetContent>
      
 
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <SignedIn>
            <UserButton/>
          </SignedIn>
    
          <ThemeToggler/>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            {children}
        </main>
      </div>
    </div>
  )
}
