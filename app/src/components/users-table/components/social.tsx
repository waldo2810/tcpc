import { Facebook, Github, Globe, Twitter, Youtube } from "lucide-react";

export const SocialProfile = ({ value }: { value: SocialProfile }) => {
  const socialMedia = value.includes("twitter")
    ? "Twitter"
    : value.includes("Facebook")
    ? "Facebook"
    : value.includes("github")
    ? "Github"
    : value.includes("linkedin")
    ? "LinkedIn"
    : value.includes("youtube")
    ? "YouTube"
    : "Website";
  let Icon = undefined;
  switch (socialMedia) {
    case "Facebook":
      Icon = <Facebook className="text-slate-500" size={20} />;
      break;
    case "Github":
      Icon = <Github className="text-slate-500" size={20} />;
      break;
    case "LinkedIn":
      Icon = <Facebook className="text-slate-500" size={20} />;
      break;
    case "Twitter":
      Icon = <Twitter className="text-slate-500" size={20} />;
      break;
    case "Website":
      Icon = <Globe className="text-slate-500" size={20} />;
      break;
    case "YouTube":
      Icon = <Youtube className="text-slate-500" size={20} />;
      break;
    default:
      Icon;
      break;
  }
  return (
    <a href={value} className="flex items-center justify-center gap-2">
      {Icon ?? null}
    </a>
  );
};
