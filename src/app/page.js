import Image from "next/image";
import Button from "@/components/buttons/button";
import ArrowButton from "@/components/buttons/arrowButton";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white items-center justify-between p-24">
      <Button color={"black"} />
      <ArrowButton color={"black"} />
    </main>
  );
}
