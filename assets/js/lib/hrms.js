// Specific configuration for .cust-candidatereview slider
$(".cust-candidatereview").owlCarousel({
    loop: false, // Prevent looping when items are fewer
    rewind: true, // Allow navigation even when items are fewer
    margin: 10,
    nav: true,
    dots: false,
    drag: false,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
        1200: { items: 5 }
    }
});

$(".owl-carousel:not(.cust-candidatereview)").owlCarousel({
  loop: true,
  margin: 20,
  dots: false,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1400: {
      items: 4, // Default configuration for other sliders
    },
  },
});
