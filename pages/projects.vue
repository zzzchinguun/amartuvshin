<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute w-64 h-64 bg-[#E0E2DB] rounded-full mix-blend-multiply filter blur-xl animate-pulse top-10 right-10"></div>
        <div class="absolute w-48 h-48 bg-[#D2D4C8] rounded-full mix-blend-multiply filter blur-xl animate-pulse bottom-10 left-10"></div>
      </div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl font-bold mb-4">Төслүүд ба амжилтууд</h1>
        <p class="text-xl max-w-2xl mx-auto text-[#E0E2DB]">Хэрэгжүүлсэн болон хэрэгжиж буй төслүүд</p>
      </div>
    </section>

    <!-- Current Focus -->
    <section class="py-16 bg-[#E0E2DB]/20">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-[#8B2635]">Одоогийн анхаарал</h2>
        <div class="max-w-4xl mx-auto">
          <div class="bg-gradient-to-br from-[#8B2635]/10 to-[#E0E2DB] border-l-4 border-[#8B2635] p-8 rounded-lg mb-8 shadow-xl">
            <h3 class="text-2xl font-semibold mb-4 text-[#8B2635]">Сургууль, цэцэрлэгийн хоолны асуудал</h3>
            <div class="space-y-4 text-[#2E3532]">
              <p>
                "Өнөөдөр бидний жижигхэн гээд орхиод байгаа асуудал бүрийн цаана хамгийн чухал зүйл нуугдаж шийдлээ хүлээж байгааг анзаарахгүй орхиж боломгүй санагддаг."
              </p>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white p-4 rounded-lg shadow-lg border-2 border-[#8B2635]/20">
                  <h4 class="font-semibold mb-2 text-[#8B2635]">Одоогийн төсөв</h4>
                  <ul class="text-sm space-y-1">
                    <li>• Цэцэрлэгийн хоол: 2,475 төгрөг/хүүхэд</li>
                    <li>• Сургуулийн өдрийн цай: 1,500 төгрөг/хүүхэд</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded-lg shadow-lg border-2 border-[#2E3532]/20">
                  <h4 class="font-semibold mb-2 text-[#2E3532]">Шаардлагатай өөрчлөлт</h4>
                  <ul class="text-sm space-y-1">
                    <li>• Төсвийн хэмжээг нэмэгдүүлэх</li>
                    <li>• Насны ялгааг тооцох</li>
                    <li>• Эцэг эхчүүдийн оролцоог нэмэгдүүлэх</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Major Projects -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-[#8B2635]">Томоохон төслүүд</h2>
        <div class="grid lg:grid-cols-2 gap-8">
          
          <!-- City Planning Project -->
          <div class="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-[#8B2635]/20 hover:border-[#8B2635]/50 transition-all duration-300">
            <div class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white p-6">
              <h3 class="text-xl font-bold">20 минутын хотын концепци</h3>
              <p class="text-[#E0E2DB] mt-2">Хотын шинэ бүтэц зохион байгуулалт</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <p class="text-[#2E3532]">
                  Олон улсын стандартын дагуу "20 минутын хот" үзэл санааг хэрэгжүүлэх төлөвлөгөө. 
                  Хүн гэрээсээ гараад дээд тал нь 20 минутын дотор бүх үндсэн үйлчилгээнд хүрэх боломжтой.
                </p>
                <div class="bg-gradient-to-r from-[#E0E2DB] to-[#D2D4C8] p-4 rounded-lg">
                  <h4 class="font-semibold mb-2 text-[#8B2635]">Хан-Уул дүүргийн хөгжил:</h4>
                  <ul class="text-sm space-y-1 text-[#2E3532]">
                    <li>• Хан-Уул хот</li>
                    <li>• Яармаг хот</li>
                    <li>• Буянт-Ухаа хот</li>
                  </ul>
                </div>
                <p class="text-sm text-[#2E3532]/70">
                  17 хотод хувааж, хороодыг нэгтгэнэ. Хот бүр эрх мэдэлтэй болж, асуудлаа өөрсдөө шийднэ.
                </p>
              </div>
            </div>
          </div>

          <!-- Han-Uul Club -->
          <div class="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-[#2E3532]/20 hover:border-[#2E3532]/50 transition-all duration-300">
            <div class="bg-gradient-to-r from-[#2E3532] to-[#8B2635] text-white p-6">
              <h3 class="text-xl font-bold">Хан-Уул спортын клуб</h3>
              <p class="text-[#E0E2DB] mt-2">Залуучуудын хөгжлийн төсөл</p>
            </div>
            <div class="p-6">
              <div class="space-y-4">
                <p class="text-[#2E3532]">
                  Алслагдсан хороодын хүүхэд, залуучуудад зориулсан спортын клуб. 
                  Мөнгө олох зорилгоор биш, залуучуудыг хөгжүүлэхийг эрмэлзэн ажиллуулдаг.
                </p>
                <div class="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div class="text-2xl font-bold text-[#8B2635]">2017</div>
                    <div class="text-sm text-[#2E3532]">Хөлбөмбөг</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-[#8B2635]">2018</div>
                    <div class="text-sm text-[#2E3532]">Сагсан бөмбөг</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-[#8B2635]">2019</div>
                    <div class="text-sm text-[#2E3532]">Бүжгийн клуб</div>
                  </div>
                </div>
                <div class="bg-gradient-to-r from-[#E0E2DB] to-[#D2D4C8] p-4 rounded-lg">
                  <p class="text-sm text-[#2E3532]">
                    Заал, танхим, дасгалжуулагч, тэмцээний хувцас хэрэглэлээр бүрэн хангана. 
                    Улсын аварга, лиг гэх мэт тэмцээн уралдаанд тогтмол оролцуулна.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- International Partnerships -->
    <section class="py-16 bg-gradient-to-r from-[#E0E2DB] to-[#D2D4C8]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-[#8B2635]">Олон улсын хамтын ажиллагаа</h2>
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            
            <!-- Japan Partnership -->
            <div class="bg-white border-2 border-[#8B2635]/30 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="text-center mb-4">
                <span class="text-3xl">🇯🇵</span>
                <h3 class="text-xl font-bold mt-2 text-[#8B2635]">Япон Улс</h3>
              </div>
              <div class="space-y-3">
                <h4 class="font-semibold text-[#2E3532]">Мусашимураяма хот</h4>
                <p class="text-sm text-[#2E3532]">
                  2017 онд хамтын ажиллагаа эхлүүлж, дүүргийнхээ хүүхдүүдийг соёлын солилцоогоор 
                  Япон улс руу явуулж эхэлсэн.
                </p>
                <div class="text-xs text-[#2E3532]/70 bg-[#E0E2DB] p-2 rounded">
                  Токиогийн дагуул хот
                </div>
              </div>
            </div>

            <!-- UN Partnership -->
            <div class="bg-white border-2 border-[#2E3532]/30 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="text-center mb-4">
                <span class="text-3xl">🇺🇳</span>
                <h3 class="text-xl font-bold mt-2 text-[#2E3532]">НҮБ-ын байгууллагууд</h3>
              </div>
              <div class="space-y-3">
                <h4 class="font-semibold text-[#8B2635]">Хүн Амын Сан</h4>
                <p class="text-sm text-[#2E3532]">
                  Хүчирхийлэлд өртсөн хохирогчдыг хамгаалах нэг цэгийн төвийг дүүрэгт байгуулж, 
                  Залуучуудын хөгжлийн төвийн бүрэн тохижилтын ажил хийсэн.
                </p>
              </div>
            </div>

            <!-- Good Neighbors -->
            <div class="bg-white border-2 border-[#8B2635]/30 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="text-center mb-4">
                <span class="text-3xl">🤝</span>
                <h3 class="text-xl font-bold mt-2 text-[#8B2635]">Good Neighbors</h3>
              </div>
              <div class="space-y-3">
                <h4 class="font-semibold text-[#2E3532]">700 сая төгрөгийн төсөл</h4>
                <p class="text-sm text-[#2E3532]">
                  Дүүргийн Нэгдсэн эмнэлгийн хүүхдийн тасгийг гурван давхар болгож өргөтгөх 
                  санхүүжилт авсан.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics & Impact -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-[#8B2635]">Хариуцаж буй салбар</h2>
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            
            <!-- Education -->
            <div class="bg-gradient-to-br from-[#8B2635]/10 to-[#E0E2DB] p-8 rounded-lg shadow-xl border-4 border-[#8B2635]/20">
              <div class="text-center mb-6">
                <span class="text-4xl">🏫</span>
                <h3 class="text-2xl font-bold mt-2 text-[#8B2635]">Боловсролын салбар</h3>
              </div>
              <div class="space-y-4">
                <div class="flex justify-between items-center border-b pb-2">
                  <span>Сургууль</span>
                  <span class="font-bold text-[#8B2635]">23</span>
                </div>
                <div class="flex justify-between items-center border-b pb-2">
                  <span>Цэцэрлэг</span>
                  <span class="font-bold text-[#8B2635]">69</span>
                </div>
                <div class="text-sm text-[#2E3532] mt-4">
                  Наймдугаар, есдүгээр сарын бэлтгэл ажил, хоолны чанар сайжруулах арга хэмжээ
                </div>
              </div>
            </div>

            <!-- Environment -->
            <div class="bg-gradient-to-br from-[#8B2635]/10 to-[#E0E2DB] p-8 rounded-lg shadow-xl border-4 border-[#8B2635]/20">
              <div class="text-center mb-6">
                <span class="text-4xl">🌱</span>
                <h3 class="text-2xl font-bold mt-2 text-[#8B2635]">Байгаль орчин</h3>
              </div>
              <div class="space-y-4">
                <div class="text-center">
                  <div class="text-lg font-semibold">Ногоон хөгжил</div>
                  <div class="text-lg font-semibold">Агаарын бохирдол</div>
                </div>
                <div class="text-sm text-[#2E3532] mt-4">
                  Орчны бохирдлын асуудал, ногоон бодлого, тогтвортой хөгжлийн асуудлууд
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-16 bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute w-64 h-64 bg-[#E0E2DB] rounded-full mix-blend-multiply filter blur-xl animate-pulse top-10 right-10"></div>
        <div class="absolute w-48 h-48 bg-[#D2D4C8] rounded-full mix-blend-multiply filter blur-xl animate-pulse bottom-10 left-10"></div>
      </div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl font-bold mb-6">Хамтран ажиллацгаая</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-[#E0E2DB]">
          Иргэдийн оролцоотойгоор илүү сайн төслүүдийг хэрэгжүүлэх боломжтой
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="bg-[#E0E2DB] text-[#8B2635] px-8 py-3 rounded-lg font-semibold hover:bg-[#D2D4C8] hover:text-[#2E3532] transition-all duration-300 transform hover:scale-105 shadow-xl">
            Санал хүсэлт илгээх
          </NuxtLink>
          <NuxtLink to="/about" class="border-2 border-[#E0E2DB] text-[#E0E2DB] px-8 py-3 rounded-lg font-semibold hover:bg-[#E0E2DB] hover:text-[#8B2635] transition-all duration-300 transform hover:scale-105 shadow-xl">
            Дэлгэрэнгүй мэдээлэл
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Төслүүд ба амжилтууд - Амгаланбаярын Амартүвшин',
  description: 'А.Амартүвшины хэрэгжүүлсэн төслүүд, олон улсын хамтын ажиллагаа, Хан-Уул клуб, 20 минутын хотын концепци',
})
</script> 