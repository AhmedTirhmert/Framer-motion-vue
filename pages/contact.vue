<template>
  <main class="pt-24">
    <div class="container mx-auto px-4">
      <section class="px-6 py-20">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Formulaire de contact -->
          <div>
            <h2 class="text-3xl font-display mb-4">Écrivez-nous</h2>
            <p class="text-neutral-400 mb-6">
              Pour toute demande de projet ou question, notre équipe vous répond
              rapidement.
            </p>
            <form class="space-y-4">
              <div>
                <label class="block mb-1 text-sm">Nom</label>
                <input
                  type="text"
                  class="w-full bg-walnut-800 text-white p-3 rounded"
                />
              </div>
              <div>
                <label class="block mb-1 text-sm">Email</label>
                <input
                  type="email"
                  class="w-full bg-walnut-800 text-white p-3 rounded"
                />
              </div>
              <div>
                <label class="block mb-1 text-sm">Sujet</label>
                <input
                  type="text"
                  class="w-full bg-walnut-800 text-white p-3 rounded"
                />
              </div>
              <div>
                <label class="block mb-1 text-sm">Message</label>
                <textarea
                  rows="5"
                  class="w-full bg-walnut-800 text-white p-3 rounded"
                ></textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-walnut-500 hover:bg-walnut-600 text-white font-semibold py-3 rounded transition"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <!-- Coordonnées & réseaux sociaux -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-display mb-4">Contactez-nous</h2>
              <ul class="space-y-2 text-neutral-300">
                <li>
                  <strong>Téléphone :</strong>
                  <a href="tel:+212612345678" class="text-white hover:underline"
                    >+212 6 12 34 56 78</a
                  >
                </li>
                <li>
                  <strong>WhatsApp :</strong>
                  <a
                    href="https://wa.me/212612345678"
                    target="_blank"
                    class="text-white hover:underline"
                    >Discuter maintenant</a
                  >
                </li>
                <li>
                  <strong>Email :</strong>
                  <a
                    href="mailto:contact@elitemdf.ma"
                    class="text-white hover:underline"
                    >contact@elitemdf.ma</a
                  >
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-display mb-2">Suivez-nous</h2>
              <div class="flex gap-4 text-2xl">
                <a
                  href="https://instagram.com/elitemdf"
                  target="_blank"
                  class="hover:text-walnut-500"
                >
                  <Icon name="mdi:instagram" size="40" />
                </a>
                <a
                  href="https://facebook.com/elitemdf"
                  target="_blank"
                  class="hover:text-walnut-500"
                >
                  <Icon name="mdi:facebook" size="40" />
                </a>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-display mb-2">Adresse</h2>
              <p class="text-neutral-300">
                Zone Artisanale<br />
                Ouled Teïma, Maroc
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const submitForm = () => {
    // TODO: Implement form submission
    console.log('Form submitted:', form);
  };
</script>
