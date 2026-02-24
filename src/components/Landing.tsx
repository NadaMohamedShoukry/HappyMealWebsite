import LandingImage from "../assets/mealsimage.png";
export default function Landing() {
  return (
    <div
      className="bg-[#acd8a7] dark:bg-[#8bca84] dark:text-gray-700 text-gray-700 sm:w-full 
    sm:h-100 rounded-4xl flex flex-col sm:flex-row sm:justify-between items-center p-10"
    >
      <p
        className="font-bold text-2xl font-noto sm:w-1/2
       text-center "
      >
        Discover delicious meals crafted to satisfy your cravings and fit your
        lifestyle!
      </p>
      <img alt="landing-image" src={LandingImage} className="w-100 h-100" />
    </div>
  );
}
