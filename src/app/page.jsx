import { Button } from "@/components/ui/button";
import { FaDiscord, FaReadme } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-lg">
        {/* Bot Image */}
        <img
          src="https://cdn.elvxk.web.id/sjbot/botsobat.jpg"
          height={160}
          width={160}
          className="rounded-full border-4 border-black dark:border-white"
          alt="Sobat Jagoan Bot"
        />

        {/* Title */}
        <div>
          <h1 className="font-extrabold text-4xl md:text-5xl">
            SOBAT JAGOAN
          </h1>
          <h2 className="text-xl md:text-2xl mt-1">
            Discord Utility Bot
          </h2>
        </div>

        {/* Description */}
        <p className="text-center leading-relaxed">
          Sobat Jagoan is a versatile Discord bot built to manage, moderate, and enhance
          your server. Enjoy automated roles, welcome messages, moderation tools,
          and more — all in one lightweight and easy-to-use package.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg" className="flex items-center gap-2">
            <Link
              href="https://discord.com/oauth2/authorize?client_id=1457397789708390400"
              target="_blank"
            >
              <FaDiscord /> Add to Server
            </Link>
          </Button>

          <Button asChild size="lg" variant="secondary" className="flex items-center gap-2">
            <Link href="/docs">
              <FaReadme /> Documentation
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
