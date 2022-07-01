<template>
  <main>
    <NewNav />
    <BrandedImage :header="'Family Law'" />
    <NewTeam />
    <BlackCta />
    <CustomFooter />
  </main>
</template>

<script>
export default {
  layout: 'default',
  head: {
    title: 'Family Law | Gagnon, Eisele & Rigby Attorneys: Full Service Orlando Law Firm',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Gagnon, Eisele & Rigby Attorneys Serving Orlando & Central Florida for over 10 years. Hire us, and you\'re not hiring just a attorney but a team that collaborates, to achieve the absolute best out come for our clients cases.'
      }
    ]
  }
}
</script>
