import Container from "@/components/Container";
import Item from "@/components/Item";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-3xl font-serif font-extrabold">TODO LIST</h1>
      <Container className="">
        <Item className="text-slate-600 hover:text-slate-800" />
      </Container>
    </main>
  );
}
