import { Poppins } from "next/font/google";

export const metadata = {
  title: "Partners",
};

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const PartnersPageLayout = ({ children }) => {
  return <div className={poppins.className}>{children}</div>;
};

export default PartnersPageLayout;
