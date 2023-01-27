import { useState } from "react";
import { Link } from "react-router-dom";
// components
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

// icons
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
  RiSearchLine,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleShowOrder = () => {
    setShowOrder(!showOrder);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      {/* Sidebar */}
      <Sidebar showMenu={showMenu} />
      {/* Menu Mobile */}
      <nav className="bg-[#1F1D28] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button className="text-white p-2" onClick={handleShowMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      {/* Home de la app */}
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="p-4 ">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              {/* Title */}
              <div>
                <h1 className="text-2xl text-gray-300">Fast Food</h1>
                <p className="text-gray-500">26 january 2023</p>
              </div>
              {/* Search */}
              <form>
                <div className="w-full relative ">
                  <RiSearchLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-[#1F1D28] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b">
              <Link href="#" className="py-2 pr-4 text-[#ec7c6a]">
                Hot dishes
              </Link>
              <Link href="#" className="py-2 pr-4">
                Cold dishes
              </Link>
              <Link href="#" className="py-2 pr-4">
                Soup
              </Link>
              <Link href="#" className="py-2 ">
                Grill
              </Link>
            </nav>
          </header>
          {/* Title content */}
          <div className="flex justify-between items-center text-gray-300 px-4 py-2 mb-8">
            <div>
              <h2 className="font-medium text-xl">Choose Dishes</h2>
            </div>
            <div>
              <button className="flex items-center gap-2 bg-[#1F1D28] py-2 px-4 rounded-lg">
                <RiArrowDownSLine />
                Dine in
              </button>
            </div>
          </div>
          {/* Content Cards */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="comida.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
            {/* Card */}
            <Card
              img="dish.png"
              description="Speacy seasoned seafood nodles"
              price="2.29"
              inventory="20"
            />
          </div>
        </div>
        {/* Orders */}
        <div className="lg:col-span-2 fixed lg:static right-0 top-0 w-full h-full bg-[#1F1D28]">
          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 text-xl bg-[#262837] rounded-full  " />
            <h1 className="text-2xl mt-4 mb-4">Orders #121286</h1>
            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button className="bg-[#ec7c6a] py-2 px-4  rounded-xl text-white">
                Dine in
              </button>
              <button className="py-2 px-4 rounded-xl text-[#ec7c6a] border border-gray-500">
                To Go
              </button>
              <button className="py-2 px-4 rounded-xl text-[#ec7c6a] border border-gray-500">
                Delivery
              </button>
            </div>

            <div className="flex justify-between items-center text-gray-300 px-4 py-6">
              <div className="font-medium text-lg">
                <h2>Item</h2>
              </div>
              <div className="flex items-center gap-4 font-medium text-lg">
                <h2>Qty</h2>
                <h2>Price</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
