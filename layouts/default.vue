<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden">
    <!-- Background Animation -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-[#E0E2DB] via-[#D2D4C8] to-[#E0E2DB]"></div>
      <div class="absolute inset-0 opacity-30">
        <div class="absolute w-96 h-96 bg-[#8B2635] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-0 left-0"></div>
        <div class="absolute w-96 h-96 bg-[#2E3532] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div class="absolute w-96 h-96 bg-[#8B2635] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-0"></div>
      </div>
    </div>

    <!-- Header -->
    <header class="relative z-10 bg-[#8B2635] text-white shadow-2xl border-b-4 border-[#2E3532]">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-2xl font-bold hover:text-[#E0E2DB] transition-colors duration-300">
            А.АМАРТҮВШИН
          </NuxtLink>
          <div class="hidden md:flex space-x-8">
            <NuxtLink to="/" class="nav-link">Нүүр</NuxtLink>
            <NuxtLink to="/about" class="nav-link">Намтар</NuxtLink>
            <NuxtLink to="/vision" class="nav-link">Алсын хараа</NuxtLink>
            <NuxtLink to="/projects" class="nav-link">Төслүүд</NuxtLink>
            <NuxtLink to="/work-style" class="nav-link">Ажлын арга барил</NuxtLink>
            <NuxtLink to="/news" class="nav-link">Мэдээ</NuxtLink>
            <NuxtLink to="/contact" class="nav-link">Холбоо барих</NuxtLink>
          </div>
          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 rounded-lg hover:bg-[#2E3532] transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <!-- Mobile menu -->
        <div v-show="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-[#2E3532] pt-4">
          <div class="flex flex-col space-y-3">
            <NuxtLink to="/" class="nav-link-mobile">Нүүр</NuxtLink>
            <NuxtLink to="/about" class="nav-link-mobile">Намтар</NuxtLink>
            <NuxtLink to="/vision" class="nav-link-mobile">Алсын хараа</NuxtLink>
            <NuxtLink to="/projects" class="nav-link-mobile">Төслүүд</NuxtLink>
            <NuxtLink to="/work-style" class="nav-link-mobile">Ажлын арга барил</NuxtLink>
            <NuxtLink to="/news" class="nav-link-mobile">Мэдээ</NuxtLink>
            <NuxtLink to="/contact" class="nav-link-mobile">Холбоо барих</NuxtLink>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-1 relative z-10">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="relative z-10 bg-[#2E3532] text-white py-8 border-t-4 border-[#8B2635]">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-4 text-[#E0E2DB]">Амгаланбаярын Амартүвшин</h3>
            <p class="text-[#D2D4C8]">Улаанбаатар хотын Засаг даргын орлогч. Нийгмийн салбар, ногоон хөгжил болон агаар, орчны бохирдлын асуудал хариуцна.</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-[#E0E2DB]">Албан тушаал</h3>
            <p class="text-[#D2D4C8]">Нийслэлийн Засаг даргын орлогч</p>
            <p class="text-[#D2D4C8]">Хан-Уул дүүргийн Иргэдийн Хурлын Төлөөлөгч</p>
            <p class="text-[#D2D4C8]">Хаяг: Улаанбаатар хот</p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4 text-[#E0E2DB]">Сошиал медиа</h3>
            <div class="flex space-x-4">
              <a href="https://www.facebook.com/A.Amartuvshinn" target="_blank" rel="noopener noreferrer" class="text-[#D2D4C8] hover:text-[#8B2635] transition-colors duration-300 bg-white/10 p-2 rounded-lg hover:bg-[#8B2635]">Facebook</a>
              <a href="https://www.instagram.com/amartuvshnn/" target="_blank" rel="noopener noreferrer" class="text-[#D2D4C8] hover:text-[#8B2635] transition-colors duration-300 bg-white/10 p-2 rounded-lg hover:bg-[#8B2635]">Instagram</a>
              <a href="https://x.com/Amartuvshnn" target="_blank" rel="noopener noreferrer" class="text-[#D2D4C8] hover:text-[#8B2635] transition-colors duration-300 bg-white/10 p-2 rounded-lg hover:bg-[#8B2635]">X (Twitter)</a>
            </div>
          </div>
        </div>
        <div class="border-t border-[#8B2635]/30 mt-8 pt-8 text-center text-[#D2D4C8]">
          <p>&copy; 2024 Амгаланбаярын Амартүвшин. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)

// Set favicon
useHead({
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ]
})
</script>