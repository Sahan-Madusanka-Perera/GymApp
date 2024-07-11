import MemberForm from "@/components/forms/MemberForm";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container flex-1 max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="dumbbell"
            className="mb-12 h-10 w-fit"
          />

          <MemberForm />

          <div className="text-14-regular mt-9 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 GymBuddy
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image 
        src="/assets/images/side-img.jpg"
        height={1000}
        width={1000}
        alt="side-main-img"
        className="side-img max-w-[50%]"
      />
    </div>
  )
}
