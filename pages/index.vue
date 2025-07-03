<template>
  <div>
    <!-- Particle Background -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div id="particles" class="w-full h-full"></div>
    </div>

    <!-- Hero Section with Advanced Animations -->
    <section class="bg-gradient-to-r from-[#8B2635] via-[#2E3532] to-[#8B2635] text-white py-20 relative overflow-hidden min-h-screen flex items-center">
      <!-- Enhanced Background Effects -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute w-96 h-96 bg-[#E0E2DB] rounded-full mix-blend-multiply filter blur-xl animate-float-slow top-0 left-0"></div>
        <div class="absolute w-96 h-96 bg-[#D2D4C8] rounded-full mix-blend-multiply filter blur-xl animate-float-slow animation-delay-2000 bottom-0 right-0"></div>
        <div class="absolute w-64 h-64 bg-[#E0E2DB] rounded-full mix-blend-multiply filter blur-xl animate-float-slow animation-delay-4000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <!-- Animated Grid Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid grid-cols-12 gap-4 h-full">
          <div v-for="i in 12" :key="i" class="border-l border-white animate-pulse" :style="`animation-delay: ${i * 0.1}s`"></div>
        </div>
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <!-- Animated Title with Typewriter Effect -->
            <div class="mb-6">
              <h1 class="text-6xl font-bold text-white animate-fade-in-up">
                <span class="typing-animation block" data-text="Амгаланбаярын Амартүвшин">Амгаланбаярын Амартүвшин</span>
              </h1>
            </div>
            
            <!-- Animated Subtitle -->
            <p class="text-2xl mb-4 max-w-3xl text-[#E0E2DB] animate-fade-in-up animation-delay-500">
              Улаанбаатар хотын Засаг даргын орлогч
            </p>
            
            <!-- Animated Description -->
            <p class="text-lg mb-8 max-w-2xl text-[#D2D4C8] animate-fade-in-up animation-delay-1000">
              Нийгмийн салбар, ногоон хөгжил болон агаар, орчны бохирдлын асуудал хариуцна
            </p>
            
            <!-- Animated Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-1500">
              <NuxtLink to="/about" class="group bg-[#E0E2DB] text-[#8B2635] px-8 py-4 rounded-xl font-semibold hover:bg-[#D2D4C8] transition-all duration-500 transform hover:scale-110 hover:rotate-2 shadow-2xl relative overflow-hidden">
                <span class="relative z-10">Намтар танилцах</span>
                <div class="absolute inset-0 bg-gradient-to-r from-[#8B2635] to-[#2E3532] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span class="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">Намтар танилцах</span>
              </NuxtLink>
              <NuxtLink to="/projects" class="group border-2 border-[#E0E2DB] text-[#E0E2DB] px-8 py-4 rounded-xl font-semibold hover:bg-[#E0E2DB] hover:text-[#8B2635] transition-all duration-500 transform hover:scale-110 hover:-rotate-2 shadow-2xl relative overflow-hidden">
                <span class="relative z-10">Төслүүд үзэх</span>
                <div class="absolute inset-0 bg-[#E0E2DB] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
                <span class="absolute inset-0 flex items-center justify-center text-[#8B2635] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">Төслүүд үзэх</span>
              </NuxtLink>
            </div>
          </div>
          
          <!-- Enhanced Portrait with 3D Effects -->
          <div class="flex justify-center lg:justify-end animate-fade-in-left animation-delay-500">
            <div class="relative perspective-1000">
              <!-- Floating Elements -->
              <div class="absolute -top-8 -left-8 w-16 h-16 bg-[#E0E2DB] rounded-full animate-bounce animation-delay-1000 opacity-70"></div>
              <div class="absolute -bottom-4 -right-8 w-12 h-12 bg-[#D2D4C8] rounded-full animate-bounce animation-delay-2000 opacity-70"></div>
              
              <!-- Main Portrait Container -->
              <div class="relative transform-gpu transition-all duration-700 hover:rotate-y-12 hover:scale-105 group">
                <div class="absolute inset-0 bg-gradient-to-br from-[#E0E2DB] to-[#D2D4C8] rounded-2xl transform rotate-6 opacity-30 group-hover:rotate-12 transition-transform duration-700"></div>
                <div class="absolute inset-0 bg-gradient-to-br from-[#8B2635] to-[#2E3532] rounded-2xl transform -rotate-3 opacity-20 group-hover:-rotate-6 transition-transform duration-700"></div>
                
                <img 
                  src="/assets/portrait1.jpg" 
                  alt="Амгаланбаярын Амартүвшин" 
                  class="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-[#E0E2DB]/50 transform transition-all duration-700 group-hover:shadow-3xl group-hover:border-[#E0E2DB]"
                >
                
                <!-- Animated Badge -->
                <div class="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#E0E2DB] to-[#D2D4C8] text-[#8B2635] px-6 py-3 rounded-lg font-bold shadow-xl transform rotate-12 animate-pulse">
                  <span class="animate-counter">2024</span> он
                </div>
                
                <!-- Floating Info Cards -->
                <div class="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-sm text-[#8B2635] px-4 py-2 rounded-lg shadow-xl transform -rotate-12 animate-float opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div class="text-sm font-semibold">Засаг дарга орлогч</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Highlights Section -->
    <section class="py-20 bg-gradient-to-br from-[#E0E2DB] via-[#D2D4C8] to-[#E0E2DB] relative overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#8B2635] to-transparent top-0 animate-pulse"></div>
        <div class="absolute w-full h-1 bg-gradient-to-r from-transparent via-[#2E3532] to-transparent bottom-0 animate-pulse animation-delay-1000"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-[#8B2635] mb-6 animate-fade-in-up">
            Үйл ажиллагааны онцлох бичлэг
          </h2>
          <p class="text-xl text-[#2E3532] max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Хамгийн сүүлийн үеийн чухал үйл ажиллагаа, хэлэлцүүлэг, төслийн явцыг үзээрэй
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 mb-16">
          <!-- Featured Video -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-[#8B2635] to-[#2E3532] rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-20"></div>
            <div class="relative bg-white rounded-3xl shadow-2xl p-8 transform group-hover:scale-105 transition-all duration-500">
              <div class="relative overflow-hidden rounded-2xl mb-6">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FA.Amartuvshinn%2Fvideos%2F838986778405135%2F&show_text=false&width=267&t=0" 
                  width="100%" 
                  height="314" 
                  style="border:none;overflow:hidden" 
                  scrolling="no" 
                  frameborder="0" 
                  allowfullscreen="true" 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  class="transform group-hover:scale-105 transition-transform duration-700"
                ></iframe>
                <div class="absolute inset-0 bg-gradient-to-t from-[#8B2635]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 class="text-2xl font-bold text-[#8B2635] mb-4">Боловсролын асуудлаар хэлэлцүүлэг</h3>
              <p class="text-[#2E3532] mb-4">О.Солонго: Ханийн минь өгсөн хамгийн нандин бэлэг. Эрүүл боловсролтой Монгол Улсын ирээдүйн төлөө #ЗА гэж хэлцгээе</p>
              <div class="flex items-center justify-between">
                <span class="bg-[#8B2635]/10 text-[#8B2635] px-4 py-2 rounded-full text-sm font-semibold">4 Октябрь 2024</span>
                <div class="flex items-center space-x-2 text-[#2E3532]">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z"/>
                  </svg>
                  <span class="text-sm">Facebook-с</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Second Video -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-r from-[#2E3532] to-[#8B2635] rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-20"></div>
            <div class="relative bg-white rounded-3xl shadow-2xl p-8 transform group-hover:scale-105 transition-all duration-500">
              <div class="relative overflow-hidden rounded-2xl mb-6">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=293&href=https%3A%2F%2Fwww.facebook.com%2FA.Amartuvshinn%2Fvideos%2F1363694418071964%2F&show_text=false&width=560&t=0" 
                  width="100%" 
                  height="314" 
                  style="border:none;overflow:hidden" 
                  scrolling="no" 
                  frameborder="0" 
                  allowfullscreen="true" 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  class="transform group-hover:scale-105 transition-transform duration-700"
                ></iframe>
                <div class="absolute inset-0 bg-gradient-to-t from-[#2E3532]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 class="text-2xl font-bold text-[#2E3532] mb-4">Дэд бүтцийн хөгжил</h3>
              <p class="text-[#2E3532] mb-4">48.4 км шинэ зам, 846.5 метр гүүр, явган хүн дугуйчдын 39 км замын бүтээн байгуулалтын тайлан</p>
              <div class="flex items-center justify-between">
                <span class="bg-[#2E3532]/10 text-[#2E3532] px-4 py-2 rounded-full text-sm font-semibold">30 Июнь 2024</span>
                <div class="flex items-center space-x-2 text-[#2E3532]">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z"/>
                  </svg>
                  <span class="text-sm">Facebook-с</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Third Video - Full Width -->
        <div class="group relative max-w-4xl mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-[#8B2635] via-[#2E3532] to-[#8B2635] rounded-3xl transform rotate-0.5 group-hover:rotate-1 transition-transform duration-500 opacity-20"></div>
          <div class="relative bg-white rounded-3xl shadow-2xl p-8 transform group-hover:scale-102 transition-all duration-500">
            <div class="grid lg:grid-cols-2 gap-8 items-center">
              <div class="relative overflow-hidden rounded-2xl">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FA.Amartuvshinn%2Fvideos%2F4136586769999388%2F&show_text=false&width=267&t=0" 
                  width="100%" 
                  height="314" 
                  style="border:none;overflow:hidden" 
                  scrolling="no" 
                  frameborder="0" 
                  allowfullscreen="true" 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  class="transform group-hover:scale-105 transition-transform duration-700"
                ></iframe>
              </div>
              <div>
                <h3 class="text-3xl font-bold text-[#8B2635] mb-6">Шинэ сургуулийн нээлт</h3>
                <p class="text-[#2E3532] mb-6 text-lg leading-relaxed">
                  Хан-Уул дүүргийн 24-р хорооны шинэ сургууль 300 гаруй хүүхдийг хүлээн авч, боловсролын чанарыг дээшлүүлэх чухал алхам болж байна.
                </p>
                <div class="flex items-center justify-between">
                  <span class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white px-6 py-3 rounded-full font-semibold">30 Июнь 2024</span>
                  <NuxtLink to="/news" class="text-[#8B2635] hover:text-[#2E3532] font-semibold flex items-center space-x-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span>Дэлгэрэнгүй</span>
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Animated Key Stats with Counters -->
    <section class="py-20 bg-white relative overflow-hidden">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-8 gap-4 h-full animate-pulse">
          <div v-for="i in 32" :key="i" class="bg-[#8B2635] transform rotate-45" :style="`animation-delay: ${i * 0.1}s`"></div>
        </div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-[#8B2635] mb-6 animate-fade-in-up">Үндсэн үзүүлэлтүүд</h2>
          <div class="w-24 h-1 bg-gradient-to-r from-[#8B2635] to-[#2E3532] mx-auto rounded-full animate-scale-in animation-delay-500"></div>
        </div>
        
        <div class="grid md:grid-cols-4 gap-8 text-center">
          <!-- Stat Card 1 -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-[#8B2635]/10 to-[#2E3532]/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div class="relative bg-white p-10 rounded-3xl shadow-2xl border-4 border-[#8B2635]/10 hover:border-[#8B2635]/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
              <!-- Floating Icon -->
              <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#8B2635] to-[#2E3532] rounded-full flex items-center justify-center animate-bounce">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              
              <div class="animated-counter text-5xl font-bold text-[#8B2635] mb-4 pt-6" data-target="18">0</div>
              <div class="text-lg text-[#2E3532] font-semibold">+ Жил улс төрд</div>
              
              <!-- Progress Bar -->
              <div class="w-full bg-[#E0E2DB] rounded-full h-2 mt-4">
                <div class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] h-2 rounded-full animate-fill-bar" style="width: 0%; animation-delay: 0.5s;"></div>
              </div>
            </div>
          </div>

          <!-- Stat Card 2 -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-[#2E3532]/10 to-[#8B2635]/10 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
            <div class="relative bg-white p-10 rounded-3xl shadow-2xl border-4 border-[#2E3532]/10 hover:border-[#2E3532]/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
              <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#2E3532] to-[#8B2635] rounded-full flex items-center justify-center animate-bounce animation-delay-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z"/>
                </svg>
              </div>
              
              <div class="animated-counter text-5xl font-bold text-[#2E3532] mb-4 pt-6" data-target="2024">0</div>
              <div class="text-lg text-[#2E3532] font-semibold">Засаг дарга орлогч</div>
              
              <div class="w-full bg-[#E0E2DB] rounded-full h-2 mt-4">
                <div class="bg-gradient-to-r from-[#2E3532] to-[#8B2635] h-2 rounded-full animate-fill-bar" style="width: 0%; animation-delay: 0.8s;"></div>
              </div>
            </div>
          </div>

          <!-- Stat Card 3 -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-[#8B2635]/10 to-[#E0E2DB]/50 rounded-3xl transform rotate-2 group-hover:rotate-4 transition-transform duration-500"></div>
            <div class="relative bg-white p-10 rounded-3xl shadow-2xl border-4 border-[#8B2635]/10 hover:border-[#8B2635]/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
              <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#8B2635] to-[#E0E2DB] rounded-full flex items-center justify-center animate-bounce animation-delay-600">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              
              <div class="animated-counter text-5xl font-bold text-[#8B2635] mb-4 pt-6" data-target="23">0</div>
              <div class="text-lg text-[#2E3532] font-semibold">Сургууль хариуцна</div>
              
              <div class="w-full bg-[#E0E2DB] rounded-full h-2 mt-4">
                <div class="bg-gradient-to-r from-[#8B2635] to-[#E0E2DB] h-2 rounded-full animate-fill-bar" style="width: 0%; animation-delay: 1.1s;"></div>
              </div>
            </div>
          </div>

          <!-- Stat Card 4 -->
          <div class="group relative">
            <div class="absolute inset-0 bg-gradient-to-br from-[#2E3532]/10 to-[#D2D4C8]/50 rounded-3xl transform -rotate-2 group-hover:-rotate-4 transition-transform duration-500"></div>
            <div class="relative bg-white p-10 rounded-3xl shadow-2xl border-4 border-[#2E3532]/10 hover:border-[#2E3532]/30 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105">
              <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#2E3532] to-[#D2D4C8] rounded-full flex items-center justify-center animate-bounce animation-delay-900">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              
              <div class="animated-counter text-5xl font-bold text-[#2E3532] mb-4 pt-6" data-target="69">0</div>
              <div class="text-lg text-[#2E3532] font-semibold">Цэцэрлэг хариуцна</div>
              
              <div class="w-full bg-[#E0E2DB] rounded-full h-2 mt-4">
                <div class="bg-gradient-to-r from-[#2E3532] to-[#D2D4C8] h-2 rounded-full animate-fill-bar" style="width: 0%; animation-delay: 1.4s;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced About Section with Parallax -->
    <section class="py-20 bg-gradient-to-br from-[#E0E2DB] via-white to-[#D2D4C8] relative overflow-hidden">
      <!-- Parallax Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute w-32 h-32 bg-[#8B2635]/10 rounded-full top-10 left-10 animate-float"></div>
        <div class="absolute w-24 h-24 bg-[#2E3532]/10 rounded-full top-20 right-20 animate-float animation-delay-1000"></div>
        <div class="absolute w-40 h-40 bg-[#E0E2DB] rounded-full bottom-10 left-1/4 animate-float animation-delay-2000 opacity-30"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1">
            <div class="animate-fade-in-right">
              <h2 class="text-5xl font-bold mb-8 text-[#8B2635]">
                <span class="block overflow-hidden">
                  <span class="block animate-slide-up">Намтарын</span>
                </span>
                <span class="block overflow-hidden">
                  <span class="block animate-slide-up animation-delay-300 bg-gradient-to-r from-[#8B2635] to-[#2E3532] bg-clip-text text-transparent">товч</span>
                </span>
              </h2>
              
              <div class="space-y-6 text-[#2E3532]">
                <div v-for="(item, index) in timelineItems" :key="index" 
                     class="flex items-start space-x-4 animate-fade-in-up group hover:bg-white/50 rounded-xl p-4 transition-all duration-300"
                     :style="`animation-delay: ${(index + 1) * 0.2}s`">
                  <div class="relative">
                    <div class="w-4 h-4 bg-[#8B2635] rounded-full mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                    <div class="absolute top-5 left-1/2 w-0.5 h-8 bg-[#8B2635]/30 transform -translate-x-1/2" v-if="index < timelineItems.length - 1"></div>
                  </div>
                  <div class="flex-1">
                    <p class="group-hover:text-[#8B2635] transition-colors duration-300">
                      <strong class="text-[#8B2635] text-lg">{{ item.year }}</strong> {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="order-1 lg:order-2">
            <div class="relative animate-fade-in-left">
              <!-- Floating Background Shapes -->
              <div class="absolute -inset-8">
                <div class="absolute w-20 h-20 bg-[#8B2635]/20 rounded-full top-0 right-0 animate-pulse"></div>
                <div class="absolute w-16 h-16 bg-[#2E3532]/20 rounded-full bottom-0 left-0 animate-pulse animation-delay-1000"></div>
              </div>
              
              <!-- Main Image Container -->
              <div class="relative group perspective-1000">
                <div class="absolute inset-0 bg-gradient-to-br from-[#8B2635]/20 to-[#2E3532]/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-700"></div>
                <div class="absolute inset-0 bg-gradient-to-br from-[#E0E2DB]/50 to-[#D2D4C8]/50 rounded-3xl transform rotate-2 group-hover:rotate-4 transition-transform duration-700"></div>
                
                <img 
                  src="/assets/portrait2.jpg" 
                  alt="Амгаланбаярын Амартүвшин - Албан ёсны зураг" 
                  class="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-[#8B2635]/20 group-hover:border-[#8B2635]/40 transform group-hover:scale-105 transition-all duration-700"
                >
                
                <!-- Animated Info Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#8B2635]/80 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div class="absolute bottom-8 left-8 right-8 text-white">
                    <h3 class="text-2xl font-bold mb-2 animate-slide-up">Амгаланбаярын Амартүвшин</h3>
                    <p class="text-[#E0E2DB] animate-slide-up animation-delay-200">Улаанбаатар хотын Засаг даргын орлогч</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Current Role Section -->
    <section class="py-20 bg-gradient-to-r from-[#E0E2DB] via-[#D2D4C8] to-[#E0E2DB] relative overflow-hidden">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute w-64 h-64 bg-[#8B2635]/10 rounded-full top-0 left-0 animate-float-slow opacity-50"></div>
        <div class="absolute w-48 h-48 bg-[#2E3532]/10 rounded-full bottom-0 right-0 animate-float-slow animation-delay-2000 opacity-50"></div>
        <div class="absolute inset-0">
          <div class="grid grid-cols-6 gap-8 h-full opacity-5">
            <div v-for="i in 24" :key="i" class="bg-[#8B2635] transform rotate-12 animate-pulse" :style="`animation-delay: ${i * 0.2}s`"></div>
          </div>
        </div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-5xl font-bold text-[#8B2635] mb-6 animate-fade-in-up">Одоогийн үүрэг хариуцлага</h2>
            <div class="w-32 h-1 bg-gradient-to-r from-[#8B2635] to-[#2E3532] mx-auto rounded-full animate-scale-in animation-delay-500"></div>
          </div>
          
          <div class="relative group">
            <!-- Floating Background Card -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#8B2635]/5 to-[#2E3532]/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-700"></div>
            
            <div class="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border-4 border-[#8B2635]/20 hover:border-[#8B2635]/40 transition-all duration-500 transform group-hover:scale-105">
              <!-- Icon Header -->
              <div class="flex justify-center mb-8">
                <div class="w-20 h-20 bg-gradient-to-r from-[#8B2635] to-[#2E3532] rounded-full flex items-center justify-center animate-bounce">
                  <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-12">
                <div class="space-y-6">
                  <div v-for="(item, index) in responsibilities.left" :key="index" 
                       class="flex items-start space-x-4 animate-fade-in-up group-hover:translate-x-2 transition-transform duration-300"
                       :style="`animation-delay: ${(index + 1) * 0.3}s`">
                    <div class="w-4 h-4 bg-gradient-to-r from-[#8B2635] to-[#2E3532] rounded-full mt-1 flex-shrink-0 animate-pulse"></div>
                    <span class="text-[#2E3532] text-lg font-medium group-hover:text-[#8B2635] transition-colors duration-300">{{ item }}</span>
                  </div>
                </div>
                <div class="space-y-6">
                  <div v-for="(item, index) in responsibilities.right" :key="index" 
                       class="flex items-start space-x-4 animate-fade-in-up group-hover:translate-x-2 transition-transform duration-300"
                       :style="`animation-delay: ${(index + 3) * 0.3}s`">
                    <div class="w-4 h-4 bg-gradient-to-r from-[#2E3532] to-[#8B2635] rounded-full mt-1 flex-shrink-0 animate-pulse animation-delay-500"></div>
                    <span class="text-[#2E3532] text-lg font-medium group-hover:text-[#8B2635] transition-colors duration-300">{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Latest Updates -->
    <section class="py-20 bg-white relative overflow-hidden">
      <!-- Animated Grid Background -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid grid-cols-8 gap-4 h-full">
          <div v-for="i in 32" :key="i" class="border-2 border-[#8B2635] transform rotate-45 animate-pulse" :style="`animation-delay: ${i * 0.1}s`"></div>
        </div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-5xl font-bold text-[#8B2635] mb-6 animate-fade-in-up">Сүүлийн үйл ажиллагаа</h2>
          <p class="text-xl text-[#2E3532] max-w-3xl mx-auto animate-fade-in-up animation-delay-300">
            Одоо хэрэгжиж буй болон төлөвлөж буй ажлуудын талаарх мэдээлэл
          </p>
          <div class="w-32 h-1 bg-gradient-to-r from-[#8B2635] to-[#2E3532] mx-auto rounded-full animate-scale-in animation-delay-500 mt-6"></div>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <article v-for="(update, index) in recentUpdates" :key="update.id" 
                   class="group relative animate-fade-in-up"
                   :style="`animation-delay: ${(index + 1) * 0.2}s`">
            <!-- Background Shadow Card -->
            <div class="absolute inset-0 bg-gradient-to-br from-[#8B2635]/10 to-[#2E3532]/10 rounded-3xl transform rotate-2 group-hover:rotate-6 transition-transform duration-500"></div>
            
            <div class="relative bg-gradient-to-br from-[#E0E2DB] to-[#D2D4C8] rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-4 border-[#8B2635]/10 hover:border-[#8B2635]/30 overflow-hidden">
              <!-- Animated Top Bar -->
              <div class="h-2 bg-gradient-to-r from-[#8B2635] to-[#2E3532] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              
              <div class="p-8">
                <!-- Date Badge with Animation -->
                <div class="relative mb-6">
                  <div class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white inline-block px-4 py-2 rounded-full text-sm font-semibold transform group-hover:scale-110 transition-transform duration-300">
                    {{ update.date }}
                  </div>
                  <!-- Floating Elements -->
                  <div class="absolute -top-2 -right-2 w-4 h-4 bg-[#E0E2DB] rounded-full animate-bounce opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h3 class="text-xl font-bold mb-4 text-[#2E3532] group-hover:text-[#8B2635] transition-colors duration-300 leading-tight">
                  {{ update.title }}
                </h3>
                
                <p class="text-[#2E3532] mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {{ update.excerpt }}
                </p>
                
                <!-- Category Badge -->
                <div class="flex items-center justify-between">
                  <div class="bg-[#8B2635]/10 text-[#8B2635] px-4 py-2 rounded-full text-sm font-semibold transform group-hover:bg-[#8B2635] group-hover:text-white transition-all duration-300">
                    {{ update.category }}
                  </div>
                  
                  <!-- Arrow Icon -->
                  <div class="w-8 h-8 bg-[#8B2635]/10 rounded-full flex items-center justify-center group-hover:bg-[#8B2635] transition-all duration-300 transform group-hover:rotate-45">
                    <svg class="w-4 h-4 text-[#8B2635] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        
        <!-- Animated Call-to-Action Button -->
        <div class="text-center">
          <NuxtLink to="/news" class="group inline-block relative">
            <!-- Button Background Effects -->
            <div class="absolute inset-0 bg-gradient-to-r from-[#8B2635] to-[#2E3532] rounded-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-[#2E3532] to-[#8B2635] rounded-2xl transform scale-105 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            
            <div class="relative bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white px-10 py-4 rounded-2xl font-bold text-lg transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
              <span class="flex items-center space-x-3">
                <span>Бүх мэдээ үзэх</span>
                <svg class="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Enhanced Philosophy Quote with Parallax -->
    <section class="py-20 bg-gradient-to-r from-[#8B2635] via-[#2E3532] to-[#8B2635] text-white relative overflow-hidden min-h-[60vh] flex items-center">
      <!-- Multi-layer Background Effects -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute w-96 h-96 bg-[#E0E2DB] rounded-full filter blur-3xl animate-float-slow top-20 left-20"></div>
        <div class="absolute w-64 h-64 bg-[#D2D4C8] rounded-full filter blur-2xl animate-float-slow animation-delay-2000 bottom-20 right-20"></div>
        <div class="absolute w-80 h-80 bg-[#E0E2DB] rounded-full filter blur-3xl animate-float-slow animation-delay-4000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <!-- Animated Geometric Patterns -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid grid-cols-12 gap-2 h-full">
          <div v-for="i in 48" :key="i" class="border border-white transform rotate-45 animate-pulse" :style="`animation-delay: ${i * 0.05}s`"></div>
        </div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <div class="max-w-5xl mx-auto">
          <!-- Animated Section Title -->
          <div class="mb-12">
            <h2 class="text-4xl font-bold mb-6 text-[#E0E2DB] animate-fade-in-up">
              <span class="block overflow-hidden">
                <span class="block animate-slide-up">Ажлын</span>
              </span>
              <span class="block overflow-hidden">
                <span class="block animate-slide-up animation-delay-300">зарчим</span>
              </span>
            </h2>
            <div class="w-32 h-1 bg-[#E0E2DB] mx-auto rounded-full animate-scale-in animation-delay-500"></div>
          </div>
          
          <!-- Main Quote with Typewriter Effect -->
          <div class="relative mb-12">
            <!-- Quote Marks -->
            <div class="absolute -top-8 -left-8 text-6xl text-[#E0E2DB]/30 font-serif animate-fade-in">"</div>
            <div class="absolute -bottom-8 -right-8 text-6xl text-[#E0E2DB]/30 font-serif animate-fade-in animation-delay-2000">"</div>
            
            <blockquote class="text-3xl md:text-4xl font-light mb-8 text-white leading-relaxed animate-fade-in-up animation-delay-500">
              <span class="typing-text" data-text="Ажил хүнийг голдог, хүн ажлыг голдоггүй.">Ажил хүнийг голдог, хүн ажлыг голдоггүй.</span>
              <br>
              <span class="typing-text animation-delay-2000" data-text="Төлөвлөлт, төлөвлөлт, төлөвлөлт - энэ бол цаг хэмнэх хамгийн сайн арга.">Төлөвлөлт, төлөвлөлт, төлөвлөлт - энэ бол цаг хэмнэх хамгийн сайн арга.</span>
            </blockquote>
          </div>
          
          <!-- Attribution with Animation -->
          <div class="relative animate-fade-in-up animation-delay-1000">
            <p class="text-xl text-[#D2D4C8] mb-8">- Аавын хэлсэн үг, амьдралын зарчим</p>
            
            <!-- Decorative Elements -->
            <div class="flex justify-center space-x-4 mt-8">
              <div class="w-3 h-3 bg-[#E0E2DB] rounded-full animate-pulse"></div>
              <div class="w-3 h-3 bg-[#D2D4C8] rounded-full animate-pulse animation-delay-300"></div>
              <div class="w-3 h-3 bg-[#E0E2DB] rounded-full animate-pulse animation-delay-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Timeline data for enhanced about section
const timelineItems = [
  { year: '1985 онд төрсөн', description: '- Цэвэгмидийн Амгаланбаярын хүү' },
  { year: '2007:', description: 'Австралийн Монаш их сургуулийг улс төр, гадаад судлалаар бакалавр' },
  { year: '2011:', description: 'Австралийн Декиний их сургуулийг гадаад харилцааны магистр' },
  { year: '2008-2013:', description: 'УИХ-ын Тамгын газрын гадаад харилцааны хэлтэст' },
  { year: '2013-2016:', description: 'БНБолгар Улсад суугаа ЭСЯ-ны дипломат ажилтан' },
  { year: '2016-2024:', description: 'Хан-Уул дүүргийн ЗДТГ-т Засаг даргын орлогч' },
  { year: '2024 оноос:', description: 'Нийслэлийн Засаг даргын орлогч' }
]

// Responsibilities data
const responsibilities = {
  left: [
    'Нийгмийн салбарын бодлого',
    'Ногоон хөгжлийн асуудал'
  ],
  right: [
    'Агаар, орчны бохирдлын асуудал',
    'Боловсролын салбарын хөгжил'
  ]
}

// Recent updates data
const recentUpdates = [
  {
    id: 1,
    title: "Сургууль, цэцэрлэгийн хоолны чанарыг сайжруулах арга хэмжээ",
    excerpt: "Хүүхдүүдийн хоолны хэмжээ, чанарыг дээшлүүлэх талаар шинэ бодлого боловсруулж байна. Нэг хүүхдэд ногдох төсвийг нэмэгдүүлэх шаардлагатай.",
    date: "2024-01-15",
    category: "Боловсролын бодлого"
  },
  {
    id: 2,
    title: "20 минутын хотын концепцийг Хан-Уул дүүрэгт нэвтрүүлэх",
    excerpt: "Олон улсын стандартын дагуу хүн бүр гэрээсээ 20 минутын дотор бүх үндсэн үйлчилгээнд хүрэх боломжтой хотыг бүтээх төлөвлөгөө.",
    date: "2024-01-10",
    category: "Хотын төлөвлөлт"
  },
  {
    id: 3,
    title: "Хан-Уул спортын клубын үйл ажиллагаа",
    excerpt: "Залуучуудад зориулсан спортын клубын үйл ажиллагааг өргөжүүлж, хөлбөмбөг, сагсан бөмбөг, бүжгийн хичээлүүдийг хөгжүүлж байна.",
    date: "2024-01-05",
    category: "Спорт, залуучуудын бодлого"
  }
]

// Animation functions
onMounted(() => {
  // Animated Counter functionality
  const animateCounters = () => {
    const counters = document.querySelectorAll('.animated-counter')
    
    const countUp = (element, target) => {
      let current = 0
      const increment = target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        element.textContent = Math.floor(current)
      }, 30)
    }
    
    // Intersection Observer for counter animation
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    }
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target)
          countUp(entry.target, target)
          counterObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)
    
    counters.forEach(counter => {
      counterObserver.observe(counter)
    })
  }
  
  // Progress bar animation
  const animateProgressBars = () => {
    const progressBars = document.querySelectorAll('.animate-fill-bar')
    
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.width = '100%'
          }, 500)
          progressObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })
    
    progressBars.forEach(bar => {
      progressObserver.observe(bar)
    })
  }
  
  // Typing effect for text
  const initTypingEffect = () => {
    const typingElements = document.querySelectorAll('.typing-text')
    
    typingElements.forEach(element => {
      const text = element.dataset.text || element.textContent
      element.textContent = ''
      
      setTimeout(() => {
        let index = 0
        const typeInterval = setInterval(() => {
          element.textContent = text.slice(0, index + 1)
          index++
          if (index >= text.length) {
            clearInterval(typeInterval)
          }
        }, 50)
      }, parseInt(element.classList.contains('animation-delay-2000') ? 2000 : 0))
    })
  }
  
  // Parallax scroll effect
  const initParallaxEffect = () => {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.animate-float, .animate-float-slow')
      
      parallaxElements.forEach(element => {
        const speed = 0.5
        element.style.transform = `translateY(${scrolled * speed}px)`
      })
    })
  }
  
  // Initialize all animations
  setTimeout(() => {
    animateCounters()
    animateProgressBars()
    initTypingEffect()
    initParallaxEffect()
  }, 100)
})

// SEO Meta
useSeoMeta({
  title: 'Амгаланбаярын Амартүвшин - Нүүр хуудас',
  ogTitle: 'Амгаланбаярын Амартүвшин - Улаанбаатар хотын Засаг даргын орлогч',
  description: 'Улаанбаатар хотын Засаг даргын орлогч. Нийгмийн салбар, ногоон хөгжил болон агаар, орчны бохирдлын асуудал хариуцна.',
  ogDescription: 'Улаанбаатар хотын Засаг даргын орлогч. Нийгмийн салбар, ногоон хөгжил болон агаар, орчны бохирдлын асуудал хариуцна.',
})
</script> 