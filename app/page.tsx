import Banner from "@/components/Banner/Banner";
import Container from "@/components/Container";
import Sejarah from "@/components/Sejarah/Sejarah";
import Tentang from "@/components/Tentang/Tentang";
import Wisatawan from "@/components/Wisatawan/Wisatawan";

export default function Home() {
  return (
    <Container>
      <Banner />
      <Tentang/>
      <Sejarah/>
      <Wisatawan/>
    </Container>
  )
}
