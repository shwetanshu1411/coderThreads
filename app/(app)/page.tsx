import { Button } from "@/components/ui/button";

export default function Home() 
{
  return(
    <>
    {/* banner  */}
    <section className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex items-centre">
          <div>
            <h1 className="text-2xl font-bold">Home</h1>
            <p className="text-sm text-gray-600">
              Recent posts by our coders
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* post  */}
    <section className="my-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-4">
          {/* <PostsList /> */}
        </div>
      </div>
    </section>
</>
  )
}