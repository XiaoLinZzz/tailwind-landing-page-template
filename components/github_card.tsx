import Image from "next/image";

interface GithubUserCardProps {
  githubId: string;
  role?: string;
  className?: string;
  link?: string;
}

export default function GithubUserCard({
  githubId,
  role = "Developer",
  className,
  link,
}: GithubUserCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 p-2 hover:bg-gray-700/50 transition-colors cursor-pointer ${className}`}
        >
          {children}
        </a>
      );
    }
    return (
      <div
        className={`flex items-center gap-2 rounded-lg border border-gray-700 bg-gray-800/50 p-2 ${className}`}
      >
        {children}
      </div>
    );
  };

  return (
    <CardWrapper>
      {/* Avatar */}
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <Image
          src={`https://avatars.githubusercontent.com/${githubId}`}
          alt={`${githubId}'s avatar`}
          width={48}
          height={48}
          className="h-full w-full object-cover"
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col flex-1">
        <h3 className="text-base font-medium text-gray-200">{githubId}</h3>
        <p className="text-xs text-gray-400">{role}</p>
      </div>

      {/* Code Icon */}
      <div className="flex items-center justify-center pl-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      </div>
    </CardWrapper>
  );
}
