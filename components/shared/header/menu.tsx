import { Button } from "@/components/ui/button";
import ModeToggle from "./mood-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import UserButton from "./userButton";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle></ModeToggle>
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart></ShoppingCart>
            Cart
          </Link>
        </Button>
        <UserButton></UserButton>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical></EllipsisVertical>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle></ModeToggle>
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCart></ShoppingCart>
                Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href="/cart">
                <UserIcon></UserIcon>
                Signin
              </Link>
            </Button>

            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
