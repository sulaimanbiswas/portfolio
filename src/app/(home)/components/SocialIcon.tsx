import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";
import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";

const SocialIconData = [
  {
    id: 1,
    name: "Github",
    url: "https://github.com/sulaimanbiswas",
    icon: Github,
    target: "_blank",
    isActive: true,
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/sulaimanbiswas/",
    icon: Linkedin,
    target: "_blank",
    isActive: true,
  },
  {
    id: 3,
    name: "Facebook",
    url: "https://www.facebook.com/sulaimanbiswasbd",
    icon: Facebook,
    target: "_blank",
    isActive: true,
  },
  {
    id: 4,
    name: "Instagram",
    url: "https://www.instagram.com/sulaimanbiswas",
    icon: Instagram,
    target: "_blank",
    isActive: true,
  },
  {
    id: 5,
    name: "Youtube",
    url: "https://www.youtube.com/@sulaimanbiswas",
    icon: Youtube,
    target: "_blank",
    isActive: true,
  },
];

const SocialIcon = () => {
  return (
    <>
      {SocialIconData.map((item) => (
        <LinkPreview key={item.id} url={item.url} target={item.target}>
          <Button size="icon" variant="outline" className="relative">
            <item.icon />
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </Button>
        </LinkPreview>
      ))}
    </>
  );
};

export default SocialIcon;
