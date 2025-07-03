<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute w-64 h-64 bg-[#E0E2DB] rounded-full mix-blend-multiply filter blur-xl animate-pulse top-10 right-10"></div>
        <div class="absolute w-48 h-48 bg-[#D2D4C8] rounded-full mix-blend-multiply filter blur-xl animate-pulse bottom-10 left-10"></div>
      </div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl font-bold mb-4">Холбоо барих</h1>
        <p class="text-xl text-[#E0E2DB]">Санал хүсэлт, өргөдөл гомдол</p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16 bg-[#E0E2DB]/20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12">
            <!-- Contact Details -->
            <div>
              <h2 class="text-3xl font-bold mb-6 text-[#8B2635]">Албан ёсны мэдээлэл</h2>
              <div class="space-y-6">
                <div class="border-l-4 border-[#8B2635] pl-6 bg-white p-4 rounded-lg shadow-lg">
                  <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">Албан тушаал</h3>
                  <p class="text-[#2E3532] mb-1">Улаанбаатар хотын Засаг даргын орлогч</p>
                  <p class="text-[#2E3532]/70 text-sm">Нийгмийн салбар, ногоон хөгжил болон агаар, орчны бохирдлын асуудал хариуцна</p>
                </div>
                
                <div class="border-l-4 border-[#8B2635] pl-6 bg-white p-4 rounded-lg shadow-lg">
                  <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">Хаяг</h3>
                  <p class="text-[#2E3532]">Улаанбаатар хот</p>
                  <p class="text-[#2E3532]">Нийслэлийн Засаг даргын газар</p>
                </div>

                <div class="border-l-4 border-[#8B2635] pl-6 bg-white p-4 rounded-lg shadow-lg">
                  <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">Ажлын цаг</h3>
                  <p class="text-[#2E3532]">Даваа - Баасан: 09:00 - 18:00</p>
                  <p class="text-[#2E3532]/70 text-sm">Иргэдтэй уулзах цагийг урьдчилан товлох шаардлагатай</p>
                </div>

                <div class="border-l-4 border-[#8B2635] pl-6 bg-white p-4 rounded-lg shadow-lg">
                  <h3 class="text-xl font-semibold mb-2 text-[#8B2635]">Хариуцах салбар</h3>
                  <ul class="text-[#2E3532] space-y-1">
                    <li>• Боловсролын бодлого (23 сургууль, 69 цэцэрлэг)</li>
                    <li>• Эрүүл мэндийн асуудал</li>
                    <li>• Нийгмийн хамгааллын үйлчилгээ</li>
                    <li>• Ногоон хөгжлийн бодлого</li>
                    <li>• Агаар, байгаль орчны бохирдлын асуудал</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <div>
              <h2 class="text-3xl font-bold mb-6 text-[#8B2635]">Санал хүсэлт илгээх</h2>
              <form @submit.prevent="submitForm" class="space-y-6 bg-white p-6 rounded-2xl shadow-2xl border-4 border-[#8B2635]/10">
                <div>
                  <label for="name" class="block text-sm font-medium text-[#2E3532] mb-2">Овог нэр</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 border border-[#D2D4C8] rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent transition-all duration-300"
                  >
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-[#2E3532] mb-2">И-мэйл хаяг</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    required
                    class="w-full px-4 py-3 border border-[#D2D4C8] rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent transition-all duration-300"
                  >
                </div>

                <div>
                  <label for="phone" class="block text-sm font-medium text-[#2E3532] mb-2">Утасны дугаар</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                    class="w-full px-4 py-3 border border-[#D2D4C8] rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent transition-all duration-300"
                  >
                </div>

                <div>
                  <label for="subject" class="block text-sm font-medium text-[#2E3532] mb-2">Сэдэв</label>
                  <select 
                    id="subject" 
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 border border-[#D2D4C8] rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Сэдэв сонгоно уу</option>
                    <option value="education">Боловсролын асуудал</option>
                    <option value="health">Эрүүл мэндийн асуудал</option>
                    <option value="social">Нийгмийн хамгааллын асуудал</option>
                    <option value="environment">Байгаль орчны асуудал</option>
                    <option value="other">Бусад</option>
                  </select>
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-[#2E3532] mb-2">Мессеж</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    v-model="form.message"
                    required
                    class="w-full px-4 py-3 border border-[#D2D4C8] rounded-lg focus:ring-2 focus:ring-[#8B2635] focus:border-transparent transition-all duration-300"
                    placeholder="Та өөрийн санал хүсэлт, асуудлыг энд бичнэ үү..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  class="w-full bg-[#8B2635] text-white py-3 px-6 rounded-lg hover:bg-[#2E3532] transition-all duration-300 font-semibold transform hover:scale-105 shadow-xl"
                >
                  Илгээх
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media -->
    <section class="py-16 bg-gradient-to-r from-[#E0E2DB] to-[#D2D4C8]">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8 text-[#8B2635]">Сошиал медиа</h2>
        <div class="flex justify-center space-x-8">
          <a href="https://www.facebook.com/A.Amartuvshinn" target="_blank" rel="noopener noreferrer" class="bg-[#8B2635] text-white p-4 rounded-full hover:bg-[#2E3532] transition-all duration-300 transform hover:scale-110 shadow-xl">
            <span class="text-xl font-semibold">Facebook</span>
          </a>
          <a href="https://www.instagram.com/amartuvshnn/" target="_blank" rel="noopener noreferrer" class="bg-gradient-to-r from-[#8B2635] to-[#2E3532] text-white p-4 rounded-full hover:from-[#2E3532] hover:to-[#8B2635] transition-all duration-300 transform hover:scale-110 shadow-xl">
            <span class="text-xl font-semibold">Instagram</span>
          </a>
          <a href="https://x.com/Amartuvshnn" target="_blank" rel="noopener noreferrer" class="bg-[#2E3532] text-white p-4 rounded-full hover:bg-[#8B2635] transition-all duration-300 transform hover:scale-110 shadow-xl">
            <span class="text-xl font-semibold">X</span>
          </a>
        </div>
        <p class="text-[#2E3532] mt-6 max-w-2xl mx-auto">Сүүлийн үеийн мэдээлэл, үйл ажиллагааны талаар сошиал медиагаар дамжуулан мэдээлэл авах боломжтой</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Handle form submission
  alert('Таны санал хүсэлтийг хүлээн авлаа. Удахгүй хариу өгөх болно.')
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}

useSeoMeta({
  title: 'Холбоо барих - Амгаланбаярын Амартүвшин',
  description: 'Улаанбаатар хотын Засаг даргын орлогч А.Амартүвшинтэй холбоо барих, санал хүсэлт илгээх',
})
</script> 