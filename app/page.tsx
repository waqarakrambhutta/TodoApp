import Container from "@/components/Container";
import Item from "@/components/Item";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-fixed bg-center">
      <h1 className="text-3xl font-serif font-extrabold text-white">
        TODO LIST
      </h1>
      <Container className="">
        <Item className="text-zinc-300 hover:text-white" />
      </Container>
    </main>
  );
}
