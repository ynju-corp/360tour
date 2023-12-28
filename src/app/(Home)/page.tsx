import { Header } from "../_lib/Header";
import PanoBanner from "../_lib/Page/Home/panoBanner";

export default function Home() {
  return (
    <>
      <div className="mx-[21px] mt-[21px] bg-white py-[21px] px-[40px] rounded-[21px]">
        <Header />
        <div className="mx-[21px] mt-[21px] bg-white py-[21px] px-[40px] rounded-[21px]">
        <div
          className="text-center h-[380px] mt-[50px] flex items-center justify-center"
          style={{
            backgroundImage: "url(/donat.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="text-[96px] leading-[96px] text-white font-jakarta-sans"
            style={{
              mixBlendMode: "difference",
            }}
          >
            Discover Limitless <br />
            Possibilities
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-center max-w-[613px]">
            Unleash the power of 360 virtual tours as your dynamic marketing
            channel. Showcase your products in a visually stunning and
            interactive way, providing potential customers with an unparalleled
            experience.
          </div>
        </div>
        <div className="flex justify-between">
            <PanoBanner/>
        </div>
      </div>
      </div>
    </>
  );
}
