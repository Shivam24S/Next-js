export default function functionPageContent({ params }) {
  return (
    <>
      <h1>This is blog page content</h1>
      {params.slug}
    </>
  );
}
