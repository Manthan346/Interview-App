import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useEffect } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()

  const handleFAQClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      // Navigate to home and set hash in URL
      navigate("/#faq");
    } else {
      // Already on home page, just scroll
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // When route changes to "/#faq", scroll after render
  useEffect(() => {
    if (location.hash === "#faq") {
      const el = document.getElementById("faq");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [location]);

  const isActive = (path: string) => location.pathname === path


  return (
    <nav className="fixed top-0 left-0 w-full border-b bg-background z-50">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <NavLink
          to="/"
          className="text-foreground font-bold font-sans text-xl hover:opacity-90"
        >
          mockbuddy.io
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
               <NavLink   className={`font-sans transition-colors ${
              isActive("/")
                ? "text-primary font-semibold"
                : "text-foreground hover:text-primary"
            }`} to="/">Home</NavLink>
          <a
            href="#faq"
            onClick={handleFAQClick}
            className="text-foreground/80 font-sans hover:text-foreground transition-colors"
          >
            FAQ
          </a>

          {/* Login Button with active state */}
         
          
          
            <NavLink   className={`font-sans transition-colors ${
              isActive("/login")
                ? "text-primary font-semibold"
                : "text-foreground hover:text-primary"
            }`} to="/login">Login</NavLink>

              
          
          
        
            <NavLink  className={`font-sans transition-colors ${
              isActive("/contact")
                ? "text-primary font-semibold"
                : "text-foreground hover:text-primary"
            }`} to="/contact">Contact Us</NavLink>
          

          <Button
            asChild
            variant="default"
            className={`bg-primary text-primary-foreground font-sans hover:opacity-90 ${
              isActive("/try") ? "ring-2 ring-primary/50" : ""
            }`}
          >
            <NavLink to="/signup">Give it a try</NavLink>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-4 p-6">
              <a
                href="#faq"
                onClick={(e) => {
                  handleFAQClick(e);
                  setIsOpen(false);
                }}
                className="text-foreground/80 font-sans hover:text-foreground transition-colors"
              >
                FAQ
              </a>
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "text-foreground/80 font-sans hover:text-foreground transition-colors"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "text-foreground/80 font-sans hover:text-foreground transition-colors"
                }
              >
                Contact Us
              </NavLink>
             
             <Button
            asChild
            variant="default"
            className={`bg-primary   text-primary-foreground font-sans hover:opacity-90 ${
              isActive("/try") ? "ring-2 ring-primary/50" : ""
            }`}
          >
            <NavLink to="/signup">Give it a try</NavLink>
          </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
