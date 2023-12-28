import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  type menuItem = {
    label: string;
    url: string;
  };
  const menuItems = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "About",
      url: "/about",
    },
    {
      label: "Pricing",
      url: "/pricing",
    },
    {
      label: "Support",
      url: "/support",
    },
  ];
  return (
    <div className="w-full flex justify-between items-center text-[black]">
      <div className="text-[16px] font-jakarta-sans">
        <span className=" font-bold">360</span>X-HUB
      </div>
      <div className="flex">
        {menuItems.map((item: menuItem) => {
          return (
            <Link key={item.url} href={item.url} className="mx-4">
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="flex bg-[#B2FF50] rounded-[25px] py-[8px] px-[12px] items-center">
        <div>Create Your 360</div>
        <Image
          className="ml-2"
          src="/globe.svg"
          width={30}
          height={30}
          alt="🌐︎"
        />
      </div>
    </div>
  );
};
