import useScreenWidth from "@/Hooks/useGetScreenWidth";
import { NavBarDesktop } from "../NavBarDesktop";
import { NavbarMobile } from "../NavBarMobile";

const NavBar = () => {
  const screenWidth = useScreenWidth();

  return (
    <div>
      {screenWidth < 800 ? <NavbarMobile/> : <NavBarDesktop/>} 
    </div>
  )
}

export default NavBar;