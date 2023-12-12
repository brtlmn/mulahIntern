new Vue({
    el: '#app',
    data: {
      points: '60',
      mobileNumber: ''
    },
    methods: {
      redirectToRegistration() {
        // Add logic to redirect to the registration page
        window.location.href = 'registration.html';
      }
    },
  });
  