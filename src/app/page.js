import AllProducts from "@/components/AllProducts";
import Banner from "@/components/Banner";
import Highprice from "@/components/Highprice";
import LowPrice from "@/components/LowPrice";
import Image from "next/image";

export default function Home() {
  return (
    <div >
  <Banner></Banner>
  <Highprice></Highprice>
  <LowPrice></LowPrice>
  <AllProducts></AllProducts>
    </div>
  );
}
