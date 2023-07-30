import { Poppins } from "next/font/google";

export const metadata = {
  title: "Channels",
};

const poppins = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const ChannelsPageLayout = ({ children }) => {
  return <div className={poppins.className}>{children}</div>;
};

export default ChannelsPageLayout;
