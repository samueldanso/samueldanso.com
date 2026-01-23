import Image from "next/image";

interface ProfileHeaderProps {
  name: string;
  title: string;
  isActive: boolean;
}

/** Josh-style: image (96px) + name/title, left-aligned with About section. Inter font, natural spacing. */
export function ProfileHeader({ name, title, isActive }: ProfileHeaderProps) {
  return (
    <header className="flex items-center gap-6 font-sans">
      <div className="relative size-16 flex-shrink-0">
        <Image
          alt="Profile"
          className="rounded-full object-cover object-[center_30%]"
          fill
          src="/profile-icon.png"
          sizes="96px"
          priority
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h1 className="text-xl font-medium leading-tight tracking-tight text-foreground">
          {name}
        </h1>
        <p className="text-[15px] font-normal text-muted-foreground">{title}</p>
        {isActive && (
          <div className="mt-1 flex items-center gap-2">
            <span
              className="size-2 shrink-0 rounded-full bg-primary"
              aria-hidden
            />
            <span className="text-sm text-muted-foreground">
              available for work
            </span>
          </div>
        )}
      </div>
    </header>
  );
}
