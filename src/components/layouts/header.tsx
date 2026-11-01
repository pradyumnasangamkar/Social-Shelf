"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navigationLinks } from "./constants";
import MobileNav from "./mobile-nav";
import { ModeToggle } from "./modeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { User, LogOut, BookOpen, UserCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Header() {
  const pathName = usePathname();
  const [role, setRole] = useState<string>("");
  const { data: session } = useSession();
  const router = useRouter();

  const HandleSignOut = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.log("Failed to SignOut !", error);
    }
  };

  useEffect(() => {
    const fetchRole = async () => {
      try {
        if (session?.user?.email) {
          const res = await axios.post<{ role: string }>("/api/user/get-role", {
            email: session.user.email,
          });
          setRole(res.data.role);
        }
      } catch (error) {
        // Silently catch in static/preview mode
      }
    };
    fetchRole();
  }, [session]);

  return (
    <header className="sticky top-0 w-full z-40 border-b border-zinc-200/60 dark:border-zinc-800/80 bg-white/85 dark:bg-[#090D16]/85 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-zinc-900 dark:text-white group"
            aria-label="Social Shelf"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold leading-tight tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-600 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
                Social Shelf
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-violet-600 dark:text-violet-400 -mt-1 hidden sm:block">
                Community Library
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navigationLinks.map(({ title, href }) => {
            const active = pathName === href || (href !== "/" && pathName?.startsWith(href));
            return (
              <Link
                key={title}
                href={href}
                className={classNames(
                  "px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                  active
                    ? "text-violet-600 dark:text-violet-400 bg-violet-500/10 font-semibold"
                    : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                )}
              >
                {title}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  <Avatar className="h-8 w-8 ring-2 ring-violet-500/30">
                    <AvatarImage src={session.user?.image || ""} />
                    <AvatarFallback>
                      <UserCircle className="h-5 w-5 text-violet-500" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center gap-2 p-2">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={session.user?.image || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"} />
                    <AvatarFallback>
                      <UserCircle className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col space-y-0.5 overflow-hidden">
                    <p className="text-sm font-medium truncate">
                      {session.user?.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {session.user?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    href={role ? `/${role}` : "/student"}
                    className="flex items-center cursor-pointer"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>My Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={HandleSignOut}
                  className="cursor-pointer text-red-600 focus:text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-xs sm:text-sm font-medium">
                  Log in
                </Button>
              </Link>
              <Link href="/register" className="hidden sm:inline-flex">
                <Button
                  size="sm"
                  className="text-xs sm:text-sm bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-sm font-medium rounded-lg"
                >
                  Join Free
                </Button>
              </Link>
            </div>
          )}

          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
