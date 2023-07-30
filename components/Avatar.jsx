import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarComponent = () => {
  return (
    <>
      {/* Figure out how to add the relative path to the image, add some of the content from the Figma design - think about the form, popup subscription and how to navigate within the SPA with a click + image glide in */}
      <Avatar className="w-12 h-12 ring-2 ring-yellow-400 hover:ring-dark-mode-bg-color hover: bg-dark-mode-bg-color">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </>
  );
};

export default AvatarComponent;
