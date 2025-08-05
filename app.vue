<template>
  <div>
    <!-- Maintenance Mode - Comment out the section below to re-enable the site -->
    <div class="min-h-screen bg-gradient-to-br from-[#E0E2DB] via-[#D2D4C8] to-[#E0E2DB] flex items-center justify-center p-4">
      <div class="max-w-lg mx-auto text-center bg-white rounded-2xl shadow-2xl p-8 border-4 border-[#8B2635]/20">
        <!-- Language Toggle -->
        <div class="flex justify-center mb-6">
          <button @click="toggleLanguage" class="bg-[#8B2635] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2E3532] transition-colors duration-300">
            {{ isEnglish ? 'МОН' : 'ENG' }}
          </button>
        </div>
        
        <!-- English Content -->
        <div v-if="isEnglish" class="space-y-6">
          <div class="w-16 h-16 bg-[#8B2635] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h1 class="text-4xl font-bold text-[#8B2635] mb-4">Under Maintenance</h1>
          <p class="text-[#2E3532] mb-6 text-lg leading-relaxed">We're currently performing maintenance on our website due to payment processing.</p>
          <div class="bg-[#8B2635]/10 p-4 rounded-lg mb-6">
            <p class="text-[#8B2635] font-semibold mb-2">Payment Due Notice</p>
            <p class="text-[#2E3532]">Please contact us to resolve payment issues and restore full website access.</p>
          </div>
          <div class="bg-[#2E3532] text-white p-4 rounded-lg">
            <p class="font-semibold mb-2">Contact Information</p>
            <a href="tel:+97699500509" class="text-[#E0E2DB] hover:text-white text-xl font-bold transition-colors duration-300">
              +976 9950 0509
            </a>
          </div>
        </div>
        
        <!-- Mongolian Content -->
        <div v-else class="space-y-6">
          <div class="w-16 h-16 bg-[#8B2635] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h1 class="text-4xl font-bold text-[#8B2635] mb-4">Засвар үйлчилгээ</h1>
          <p class="text-[#2E3532] mb-6 text-lg leading-relaxed">Төлбөрийн асуудлаас болж вэбсайтын засвар үйлчилгээ хийж байна.</p>
          <div class="bg-[#8B2635]/10 p-4 rounded-lg mb-6">
            <p class="text-[#8B2635] font-semibold mb-2">Төлбөр төлөх хугацаа дууссан</p>
            <p class="text-[#2E3532]">Төлбөрийн асуудлыг шийдэж, вэбсайтыг бүрэн хэрэглэхийн тулд холбоо барина уу.</p>
          </div>
          <div class="bg-[#2E3532] text-white p-4 rounded-lg">
            <p class="font-semibold mb-2">Холбоо барих мэдээлэл</p>
            <a href="tel:+97699500509" class="text-[#E0E2DB] hover:text-white text-xl font-bold transition-colors duration-300">
              +976 9950 0509
            </a>
          </div>
        </div>
        
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#8B2635] mx-auto mt-8"></div>
      </div>
    </div>
    <!-- 
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isEnglish = ref(true)

const toggleLanguage = () => {
  isEnglish.value = !isEnglish.value
}
</script>
