<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute w-64 h-64 bg-[#E0E2DB] rounded-full mix-blend-multiply filter blur-xl animate-pulse top-10 right-10"></div>
        <div class="absolute w-48 h-48 bg-[#D2D4C8] rounded-full mix-blend-multiply filter blur-xl animate-pulse bottom-10 left-10"></div>
      </div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl font-bold mb-4">Мэдээ мэдээлэл</h1>
        <p class="text-xl max-w-2xl mx-auto text-[#E0E2DB]">Сүүлийн үеийн үйл ажиллагаа, төслүүд болон амжилтууд</p>
      </div>
    </section>

    <!-- Featured Video Section -->
    <section class="py-16 bg-[#E0E2DB]/30">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-[#8B2635]">Онцлох мэдээ</h2>
          
          <!-- Video Grid -->
          <div class="grid lg:grid-cols-2 gap-12">
            
            <!-- Video 1 - Main Feature -->
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#8B2635]/20 hover:border-[#8B2635]/50 transition-all duration-500 transform hover:-translate-y-2">
              <div class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white p-6">
                <h3 class="text-xl font-bold mb-2">Хүүхдийн хоолны чанар сайжруулах</h3>
                <p class="text-[#E0E2DB] text-sm">4 October 2024</p>
              </div>
              <div class="p-6">
                <div class="aspect-w-9 aspect-h-16 mb-4">
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FA.Amartuvshinn%2Fvideos%2F838986778405135%2F&show_text=false&width=267&t=0" 
                    width="100%" 
                    height="400" 
                    style="border:none;overflow:hidden" 
                    scrolling="no" 
                    frameborder="0" 
                    allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                    allowFullScreen="true"
                    class="rounded-lg">
                  </iframe>
                </div>
                <p class="text-[#2E3532] leading-relaxed">
                  О.Солонго: Ханийн минь өгсөн хамгийн нандин бэлэг. 
                  Эрүүл боловсролтой Монгол Улсын ирээдүйн төлөө #ЗА гэж хэлцгээе
                </p>
                <div class="flex items-center mt-4 text-sm text-[#8B2635]">
                  <span class="bg-[#8B2635]/10 px-3 py-1 rounded-full">#Боловсролын бодлого</span>
                </div>
              </div>
            </div>

            <!-- Video 2 -->
            <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-[#8B2635]/20 hover:border-[#8B2635]/50 transition-all duration-500 transform hover:-translate-y-2">
              <div class="bg-gradient-to-r from-[#2E3532] to-[#8B2635] text-white p-6">
                <h3 class="text-xl font-bold mb-2">Дэд бүтцийн хөгжлийн төлөвлөгөө</h3>
                <p class="text-[#E0E2DB] text-sm">30 June 2025</p>
              </div>
              <div class="p-6">
                <div class="aspect-w-16 aspect-h-9 mb-4">
                  <iframe 
                    src="https://www.facebook.com/plugins/video.php?height=293&href=https%3A%2F%2Fwww.facebook.com%2FA.Amartuvshinn%2Fvideos%2F1363694418071964%2F&show_text=false&width=560&t=0" 
                    width="100%" 
                    height="315" 
                    style="border:none;overflow:hidden" 
                    scrolling="no" 
                    frameborder="0" 
                    allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                    allowFullScreen="true"
                    class="rounded-lg">
                  </iframe>
                </div>
                <p class="text-[#2E3532] leading-relaxed">
                  Улаанбаатар хотод 2025 онд дэд бүтцийн томоохон бүтээн байгуулалтууд хийгдэхээр төлөвлөгдөж байна. 
                  Тодруулбал, нийт 15 байршилд 48.4 км урт авто зам, 846.5 у/м буюу урт метр гүүр шинээр барихаар тусгасан.
                </p>
                <div class="grid grid-cols-2 gap-4 mt-4">
                  <div class="bg-[#E0E2DB] p-3 rounded-lg text-center">
                    <div class="text-xl font-bold text-[#8B2635]">48.4км</div>
                    <div class="text-sm text-[#2E3532]">Шинэ зам</div>
                  </div>
                  <div class="bg-[#D2D4C8] p-3 rounded-lg text-center">
                    <div class="text-xl font-bold text-[#8B2635]">39км</div>
                    <div class="text-sm text-[#2E3532]">Явган зам</div>
                  </div>
                </div>
                <div class="flex items-center mt-4 text-sm text-[#8B2635]">
                  <span class="bg-[#8B2635]/10 px-3 py-1 rounded-full">#Дэд бүтэц</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional News -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-[#8B2635]">Бусад мэдээ</h2>
        <div class="max-w-4xl mx-auto">
          
          <!-- Video 3 -->
          <div class="bg-gradient-to-r from-[#E0E2DB] to-[#D2D4C8] rounded-2xl shadow-xl overflow-hidden border-4 border-[#8B2635]/20 mb-8">
            <div class="grid lg:grid-cols-2 gap-0">
              <div class="p-8">
                <div class="bg-[#8B2635] text-white inline-block px-4 py-1 rounded-full text-sm mb-4">
                  Боловсролын салбар
                </div>
                <h3 class="text-2xl font-bold mb-4 text-[#2E3532]">Хан-Уул дүүргийн шинэ сургууль</h3>
                <p class="text-[#2E3532] leading-relaxed mb-4">
                  Хан-Уул дүүргийн 24-р хороо буюу Хүннү моллын хажууд бага сургууль, цэцэрлэг ашиглалтад ороход бэлэн болжээ. 
                  Ингэснээр тус хорооны бага сургууль, цэцэрлэгийн насны 300 орчим хүүхэд улсын сургууль цэцэрлэгтэй болж байна.
                </p>
                <div class="flex items-center space-x-4">
                  <div class="bg-white p-3 rounded-lg text-center border-2 border-[#8B2635]/20">
                    <div class="text-xl font-bold text-[#8B2635]">300+</div>
                    <div class="text-sm text-[#2E3532]">Хүүхэд</div>
                  </div>
                  <div class="bg-white p-3 rounded-lg text-center border-2 border-[#8B2635]/20">
                    <div class="text-xl font-bold text-[#8B2635]">24-р</div>
                    <div class="text-sm text-[#2E3532]">Хороо</div>
                  </div>
                </div>
                <p class="text-sm text-[#2E3532] mt-4">30 June at 11:07</p>
              </div>
              <div class="p-4 lg:p-8 flex items-center">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FA.Amartuvshinn%2Fvideos%2F4136586769999388%2F&show_text=false&width=267&t=0" 
                  width="100%" 
                  height="400" 
                  style="border:none;overflow:hidden" 
                  scrolling="no" 
                  frameborder="0" 
                  allowfullscreen="true" 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                  allowFullScreen="true"
                  class="rounded-xl shadow-lg">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="py-16 bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Мэдээллийн бүлэгт элсэх</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-[#E0E2DB]">
          Сүүлийн үеийн мэдээ, төслүүдийн явцын талаар шуурхай мэдээлэл авах
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="И-мэйл хаягаа оруулна уу" 
            class="flex-1 px-6 py-3 rounded-lg text-[#2E3532] bg-white border-2 border-transparent focus:border-[#E0E2DB] focus:outline-none"
          >
          <button class="bg-[#E0E2DB] text-[#8B2635] px-8 py-3 rounded-lg font-semibold hover:bg-[#D2D4C8] transition-colors duration-300">
            Элсэх
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Мэдээ мэдээлэл - Амгаланбаярын Амартүвшин',
  description: 'А.Амартүвшины сүүлийн үеийн үйл ажиллагаа, төслүүд, Улаанбаатар хотын хөгжлийн мэдээ',
})
</script> 