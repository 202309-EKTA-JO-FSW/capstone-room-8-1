import CheckoutAddress from "./CheckoutAddress";
import CheckoutDetails from "./CheckoutDetails";
import CheckoutReview from "./CheckoutReview";
import Image from 'next/image'
 
function Home() {
  return (
    <Image
      src="https://example.com/hero.jpg"
      alt="Landscape picture"
      width={800}
      height={500}
    />
  )
}
 
export { Home };

export default function Page() {
  return (
    <div>
      <CheckoutAddress/>
      <CheckoutDetails/>
      <CheckoutReview/>
    </div>
  );
}