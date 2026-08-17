import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mauli Mogal
      </h1>
      <p className="mb-4">
        {`I sell business software for a living.`}
      </p>
      <p className="mb-4">
        {`I manage the entire sales cycle: first call, demo, onboarding, and
        staying with the customer until the software is actually working for
        them.`}
      </p>
      <p className="mb-4">
        {`I've learned to listen first and show less of the product, not more.
        Most demos fail because the seller talks about features instead of the
        customer's actual problem.`}
      </p>
      <p className="mb-4">
        {`I'm aiming for a Product Consultant role in the Frappe and ERPNext
        ecosystem.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
