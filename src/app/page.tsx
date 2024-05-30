import ItemCard from "@/components/item-card";

export default function Home() {
  console.log("Home");

  // URL untuk setiap gambar anjing
  const images = [
    "https://images.dog.ceo/breeds/kuvasz/n02104029_2150.jpg",
    "https://images.dog.ceo/breeds/cockapoo/bubbles2.jpg",
    "https://images.dog.ceo/breeds/komondor/n02105505_2322.jpg",
    "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_4337.jpg",
    "https://images.dog.ceo/breeds/terrier-american/n02093428_10245.jpg"
  ];

  return (
    <main>
      <h1>Daftar Gambar Anjing Keren</h1>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-5">
          {/* Mapping setiap gambar untuk membuat ItemCard */}
          {images.map((imageUrl, index) => (
            <ItemCard key={index} name={`Dog ${index + 1}`} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    </main>
  );
}
