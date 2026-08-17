export const metadata = {
  title: 'Contact',
  description: 'Get in touch.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Contact
      </h1>
      <p className="mb-4">
        <a
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          href="mailto:maulimogal@gmail.com"
        >
          maulimogal@gmail.com
        </a>
      </p>
      <p className="mb-4">
        <a
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          href="https://linkedin.com/in/maulimogal"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/maulimogal
        </a>
      </p>
      <p className="mb-4">
        <a
          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
          href="https://github.com/MauliMogal"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/MauliMogal
        </a>
      </p>
    </section>
  )
}
