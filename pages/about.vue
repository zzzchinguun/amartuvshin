<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute w-64 h-64 bg-[#E0E2DB] rounded-full mix-blend-multiply filter blur-xl animate-pulse top-10 right-10"></div>
        <div class="absolute w-48 h-48 bg-[#D2D4C8] rounded-full mix-blend-multiply filter blur-xl animate-pulse bottom-10 left-10"></div>
      </div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl font-bold mb-4">Намтар</h1>
        <p class="text-xl max-w-2xl mx-auto text-[#E0E2DB]">Амгаланбаярын Амартүвшин (1985 онд төрсөн)</p>
      </div>
    </section>

    <!-- Biography Content -->
    <section class="py-16 bg-[#E0E2DB]/20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <!-- Family Background -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-[#8B2635]">Гэр бүл, угсаа</h2>
            <div class="bg-white p-8 rounded-2xl shadow-2xl border-4 border-[#8B2635]/20">
              <p class="text-lg leading-relaxed text-[#2E3532]">
                Тэрээр Замын цагдаагийн дарга, ОБЕГ, ШШГЕГ-ын дарга асан бригадын генерал 
                <strong class="text-[#8B2635]">Цэвэгмидийн Амгаланбаярын</strong> хүү юм. Улс төрийн мэргэжлээр 
                суралцаж, олон жилийн туршид төрийн албанд үйлчилсэн.
              </p>
            </div>
          </div>

          <!-- Education -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-[#8B2635]">Боловсрол</h2>
            <div class="space-y-6">
              <div class="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-[#8B2635]">
                <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">2007 он - Бакалавр зэрэг</h3>
                <p class="text-[#2E3532]">
                  Австралийн Монаш их сургуулийг улс төр, гадаад судлалаар бакалавр зэрэгтэй төгссөн.
                </p>
              </div>
              <div class="bg-white rounded-2xl shadow-xl p-6 border-l-8 border-[#2E3532]">
                <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">2011 он - Магистр зэрэг</h3>
                <p class="text-[#2E3532]">
                  Австралийн Декиний их сургуулийг гадаад харилцааны мэргэжлээр магистр зэрэгтэй хамгаалж төгссөн.
                </p>
              </div>
            </div>
          </div>

          <!-- Career Timeline -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-[#8B2635]">Ажлын туршлага</h2>
            <div class="space-y-8">
              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/4">
                  <div class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white px-4 py-2 rounded-xl text-center font-semibold">
                    2008 он
                  </div>
                </div>
                <div class="md:w-3/4 bg-white p-6 rounded-2xl shadow-xl border-4 border-[#8B2635]/10">
                  <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">УИХ-ын Тамгын газрын захиргааны хэлтэст зохион байгуулагч</h3>
                  <p class="text-[#2E3532]">Төрийн албаны эхлэл. УИХ-ын Ерөнхий нарийн бичгийн даргын туслахаар ажлын гараагаа эхэлсэн.</p>
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/4">
                  <div class="bg-gradient-to-r from-[#2E3532] to-[#8B2635] text-white px-4 py-2 rounded-xl text-center font-semibold">
                    2008-2013
                  </div>
                </div>
                <div class="md:w-3/4 bg-white p-6 rounded-2xl shadow-xl border-4 border-[#8B2635]/10">
                  <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">УИХ-ын Тамгын газрын гадаад харилцааны хэлтэст</h3>
                  <p class="text-[#2E3532]">Зохион байгуулагч, шинжээч, референт зэрэг алба хашсан. Гадаад харилцааны олон томоохон ажлуудад оролцсон.</p>
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/4">
                  <div class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white px-4 py-2 rounded-xl text-center font-semibold">
                    2013-2016
                  </div>
                </div>
                <div class="md:w-3/4 bg-white p-6 rounded-2xl shadow-xl border-4 border-[#8B2635]/10">
                  <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">БНБолгар Улсад суугаа ЭСЯ-ны дипломат ажилтан, консул</h3>
                  <p class="text-[#2E3532]">Гуравдугаар нарийн бичгийн дарга. Хоёр улсын харилцааны олон асуудалд оролцож ажилласан. Монгол улс БНБУ-д өрөө төлөх асуудлыг шийдэж, оюутны тэтгэлэг авахад чухал үүрэг гүйцэтгэсэн.</p>
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/4">
                  <div class="bg-gradient-to-r from-[#2E3532] to-[#8B2635] text-white px-4 py-2 rounded-xl text-center font-semibold">
                    2016-2024
                  </div>
                </div>
                <div class="md:w-3/4 bg-white p-6 rounded-2xl shadow-xl border-4 border-[#8B2635]/10">
                  <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">Хан-Уул дүүргийн ЗДТГ-т Засаг даргын орлогч</h3>
                  <p class="text-[#2E3532]">Нийгмийн бодлого хариуцсан орлогчоор ажиллаж байсан. 2020-2024 онд Хан-Уул дүүргийн Иргэдийн Хурлын Төлөөлөгч байсан.</p>
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-6">
                <div class="md:w-1/4">
                  <div class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white px-4 py-2 rounded-xl text-center font-semibold shadow-lg">
                    2024 оноос
                  </div>
                </div>
                <div class="md:w-3/4 bg-gradient-to-r from-[#E0E2DB] to-[#D2D4C8] p-6 rounded-2xl shadow-2xl border-4 border-[#8B2635]/30">
                  <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">Нийслэлийн Засаг даргын орлогч</h3>
                  <p class="text-[#2E3532]">МАН-аас сонгуульд оролцож Нийслэлийн ИТХ-ын төлөөлөгчөөр сонгогдсон. Нийгмийн салбар, ногоон хөгжил болон агаар, орчны бохирдлын асуудал хариуцна.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Special Achievements -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-6 text-[#8B2635]">Тусгай амжилт</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-gradient-to-br from-[#8B2635]/10 to-[#2E3532]/10 p-6 rounded-2xl border-4 border-[#8B2635]/20">
                <h3 class="text-xl font-semibold mb-4 text-[#8B2635]">Дипломат ажил</h3>
                <p class="text-[#2E3532]">
                  БНБУ-д ажиллах үедээ Монгол улсын 10 жилийн туршид шийдэгдэж чадалгүй байсан өрийн асуудлыг шийдэж, 
                  оюутны тэтгэлэгийн хэлэлцээрт оруулах боломж бүрдүүлсэн.
                </p>
              </div>
              <div class="bg-gradient-to-br from-[#E0E2DB] to-[#D2D4C8] p-6 rounded-2xl border-4 border-[#8B2635]/20">
                <h3 class="text-xl font-semibold mb-4 text-[#8B2635]">Орон нутгийн ажил</h3>
                <p class="text-[#2E3532]">
                  Хан-Уул дүүрэгт олон улсын хамтын ажиллагаа өргөжүүлж, Япон, НҮБ-ын байгууллагуудтай 
                  төслүүд хэрэгжүүлэн иргэдийн амьдралыг сайжруулсан.
                </p>
              </div>
            </div>
          </div>

          <!-- Personal Philosophy -->
          <div class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white p-8 rounded-2xl shadow-2xl">
            <h2 class="text-2xl font-bold mb-4 text-center text-[#E0E2DB]">Ажлын зарчим</h2>
            <blockquote class="text-xl italic text-center mb-4 leading-relaxed">
              "Ажил хүнийг голдог, хүн ажлыг голдоггүй. Төлөвлөлт, төлөвлөлт, төлөвлөлт - 
              энэ бол цаг хэмнэх хамгийн сайн арга. Аливаа ажил бүхэндээ шингээхийг зорьдог."
            </blockquote>
            <p class="text-center text-[#D2D4C8]">- Аавын зөвлөгөө, амьдралын зарчим</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Намтар - Амгаланбаярын Амартүвшин',
  ogTitle: 'Намтар - Амгаланбаярын Амартүвшин',
  description: 'Амгаланбаярын Амартүвшины боловсрол, ажлын туршлага, улс төрийн замнал',
  ogDescription: 'Амгаланбаярын Амартүвшины боловсрол, ажлын туршлага, улс төрийн замнал',
})
</script> 