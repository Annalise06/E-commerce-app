import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import {
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { navlist } from "../assests/data/data";

const Header = () => {
  //menubar
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  // cartopen and close
  // const [cartList, setCartList] = useState(false);
  // const handleClose = () => {
  //   setCartList(null);
  // };
  //scroll navbar
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  // // // cart add in shop
  // const getdata = useSelector((state) => state.auth.cartReducer.carts);
  // console.log(getdata);

  // // delete cart
  // const dispatch = useDispatch();
  // const delet = (id) => {
  //   dispatch(DELETE(id));
  // };

  // // total prcie
  // const [price, setPrice] = useState(0);
  // console.log(price);

  // const totals = () => {
  //   let price = 0;
  //   getdata.map((e, i) => {
  //     price = parseFloat(e.price) * e.qty + price;
  //   });
  //   setPrice(price);
  // };

  // useEffect(() => {
  //   totals();
  // }, [totals]);

  // const handleCloses = () => {
  //   setCartList(null);
  // };

  return (
    <div className="header">
      <header className="fixed top-0 left-0 right-0 bg-gray-100 z-10 shadow-md">
        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <div className="w-[93%] pt-6 pl-2.5 default_cursor_cs">
            <div className="flex justify-between py-2">
              <Logo />
              <div onClick={onClose}>
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="center">
            <ul>
              {navlist.map((nav, i) => (
                <li key={i}>
                  <Link to={nav.path}>{nav.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
        {/* nav */}
        <nav className="mx-4 flex justify-between md:gap-5 md:flex md:justify-between">
          <div className="md:hidden flex " onClick={showDrawer}>
            <AiOutlineMenu className="mt-4" size={25} />
          </div>

          <div className="flex lg:gap-16 md:gap-10 mx-3 py-5">
            <div>
              <Logo />
            </div>
            <div className="">
              <ul className="md:flex md:text-sm hidden gap-10 uppercase font-semibold">
                {navlist.map((nav, i) => (
                  <li key={i}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-5">
            <div className=" hidden lg:flex lg:mt-3 lg:relative px-5 mb-3 rounded-2xl bg-white">
              <input
                type="text"
                placeholder="Search products.."
                className="border-none outline-none"
              />
              <BiSearch
                className="absoloute ml-2 mt-3 text-gray-500"
                size={20}
              />
            </div>
            <IoPersonOutline className="hidden lg:flex mt-4 pt-1" size={25} />
            <IoHeartOutline className="hidden lg:flex mt-4 pt-1" size={25} />
          </div>
          <div className="mt-3 mb-3 bg-gradient-to-tr from-red-600 to-orange-400 px-4 pt-2 rounded-2xl">
            <button
              className="flex md:gap-2 gap-1 text-gray-200"
              // onClick={() => setCartList(!cartList)}
            >
              <BiShoppingBag size={20} />{" "}
              <span className="md:font-semibold">My Cart</span>
              <span>(0)</span>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;