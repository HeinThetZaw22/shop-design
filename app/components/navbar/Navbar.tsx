"use client";
import Container from "../Container";
import Logo from "./Logo";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <div className="
    z-10
    w-full
    bg-neutral-600/35
    fixed
    ">
        <div className="
        py-4
        ">
            <Container>
                <div className="
                flex 
                flex-row 
                items-center 
                justify-between
                gap-3
                md:gap-0
                ">
                    <Logo />
                    <MenuItems />
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Navbar