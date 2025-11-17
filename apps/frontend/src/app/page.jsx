const plans = [
  {
    name: "เริ่มต้น",
    price: "59฿/ด.",
    description: "เหมาะกับเว็บเล็กหรือทดลองใช้งาน",
    features: ["SSD 1 GB", "แบนด์วิดท์ 50 GB", "สำรองข้อมูลรายวัน"],
  },
  {
    name: "ธุรกิจ",
    price: "199฿/ด.",
    description: "รองรับทราฟฟิกมากขึ้นสำหรับ SME",
    features: ["SSD 5 GB", "แบนด์วิดท์ 200 GB", "SSL ฟรี & CDN"],
  },
  {
    name: "n8n Pro",
    price: "299฿/ด.",
    description: "โฮสติ้งเฉพาะสำหรับ workflow automation",
    features: ["20k executions / เดือน", "SSD 2 GB", "อัปเดตอัตโนมัติ"],
  },
];

export default function Home() {
  return (
    <main className="bg-transparent text-white min-h-screen">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">SunMart Hosting</h1>
        <p className="text-xl mb-8 text-slate-200">
          เปิดใช้งานใน 30 วินาที • SSL ฟรี • สำรองข้อมูลอัตโนมัติ
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-800/70 border border-gray-700 p-6 rounded-xl hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/40 transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">{plan.name}</h3>
              <p className="text-4xl font-bold mb-2 text-blue-400">{plan.price}</p>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{plan.description}</p>
              <ul className="space-y-2 mb-6 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-blue-400" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 w-full font-semibold transition">
                สั่งซื้อ
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
