import { ComponentType } from "react";

interface SocialLinkProps {
  href: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
  username?: string;
}

const SocialLink = ({ href, icon: Icon, label, username }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 w-full p-4 rounded-lg bg-card border border-border 
                 transition-all duration-300 ease-out
                 hover:border-primary/50 hover:shadow-glow hover:scale-[1.02] hover:-translate-y-0.5"
    >
      <div
        className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary 
                      transition-colors duration-300 group-hover:bg-primary/20"
      >
        <Icon className="w-6 h-6 text-foreground transition-colors duration-300 group-hover:text-primary" />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-foreground">{label}</span>
        {username && (
          <span className="text-sm text-muted-foreground">{username}</span>
        )}
      </div>
      <div className="ml-auto opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        <svg
          className="w-5 h-5 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </a>
  );
};

export default SocialLink;
