<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute w-64 h-64 bg-[#E0E2DB] rounded-full mix-blend-multiply filter blur-xl animate-pulse top-10 right-10"></div>
        <div class="absolute w-48 h-48 bg-[#D2D4C8] rounded-full mix-blend-multiply filter blur-xl animate-pulse bottom-10 left-10"></div>
      </div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl font-bold mb-4">Би хэрхэн ажилладаг вэ?</h1>
        <p class="text-xl max-w-2xl mx-auto text-[#E0E2DB]">Ажлын арга барил, төлөвлөлт, амьдралын дүрэм</p>
      </div>
    </section>

    <!-- Daily Routine -->
    <section class="py-16 bg-[#E0E2DB]/20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-[#8B2635]">Ажлын дундаж нэг өдөр</h2>
          <div class="bg-gradient-to-r from-[#E0E2DB] to-[#D2D4C8] p-8 rounded-lg mb-12 shadow-xl border-4 border-[#8B2635]/20">
            <p class="text-lg leading-relaxed mb-6 text-[#2E3532]">
              "Нэг ой, долоон сартай охин маань намайг өглөө бүр сэрүүлэггүй сэрээнэ (инээв)."
            </p>
            <div class="space-y-4">
              <p class="text-[#2E3532]">
                Миний ажлын нэг өдөр дүүргийн ажил хэр их байхаас л хамаардаг даа. Төлөвлөлт хийх дуртай. 
                Бас ажлыг чухлаас нь эхэлж эрэмбэлдэг.
              </p>
              <p class="text-[#2E3532]">
                Тэгээд л өглөө бүр ажлын ерөнхий зураглалаа нэг харчхаад хэлтсийн дарга нартайгаа уулзаж, 
                ажлаа ярилцана. Өмнөх ажлуудын биелэлтийг шалгана. Иргэдтэй уулзалт хийх цаг гаргана. 
                Дүүргийн тулгамдсан асуудлуудтай газар дээр нь очиж танилцана.
              </p>
            </div>
          </div>

          <!-- Work Methodology -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-8 text-[#8B2635]">Ажлын арга барил</h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-gradient-to-br from-[#8B2635]/10 to-[#E0E2DB] p-6 rounded-lg shadow-xl border-4 border-[#8B2635]/20">
                <h3 class="text-xl font-semibold mb-4 text-[#8B2635]">1. Төлөвлөлт - үндсэн зарчим</h3>
                <p class="text-[#2E3532] mb-4">
                  "Төлөвлөлт. Төлөвлөлтгүй бол ажил удааширч, ахиц муутайгаас гадна хугацаа их алдана."
                </p>
                <ul class="space-y-2 text-[#2E3532]">
                  <li>• Долоо хоногоор төлөвлөлт</li>
                  <li>• Арван дөрвөн хоногоор төлөвлөлт</li>
                  <li>• Сараар төлөвлөлт</li>
                  <li>• Нэг жил, хоёр жил, дөрвөн жилээр төлөвлөлт</li>
                </ul>
              </div>

              <div class="bg-gradient-to-br from-[#2E3532]/10 to-[#D2D4C8] p-6 rounded-lg shadow-xl border-4 border-[#2E3532]/20">
                <h3 class="text-xl font-semibold mb-4 text-[#2E3532]">2. Сэтгэлтэй хандлага</h3>
                <p class="text-[#2E3532] mb-4">
                  "Би ажлыг голдоггүй байх, аливаад сэтгэлтэй хандах юм сан гэж амьдралдаа хичээсээр ирсэн."
                </p>
                <p class="text-[#2E3532]">
                  Энэхүү итгэл үнэмшил маань гүн суусан учир аливаа ажил бүхэндээ шингээхийг зорьдог нь 
                  миний ажлын барилын нэг хэсэг.
                </p>
              </div>
            </div>
          </div>

          <!-- Tools and Apps -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-8 text-[#8B2635]">Хэрэглэдэг хэрэгслүүд</h2>
            <div class="bg-white border-2 border-[#8B2635]/30 p-8 rounded-lg shadow-xl">
              <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                  <div class="bg-[#8B2635]/10 p-4 rounded-full inline-block mb-4">
                    <span class="text-2xl">📱</span>
                  </div>
                  <h3 class="text-lg font-semibold mb-2 text-[#8B2635]">iPhone 13 Pro</h3>
                  <p class="text-[#2E3532]">Үндсэн ажлын утас</p>
                </div>
                <div class="text-center">
                  <div class="bg-[#2E3532]/10 p-4 rounded-full inline-block mb-4">
                    <span class="text-2xl">💻</span>
                  </div>
                  <h3 class="text-lg font-semibold mb-2 text-[#2E3532]">Lenovo Thinkpad</h3>
                  <p class="text-[#2E3532]">Ажлын компьютер</p>
                </div>
                <div class="text-center">
                  <div class="bg-[#8B2635]/20 p-4 rounded-full inline-block mb-4">
                    <span class="text-2xl">📝</span>
                  </div>
                  <h3 class="text-lg font-semibold mb-2 text-[#8B2635]">Notes & Reminder</h3>
                  <p class="text-[#2E3532]">Үндсэн аппууд</p>
                </div>
              </div>
              <div class="mt-8 text-center">
                <p class="text-[#2E3532]">
                  "Иргэдтэй уулзах уулзалтаас эхлээд бүхий л уулзалт, ажлуудаа Notes дээрээ хөтөлдөг. 
                  Хийж буй ажлуудынхаа хэрэгжилтийн хувийг ард нь мөн хөтлөөд явдаг."
                </p>
              </div>
            </div>
          </div>

          <!-- Time Management -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-8 text-[#8B2635]">Цаг хэмнэх арга</h2>
            <div class="bg-gradient-to-br from-[#D2D4C8] to-[#E0E2DB] p-8 rounded-lg shadow-xl border-4 border-[#8B2635]/30">
              <blockquote class="text-xl italic text-center text-[#2E3532] mb-6 leading-relaxed">
                "Цаг хэмнэх хамгийн сайн арга маань гэвэл ерөөсөө төлөвлөлт, төлөвлөлт, төлөвлөлт. 
                Хэр сайн төлөвлөж чадна, тэр хэмжээгээрээ цаг хэмнэж чадна."
              </blockquote>
              
              <div class="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h3 class="text-lg font-semibold mb-4 text-[#8B2635]">Сезонны төлөвлөлт</h3>
                  <p class="text-[#2E3532] mb-4">
                    Жишээ нь, наймдугаар, есдүгээр сарын ажлууд бол сургууль, цэцэрлэг, боловсролын 
                    байгууллуудын ажлууд голлоно. Манай дүүрэгт л гэхэд 23 сургууль, 69 цэцэрлэг байдаг.
                  </p>
                  <p class="text-[#2E3532]">
                    Есдүгээр сарын нэгэн гэдэг чинь бидний хувьд их том "эцэс-цэг". 
                    Тэгээд л төлөвлөлтгүйгээр ажиллах боломж байдаггүй.
                  </p>
                </div>
                
                <div>
                  <h3 class="text-lg font-semibold mb-4 text-[#8B2635]">Ажлын зохион байгуулалт</h3>
                  <p class="text-[#2E3532] mb-4">
                    Олон ажилд оролцоотой ажлын чиг үүрэгтэй учраас ажлаа зөв хуваарилахгүй бол 
                    нэг бие хаана ч хүрэлцэхгүй болов уу.
                  </p>
                  <p class="text-[#2E3532]">
                    Шаварт суусан машин шиг л дугуй нь дороо хий эргэлдэхтэй адил байх болов уу.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Energy and Motivation -->
          <div class="mb-12">
            <h2 class="text-3xl font-bold mb-8 text-[#8B2635]">Эрч хүч сэлбэх арга</h2>
            <div class="bg-gradient-to-br from-[#E0E2DB] to-[#D2D4C8] p-8 rounded-lg shadow-xl border-4 border-[#8B2635]/20">
              <h3 class="text-xl font-semibold mb-4 text-[#8B2635]">Гэр бүлийн хүч</h3>
              <p class="text-lg text-[#2E3532] mb-4">
                "Гурван хүүхэдтэйгээ тоглож, эрхлүүлэхээр эрч хүч сэлбэгдэж, хамаг бухимдал алга болчихдог. 
                Амьдралын цөм нь хүүхэд л байдаг юм байна."
              </p>
              <p class="text-[#2E3532] mb-4">
                Өмнө нь зөвхөн Амартүвшин гэдэг хүний төлөө зүтгэдэг байсан бол одоо бүр гурван хүүхдийн 
                төлөө хичээж байна даа (инээв).
              </p>
              <p class="text-[#2E3532]">
                Хүн хүүхэдтэй болохоор амьдралыг харах өнцөг хүртэл өөрчлөгддөг юм билээ. 
                Өөрийнхөө хүүхэд шиг багачууд түүн дээр тоглоно шүү гэсэн бодол зурсхийж, 
                ажлын чанарт илүү анхаарал хандуулдаг.
              </p>
            </div>
          </div>

          <!-- Core Philosophy -->
          <div class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white p-8 rounded-lg shadow-2xl">
            <h2 class="text-2xl font-bold mb-6 text-center text-[#E0E2DB]">Авч байсан хамгийн сайн зөвлөгөө</h2>
            <blockquote class="text-xl italic text-center mb-4">
              "Ажил хүнийг голдог, хүн ажлыг голдоггүй"
            </blockquote>
            <p class="text-center text-[#D2D4C8]">- Аав маань анх ажилд ороход хэлж байсан</p>
            <p class="text-center mt-4 text-[#E0E2DB]">
              Ажил чинь голбол хэчнээн сэтгэлтэй, мэдлэгтэй байсан ч нэмэргүй гэсэн санаа байжээ 
              гэдгийг сайтар ухаараад байгаа шүү.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Ажлын арга барил - Амгаланбаярын Амартүвшин',
  description: 'А.Амартүвшины ажлын арга барил, төлөвлөлт, цаг хэмнэх арга, амьдралын зарчмууд',
})
</script> 