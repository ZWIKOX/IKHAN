import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
// import { Button } from "./ui/button";
import { Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  username: string;
  avatarUrl: string | null;
}

export default function Navbar({ username, avatarUrl }: NavbarProps) {
  return (
    <div className="mx-16 pt-4 flex items-center justify-between">
      <h1 className="text-3xl font-bold text-primary">IKHAN</h1>
      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-12 h-12 cursor-pointer">
              <AvatarImage src={avatarUrl ?? ""} alt={username} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              <span className="font-bold capitalize">{username}</span>
            </DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>
                  <Link to="/settings">Settings</Link>
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
