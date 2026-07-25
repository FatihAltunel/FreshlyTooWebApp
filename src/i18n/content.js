export const landingContent = {
  en: {
    header: {
      logo: 'FreshlyToo',
      logoAriaLabel: 'FreshlyToo home section',
      download: 'Join Waitlist',
      downloadAriaLabel: 'Join the FreshlyToo waitlist',
      languageAriaLabel: 'Switch website language',
      languageToggleLabel: 'TR / EN',
      languageToggleHint: 'Switch to Turkish',
      nav: {
        home: 'Home',
        businesses: 'Businesses',
        pricing: 'Pricing',
        ourStory: 'Our Story',
        faq: 'FAQ',
        contact: 'Contact',
      },
    },
    hero: {
      eyebrow: 'FreshlyToo',
      heading: 'Save surplus food with a cleaner, smarter experience.',
      subheadline:
        'A professional marketplace where people rescue quality meals and businesses recover value from daily surplus.',
      primaryCta: 'Join the Waitlist',
      secondaryCta: 'For Businesses',
      ctaAppStoreAriaLabel: 'Join the FreshlyToo waitlist form',
      ctaGooglePlayAriaLabel: 'Navigate to business section',
      mockupAriaLabel: 'FreshlyToo app home and map screens',
      bullets: [
        'Visual-first journey from discovery to pickup',
        'Live nearby offers with clear timing and pricing',
        'Trust-first flows for customers and business teams',
      ],
      mockups: {
        home: {
          title: 'Home feed',
          caption: 'Fresh offers at a glance',
          alt: 'FreshlyToo app home screen showing highlighted nearby meal offers',
        },
        map: {
          title: 'Map view',
          caption: 'Location-based discovery',
          alt: 'FreshlyToo app map view showing nearby discounted meal pins',
        },
      },
    },
    businesses: {
      heading: 'Built for Businesses',
      intro:
        'A practical toolkit for restaurants and bakeries to sell surplus fast, reduce waste, and increase repeat customers.',
      layoutAriaLabel: 'Business feature and screenshot layout',
      shotsAriaLabel: 'Business app screens',
      items: [
        {
          title: 'Fast Listing Workflow',
          bullets: [
            'Create a listing in under a minute',
            'Reuse templates for daily surplus',
            'Push new offers without menu complexity',
          ],
        },
        {
          title: 'Pickup Operations',
          bullets: [
            'Scan QR to verify handoff instantly',
            'Shorten queue time at busy windows',
            'Reduce friction with a clear pickup flow',
          ],
        },
        {
          title: 'Actionable Performance',
          bullets: [
            'Track demand trends by time and item',
            'Spot high-performing offer formats',
            'Improve rescue volume week by week',
          ],
        },
      ],
      mockups: {
        detail: {
          title: 'Offer detail',
          caption: 'Clear offer details',
          alt: 'FreshlyToo offer detail screen with pricing, pickup window, and reserve action',
        },
        qr: {
          title: 'Pickup QR',
          caption: 'Quick pickup verification',
          alt: 'FreshlyToo pickup QR screen used by businesses for handoff verification',
        },
      },
    },
    pricing: {
      heading: 'Simple, Transparent Pricing',
      intro: 'Choose the plan that fits your growth stage and rescue volume.',
      gridAriaLabel: 'Pricing plans',
      plans: [
        {
          name: 'Starter',
          price: 'Free',
          summary: 'Best for new partners validating demand.',
          bullets: ['Up to 10 listings / month', 'Basic analytics', 'Standard support'],
        },
        {
          name: 'Growth',
          price: '₺499 / month',
          summary: 'For teams that publish offers daily.',
          bullets: ['Unlimited listings', 'Priority pickup tools', 'Advanced insights'],
          featured: true,
        },
        {
          name: 'Scale',
          price: 'Custom',
          summary: 'For multi-branch operators needing central control.',
          bullets: ['Multi-location dashboard', 'Dedicated onboarding', 'Custom reporting'],
        },
      ],
    },
    ourStory: {
      heading: 'Our Story',
      intro:
        'FreshlyToo started with a simple goal: make food rescue easy enough to become a daily habit.',
      visualAriaLabel: 'Our story app screen visuals',
      bullets: [
        'Designed around real neighborhood pickup routines',
        'Focused on trust, speed, and clarity in every step',
        'Built to create measurable social and environmental impact',
      ],
      mockups: {
        home: {
          title: 'Rescue discovery',
          caption: 'Designed for daily rescue habits',
          alt: 'FreshlyToo home screen used to discover daily rescue options',
        },
        detail: {
          title: 'Offer confidence',
          caption: 'Transparent order details',
          alt: 'FreshlyToo offer detail screen highlighting clear order information and pickup timing',
        },
      },
    },
    faq: {
      heading: 'Frequently Asked Questions',
      intro: 'Quick answers for consumers and business partners.',
      listAriaLabel: 'Frequently asked questions',
      items: [
        {
          question: 'Is FreshlyToo available right now?',
          answer:
            'We are onboarding users and partner businesses in waves. Join the waitlist to get early access updates.',
        },
        {
          question: 'How are pickup times managed?',
          answer:
            'Each offer includes a defined pickup window. Businesses verify handoff with a QR flow to keep operations smooth.',
        },
        {
          question: 'Can I use FreshlyToo as a small bakery?',
          answer:
            'Yes. Starter and Growth plans are designed for independent businesses and small teams.',
        },
      ],
    },
    contactWaitlist: {
      heading: 'Contact & Waitlist',
      intro: 'Tell us who you are, and we will share launch updates and next steps.',
      formAriaLabel: 'Waitlist signup form',
      bullets: [
        'Consumers get early access invitations',
        'Businesses receive onboarding walkthroughs',
        'No spam, only relevant launch communication',
      ],
      form: {
        nameLabel: 'Full Name',
        namePlaceholder: 'Jane Doe',
        emailLabel: 'Email Address',
        emailPlaceholder: 'you@example.com',
        roleLabel: 'I am joining as',
        rolePlaceholder: 'Select role',
        roles: ['Consumer', 'Restaurant', 'Bakery', 'Other Business'],
        submitLabel: 'Join Waitlist',
        submitAriaLabel: 'Submit waitlist signup form',
        success: 'Thanks! Your waitlist request has been received.',
      },
    },
    footer: {
      mission: 'Save surplus food, stop waste.',
      legalPlaceholder: 'FreshlyToo Teknoloji A.Ş. | Istanbul, Turkiye',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      contact: 'Contact',
      socialPlaceholder: 'Instagram | X | LinkedIn',
      copyright: '© 2026 FreshlyToo. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      cookies: 'Cookie Policy',
    },
  },
  tr: {
    header: {
      logo: 'FreshlyToo',
      logoAriaLabel: 'FreshlyToo ana bölümüne git',
      download: 'Bekleme Listesine Katıl',
      downloadAriaLabel: 'FreshlyToo bekleme listesine katıl',
      languageAriaLabel: 'Site dilini değiştir',
      languageToggleLabel: 'TR / EN',
      languageToggleHint: 'Switch to English',
      nav: {
        home: 'Ana Sayfa',
        businesses: 'İşletmeler',
        pricing: 'Fiyatlandırma',
        ourStory: 'Hikayemiz',
        faq: 'SSS',
        contact: 'İletişim',
      },
    },
    hero: {
      eyebrow: 'FreshlyToo',
      heading: 'Fazla yemeği daha temiz ve akıllı bir deneyimle kurtar.',
      subheadline:
        'İnsanların kaliteli yemekleri kurtardığı, işletmelerin günlük fazlalıktan değer yarattığı profesyonel bir pazar yeri.',
      primaryCta: 'Bekleme Listesine Katıl',
      secondaryCta: 'İşletmeler İçin',
      ctaAppStoreAriaLabel: 'FreshlyToo bekleme listesi formuna git',
      ctaGooglePlayAriaLabel: 'İşletmeler bölümüne git',
      mockupAriaLabel: 'FreshlyToo ana ekran ve harita görüntüleri',
      bullets: [
        'Keşiften teslim almaya görsel odaklı akış',
        'Yakındaki fırsatları net süre ve fiyatla canlı gör',
        'Tüketici ve ekipler için güven odaklı deneyim',
      ],
      mockups: {
        home: {
          title: 'Ana akış',
          caption: 'Fırsatları tek bakışta gör',
          alt: 'FreshlyToo uygulamasında öne çıkan yakındaki yemek fırsatlarını gösteren ana ekran',
        },
        map: {
          title: 'Harita görünümü',
          caption: 'Konuma göre keşif',
          alt: 'FreshlyToo uygulamasında yakındaki indirimli yemek pinlerini gösteren harita görünümü',
        },
      },
    },
    businesses: {
      heading: 'İşletmeler İçin Tasarlandı',
      intro:
        'Restoran ve fırınların fazla ürünü hızlı satmasına, israfı azaltmasına ve tekrar eden müşteri kazanmasına yardımcı olan pratik araçlar.',
      layoutAriaLabel: 'İşletme özellikleri ve ekran görüntüsü düzeni',
      shotsAriaLabel: 'İşletme uygulama ekranları',
      items: [
        {
          title: 'Hızlı İlan Akışı',
          bullets: [
            'Bir dakikadan kısa sürede ilan oluştur',
            'Günlük fazlalık için şablonları yeniden kullan',
            'Karmaşık menü olmadan yeni teklif yayınla',
          ],
        },
        {
          title: 'Teslim Operasyonları',
          bullets: [
            'QR ile teslimi anında doğrula',
            'Yoğun saatlerde kuyruk süresini kısalt',
            'Net teslim akışıyla sürtünmeyi azalt',
          ],
        },
        {
          title: 'Aksiyon Alınabilir Performans',
          bullets: [
            'Zaman ve ürün bazında talep trendlerini izle',
            'Yüksek performanslı teklif formatlarını yakala',
            'Kurtarma hacmini haftadan haftaya artır',
          ],
        },
      ],
      mockups: {
        detail: {
          title: 'Teklif detayı',
          caption: 'Net teklif ayrıntıları',
          alt: 'FreshlyToo teklif detay ekranında fiyat, teslim alma aralığı ve ayırt eylemi',
        },
        qr: {
          title: 'Teslim QR',
          caption: 'Hızlı teslim doğrulama',
          alt: 'FreshlyToo uygulamasında işletmeler için teslim doğrulamada kullanılan QR ekranı',
        },
      },
    },
    pricing: {
      heading: 'Basit ve Şeffaf Fiyatlandırma',
      intro: 'Büyüme aşamana ve kurtarma hacmine uygun planı seç.',
      gridAriaLabel: 'Fiyat planları',
      plans: [
        {
          name: 'Başlangıç',
          price: 'Ücretsiz',
          summary: 'Talebi doğrulayan yeni partnerler için.',
          bullets: ['Aylık 10 ilana kadar', 'Temel analitik', 'Standart destek'],
        },
        {
          name: 'Büyüme',
          price: '₺499 / ay',
          summary: 'Her gün teklif yayınlayan ekipler için.',
          bullets: ['Sınırsız ilan', 'Öncelikli teslim araçları', 'Gelişmiş içgörüler'],
          featured: true,
        },
        {
          name: 'Ölçek',
          price: 'Özel',
          summary: 'Merkezi kontrol isteyen çok şubeli işletmeler için.',
          bullets: ['Çok lokasyon paneli', 'Özel onboarding', 'Özel raporlama'],
        },
      ],
    },
    ourStory: {
      heading: 'Hikayemiz',
      intro:
        'FreshlyToo basit bir hedefle başladı: yemek kurtarmayı günlük alışkanlığa dönüşecek kadar kolaylaştırmak.',
      visualAriaLabel: 'Hikaye bölümü uygulama görselleri',
      bullets: [
        'Gerçek mahalle teslim alışkanlıklarına göre tasarlandı',
        'Her adımda güven, hız ve netliğe odaklandı',
        'Ölçülebilir sosyal ve çevresel etki üretmek için geliştirildi',
      ],
      mockups: {
        home: {
          title: 'Kurtarma keşfi',
          caption: 'Günlük kurtarma alışkanlıkları için tasarlandı',
          alt: 'FreshlyToo ana ekranında günlük kurtarma seçeneklerini keşfetme görünümü',
        },
        detail: {
          title: 'Teklif güveni',
          caption: 'Şeffaf sipariş detayları',
          alt: 'FreshlyToo teklif detay ekranında net sipariş bilgisi ve teslim alma zamanı',
        },
      },
    },
    faq: {
      heading: 'Sık Sorulan Sorular',
      intro: 'Tüketiciler ve işletme partnerleri için hızlı yanıtlar.',
      listAriaLabel: 'Sık sorulan sorular',
      items: [
        {
          question: 'FreshlyToo şu anda kullanılabiliyor mu?',
          answer:
            'Kullanıcıları ve işletme partnerlerini kademeli olarak dahil ediyoruz. Erken erişim güncellemeleri için bekleme listesine katılın.',
        },
        {
          question: 'Teslim alma saatleri nasıl yönetiliyor?',
          answer:
            'Her teklifte belirli bir teslim alma aralığı bulunur. İşletmeler QR akışıyla teslimi doğrulayarak operasyonu sorunsuz tutar.',
        },
        {
          question: 'Küçük bir fırın olarak kullanabilir miyim?',
          answer:
            'Evet. Başlangıç ve Büyüme planları bağımsız işletmeler ve küçük ekipler için tasarlandı.',
        },
      ],
    },
    contactWaitlist: {
      heading: 'İletişim ve Bekleme Listesi',
      intro: 'Bize kendinizden bahsedin, lansman ve sonraki adımları sizinle paylaşalım.',
      formAriaLabel: 'Bekleme listesi kayıt formu',
      bullets: [
        'Tüketiciler erken erişim daveti alır',
        'İşletmeler onboarding rehberliği alır',
        'Spam yok, sadece ilgili lansman iletişimleri',
      ],
      form: {
        nameLabel: 'Ad Soyad',
        namePlaceholder: 'Ayse Yilmaz',
        emailLabel: 'E-posta Adresi',
        emailPlaceholder: 'siz@example.com',
        roleLabel: 'Katılım türüm',
        rolePlaceholder: 'Rol seçin',
        roles: ['Tüketici', 'Restoran', 'Fırın', 'Diğer İşletme'],
        submitLabel: 'Bekleme Listesine Katıl',
        submitAriaLabel: 'Bekleme listesi formunu gönder',
        success: 'Teşekkürler! Bekleme listesi talebiniz alındı.',
      },
    },
    footer: {
      mission: 'Fazla yemeği kurtar, israfı durdur.',
      legalPlaceholder: 'FreshlyToo Teknoloji A.Ş. | İstanbul, Türkiye',
      quickLinks: 'Hızlı Bağlantılar',
      legal: 'Yasal',
      contact: 'İletişim',
      socialPlaceholder: 'Instagram | X | LinkedIn',
      copyright: '© 2026 FreshlyToo. Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Koşulları',
      cookies: 'Çerez Politikası',
    },
  },
}
