import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  username: string;
  title: string;
  isActive: boolean;
}

export function ProfileHeader({
  name,
  username,
  title,
  isActive,
}: ProfileHeaderProps) {
  return (
    <header className="top-0 z-50 w-full animate-slide-from-down-and-fade-1 cursor-context-menu">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Image
              alt="Profile"
              className="rounded-full"
              fill
              src="/profile-icon.png"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div className="absolute -bottom-2 -right-2 rounded-full bg-white px-1 py-0.5 text-sm dark:bg-gray-900">
              ✨
            </div>
          </div>
          <div className="cursor-pointer">
            <h1 className="font-medium text-base transition-element">
              <span className="sr-only">{name}</span>
              <span
                aria-hidden="true"
                className="group relative block overflow-hidden"
              >
                <span className="group-hover:-translate-y-full inline-block transition-all duration-300 ease-in-out">
                  <span
                    className="inline-block"
                    style={{ transitionDelay: "275ms" }}
                  >
                    {name}
                  </span>
                </span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                  <span
                    className="inline-block"
                    style={{ transitionDelay: "175ms" }}
                  >
                    {username}
                  </span>
                </span>
              </span>
            </h1>
            <p className="text-muted-foreground text-[14px] mt-0 font-normal">
              <span className="sr-only">{title}</span>
              <span
                aria-hidden="true"
                className="group relative block overflow-hidden"
              >
                <span className="group-hover:-translate-y-full inline-block transition-all duration-300 ease-in-out">
                  <span
                    className="inline-block"
                    style={{ transitionDelay: "275ms" }}
                  >
                    {title}
                  </span>
                </span>
                <span className="absolute top-0 left-0 inline-block translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                  <span
                    className="inline-block"
                    style={{ transitionDelay: "175ms" }}
                  >
                    I build stuff
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* Status */}
        {isActive && (
          <div className="flex items-center">
            <div className="absolute flex size-4">
              <span className="absolute top-[4.5px] size-2 animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative top-[4.5px] size-2 rounded-full bg-green-500"></span>
            </div>
            <span className="prose prose-neutral ml-4 dark:prose-invert text-[14px]">
              available for work
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
