<template>
  <main class="overflow-x-hidden">
    <NewNav />
    <HeroSection />
    <InfoSection />
    <LogoCloud />
    <Services />
    <NewTeam />
    <CheckList />
    <Testimonial />
    <!-- <ColoredCta /> -->
    <ContactForm class="overflow-x-hidden" />
    <!-- CTA Section -->
    <BlackCta />
    <CustomFooter />
  </main>
</template>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Gagnon, Eisele & Rigby Attorneys: Full Service Orlando Law Firm',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Gagnon, Eisele & Rigby Attorneys Serving Orlando & Central Florida for over 10 years. Hire us your not hiring just a attorney but a team that collaborates, to achieve the absolute best out come for our clients cases.'
      }
    ]
  }
}
</script>
