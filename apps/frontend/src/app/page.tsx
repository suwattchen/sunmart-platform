export default function Home() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">SunMart Hosting</h1>
        <p className="text-xl mb-8">เปิดใช้งานใน 30 วินาที • SSL ฟรี • สำรองข้อมูลอัตโนมัติ</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {name:"เริ่มต้น",price:"59฿/ด.",disk:"1 GB",bw:"50 GB"},
            {name:"ธุรกิจ",price:"199฿/ด.",disk:"5 GB",bw:"200 GB"},
            {name:"n8n Pro",price:"299฿/ด.",exec:"20k exec/mo",disk:"2 GB"}
          ].map(p => (
            <div key={p.name} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition border border-gray-700">
              <h3 className="text-2xl mb-2">{p.name}</h3>
              <p className="text-3xl font-bold mb-4">{p.price}</p>
              <p className="text-gray-300 mb-6">{p.disk || p.exec}</p>
              <button className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 w-full">สั่งซื้อ</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
