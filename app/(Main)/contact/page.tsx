import ContactGrid from "../components/contacts/ContactGrid";
import TitleForAll from "../components/TitleForAll";
import { getContacts } from "@/lib/data/public-data";

export default async function ContactPage() {
  const contacts = await getContacts();

  return (
    <main
      className="
        flex min-h-full flex-col
        items-center
        gap-8
        px-4
        pb-10
        pt-4
        sm:px-6
        lg:px-8
        lg:pt-6
        xl:px-16
      "
    >
      <TitleForAll
        titleThisPage="راه های ارتباطی من"
        textDetails="اگر سوالی داری یا دوست داری با من در ارتباط باشی، خوشحال می‌شم ازت بشنوم."
      />

      <ContactGrid contacts={contacts} />

      <div
        className="
          group relative
          w-full max-w-5xl
          overflow-hidden
          rounded-2xl
          border border-border
          bg-card
          px-5 py-6
          text-center
          transition-all duration-300
          hover:border-primary/30
          hover:shadow-[0_0_35px_rgba(124,58,237,0.07)]
          sm:px-8 sm:py-7
        "
      >
        <div
          className="
            pointer-events-none
            absolute -bottom-12 -right-12
            size-32
            rounded-full
            bg-primary/10
            blur-3xl
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        <div className="relative">
          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            ممنون که برای ارتباط با من وقت گذاشتی.
          </p>

          <p
            className="
              mt-1
              text-base font-semibold
              text-foreground
              sm:text-lg
            "
          >
            منتظر پیامت هستم!
            <span className="ms-2 text-primary">✦</span>
          </p>
        </div>
      </div>
    </main>
  );
}
