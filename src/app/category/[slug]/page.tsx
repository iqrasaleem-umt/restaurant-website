export async function generateStaticParams() {
    return [{ slug: 'example' }]; // Ensure this is an array of objects
  }
  
  export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Category: {params.slug}</div>;
  }
  