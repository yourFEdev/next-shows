import {
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      border-slate-200
      dark:border-slate-800
      "
    >
      <div className="container-page py-14">

        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-10
          "
        >

          <div>

            <h2
              className="
              text-3xl
              font-black
              gradient-text
              "
            >
              {process.env.NEXT_PUBLIC_NAME}
            </h2>

            <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-md leading-8">
              Frontend Web Developer passionate about
              building modern, scalable and user-friendly
              web applications.
            </p>

          </div>

          <div className="flex gap-5">

          </div>

        </div>

        <div
          className="
          mt-12
          pt-8
          border-t
          border-slate-200
          dark:border-slate-800
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          text-sm
          text-slate-500
          "
        >
          <p>
            {new Date().getFullYear()}  {process.env.NEXT_PUBLIC_NAME} 
          </p>

          <p>
            Built with Next.js · TypeScript · Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}