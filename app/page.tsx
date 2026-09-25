import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mauli Mogal
      </h1>
      <p className="mb-4">
        {`I work on partnerships at Frappe.`}
      </p>
      <p className="mb-4">
        {`I help grow Frappe's partner ecosystem and work on how Frappe explains
        its products to the businesses that use them.`}
      </p>
      <p className="mb-4">
        {`Before Frappe, I sold business software: first call, demo, onboarding,
        and staying with the customer until the software was actually working
        for them. That taught me to listen first and show less of the product,
        not more.`}
      </p>
      <p className="mb-4">
        {`Right now I'm writing about one idea: don't pay per user.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
