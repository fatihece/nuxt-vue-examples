<template>
  <section id="quotes">
    <div class="quote-card">
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div class="profile-wrapper">
        <div class="profile-image">
          <img src="images/testimonials/story1.jpg" alt="Satish Patel" />
        </div>
        <div class="profile-content">
          <h5>Bruce McKenzie</h5>
          <h6>Founder & CEO, Huddle</h6>
        </div>
      </div>
    </div>
    <div class="quote-card">
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div class="profile-wrapper">
        <div class="profile-image">
          <img src="images/testimonials/story1.jpg" alt="Satish Patel" />
        </div>
        <div class="profile-content">
          <h5>Satish Patel</h5>
          <h6>Founder & CEO, Huddle</h6>
        </div>
      </div>
    </div>
    <div class="quote-card">
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div class="profile-wrapper">
        <div class="profile-image">
          <img src="images/testimonials/story1.jpg" alt="Satish Patel" />
        </div>
        <div class="profile-content">
          <h5>Satish Patel</h5>
          <h6>Founder & CEO, Huddle</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
/* Quotes */

#quotes {
  margin-top: 72px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 35px;
  color: #fff;
}

#quotes .quote-card {
  padding: 24px;
  background-color: hsl(219, 30%, 18%);
}

#quotes .quote-card p {
  margin-bottom: 12px;
}

#quotes .quote-card .profile-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
}

#quotes .quote-card .profile-image {
  width: 48px;
  height: 48px;
  border-radius: 999px;
  overflow: hidden;
}

#quotes .quote-card h6 {
  font-size: 12px;
  opacity: 0.75;
  margin-top: 4px;
}
</style>
