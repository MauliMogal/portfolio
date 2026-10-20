import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mauli Mogal
      </h1>
      <p className="mb-4">
        {`I work in sales at Frappe.`}
      </p>
      <p className="mb-4">
        {`I help businesses move to ERPNext and get live on Frappe Cloud, and
        I'm building AI tools that make that setup faster. Most of my thinking
        is about go-to-market: who to sell to, what to say, and how to price it.`}
      </p>
      <p className="mb-4">
        {`Before Frappe, I wrote code, then sold business software: first call, demo, onboarding,
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
