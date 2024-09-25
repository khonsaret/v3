
import Repository from '@/pages/Repository.vue'
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        home: "Home",
        courses:"Courses",
        rigister:"Register",
        about:"About",
        service:"Service",
        why:"Why",
        team:"Team",
        repos:"Repos",
        login:"Login",
        lang:"En",
        tlogo:"Finexo"
    },
    khm: {
        home: "ទំព័រដើម",
        courses:"មុខវិជ្ជា",
        rigister:"ចុះឈ្មោះ",
        about:"អំពីយើង",
        service:"សេវាកម្ម",
        why:"ហេតុអ្វីយើង",
        team:"ក្រុម",
        repos:"ឃ្លាំអ",
        login:"ចូលប្រើប្រាស់",
        lang:"Kh",
        tlogo:"ហ្វីនីហ្សូ"
    
    },
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n