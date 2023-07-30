import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const metadata = {
  title: "About me",
};

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const AboutPageLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-center space-y-3 align-middle py-4 my-6">
        <h1>This is the about page of my website</h1>
        <Image
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
          alt="Picture of a web developer"
          width={400}
          height={450}
          className="mx-auto rounded-lg"
        />
        <p className={poppins.className}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
          doloribus itaque possimus earum doloremque cupiditate et unde quidem.
          Officiis aspernatur vero hic rerum est dolore optio velit, eius non
          quasi!
        </p>
        <div className="flex mx-auto">
          <Button className="bg-yellow-600 text-brown font-semibold px-6 rounded hover:bg-pink-600 ">
            Click me!
          </Button>
        </div>
      </div>
      {children}
    </>
  );
};

export default AboutPageLayout;
