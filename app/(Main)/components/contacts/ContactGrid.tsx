import ContactCard from "./ContactCard";
import type { ContactItem } from "./contact-data";

type ContactGridProps = {
  contacts: ContactItem[];
};

export default function ContactGrid({ contacts }: ContactGridProps) {
  return (
    <section
      className="
        grid w-full max-w-5xl
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:gap-5
      "
    >
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </section>
  );
}
