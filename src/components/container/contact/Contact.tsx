import Image from "next/image";
import portfolio1 from "@/assets/img/Portfolio1.png";
import portfolio2 from "@/assets/img/Portfolio2.png";
import portfolio3 from "@/assets/img/Portfolio3.png";
import heroImage from "@/assets/svg/avatar_contact.svg";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="w-full px-4 md:px-20 my-12 flex flex-col md:flex-row justify-around items-center">
      <div className="md:w-[540px]">
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-extrabold text-[28px] md:text-[40px] tracking-tight">
            Let&apos;s Work Together
          </h2>
          <p className="text-sm font-medium mt-2 md:text-base">
            Have a project in mind or just want to say hi? Drop me a message —
            I'd love to hear from you.
          </p>
        </div>

        {/* Portfolio Previews */}
        <div className="flex gap-2 mb-6 justify-center sm:max-w-xs md:max-w-sm">
          <div className="w-1/3 rounded-xl overflow-hidden">
            <Image
              src={portfolio1}
              alt="Portfolio 1"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-1/3 rounded-xl overflow-hidden">
            <Image
              src={portfolio2}
              alt="Portfolio 2"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-1/3 rounded-xl overflow-hidden">
            <Image
              src={portfolio3}
              alt="Portfolio 3"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:max-w-[540px]">
        {/* Avatar */}
        <div className="flex justify-center mb-0.5 z-10">
          <Image
            src={heroImage}
            alt="Avatar"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full bg-white rounded-2xl shadow-sm p-6 pt-10 -mt-4">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-sm" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary-300 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-sm" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary-300 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-bold text-sm" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows={5}
                className="border border-neutral-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-primary-300 transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-full bg-primary-300 hover:bg-primary-300/90 text-white font-bold text-base"
            >
              Let&apos;s Talk
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
