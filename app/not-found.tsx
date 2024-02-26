import Image from "next/image";
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="pt-45 lg:pt-50 xl:pt-55 pb-25 lg:pb-32.5 xl:pb-37.5 overflow-hidden">
      <div className="animate_top mx-auto max-w-[518px] text-center">
        <Image
          src="/images/shape/.svg"
          alt="404"
          className="mx-auto mb-7.5"
          width={400}
          height={400}
        />

        <h2 className="font-semibold text-2xl md:text-4xl text-black mb-5">
          Seite nicht gefunden.
        </h2>
        <p className="mb-7.5">
          Die angeforderte Seite ist nicht auffindbar. 
          Überprüfen Sie bitte die URL und versuchen Sie es erneut.
        </p>
        <Link href="/"
              className="inline-flex items-center gap-2.5 bg-black hover:bg-blackho ease-in-out duration-300 font-medium text-white rounded-full px-6 py-3">
          Zurück zur Startseite
          <svg
            className="fill-white"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
              fill=""
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}