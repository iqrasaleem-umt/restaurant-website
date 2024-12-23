export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Category: {params.slug}</div>;  {/* Correct way to reference params.slug */}
}
