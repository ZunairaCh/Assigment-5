import Image from "next/image";

function Main() {
  return (
    <div className="bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start space-y-6 md:w-[50%] ">
          <h1 className="text-black text-[40px] font-bold leading-[65.8px] text-left">
          <span className="block">IMPECCABLE</span>
  <span className="block">CRAFTSMANSHIP</span>
  <span className="block">AND FINESSE</span>
          </h1>
          <p className="font-extrabold text-2xl font-serif text-[#A29875] text-center md:text-left">
            An example of intricate workmanship and detail, elegant necklaces and
            long and short chains form a part of our desirable collection.
          </p>
          <button className="w-[288px] h-[58px] p-[10px] gap-[10px] rounded-tl-[10px] bg-[#A29875] font-serif text-xl text-white">
            Explore Now
          </button>
        </div>
        <div className="w-[462px] h-[647px] md:ml-10">
          <Image
            src="/images/rs-group.png"
            alt="Logo"
            width={462}
            height={647}
            className="object-cover rounded-tl-[150px] rounded-br-[150px]"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Main;
