/* Formların tek giriş noktası. Bekleme listesi ve iletişim formu aynı
   `insertRow` üstünden Supabase'e yazar; bileşenler HTTP ayrıntısını görmez.

   Statik bir site olduğu için sunucu tarafı yok: kayıt, yalnızca INSERT yetkisi
   olan anon anahtarıyla doğrudan PostgREST'e gider (bkz. supabase/migrations —
   RLS yalnızca insert'e izin verir, okuma kapalıdır). */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const EMAIL_PATTERN = /.+@.+\..+/

const DUPLICATE_CODE = '23505'

async function insertRow(table, row) {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn(
      `[freshlytoo] VITE_SUPABASE_URL ve VITE_SUPABASE_ANON_KEY tanımlı değil; "${table}" kaydı gönderilemedi.`,
    )
    return { ok: false, reason: 'not-configured' }
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        // RLS okumaya izin vermediği için insert sonrası satır geri istenmiyor.
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(row),
    })

    if (response.ok) return { ok: true }

    // Aynı e-posta ikinci kez geldiğinde kullanıcıya hata göstermenin anlamı yok.
    if (response.status === 409) {
      const body = await response.json().catch(() => null)
      if (body?.code === DUPLICATE_CODE) return { ok: true, duplicate: true }
    }

    return { ok: false, reason: 'request-failed' }
  } catch {
    return { ok: false, reason: 'network' }
  }
}

export function submitWaitlist({ email, role, language }) {
  return insertRow('waitlist', {
    email: email.trim().toLowerCase(),
    role,
    language,
    // KVKK onayı kayıt anında alınmış sayılır (form altındaki bilgilendirme metni).
    consented_at: new Date().toISOString(),
  })
}

export function submitContact({ name, email, subject, message, language }) {
  return insertRow('contact_messages', {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject,
    message: message.trim(),
    language,
    consented_at: new Date().toISOString(),
  })
}
