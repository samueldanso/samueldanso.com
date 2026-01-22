import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  title: string;
  isActive: boolean;
}

export function ProfileHeader({ name, title, isActive }: ProfileHeaderProps) {
  return (
    <header className="top-0 z-50 w-full animate-slide-from-down-and-fade-1">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              alt="Profile"
              className="rounded-full"
              fill
              src="/profile-icon.png"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-0 flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-foreground">
              {name}
            </h1>
            <p className="text-muted-foreground text-sm font-normal">{title}</p>
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
