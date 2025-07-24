 // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    }); 

 document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".heroSwiper", {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            bulletClass: 'custom-bullet', 
            bulletActiveClass: 'custom-bullet-active',
        },
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        speed: 800,
    });

    const paginationBullets = document.querySelectorAll('.custom-bullet');
    paginationBullets.forEach(bullet => {
        bullet.style.backgroundColor = '#00000040';
        bullet.style.width = '8px';
        bullet.style.height = '8px';
        bullet.style.display = 'inline-block';
        bullet.style.margin = '0 4px';
        bullet.style.borderRadius = '50%';
    });

    function updateActiveBulletColor() {
        const activeBullet = document.querySelector('.custom-bullet-active');
        if (activeBullet) {
            activeBullet.style.backgroundColor = '#000';
        }
        paginationBullets.forEach(bullet => {
            if (!bullet.classList.contains('custom-bullet-active')) {
                bullet.style.backgroundColor = '#00000040';
            }
        });
    }

    updateActiveBulletColor();
     swiper.on('slideChange', updateActiveBulletColor);
     

 });


  // Category filtering functionality
      const filterBtns = document.querySelectorAll(".filter-btn");
      const productCards = document.querySelectorAll(".product-card");

      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active state from all buttons
          filterBtns.forEach((b) => {
            b.classList.remove("font-bold");
            b.classList.add("font-normal");
          });

          // Add active state to clicked button
          btn.classList.remove("font-normal");
          btn.classList.add("font-bold");

          const category = btn.getAttribute("data-category");

          // Filter products with animation
          productCards.forEach((card) => {
            if (
              category === "all" ||
              card.getAttribute("data-category") === category
            ) {
              card.style.display = "block";
              card.classList.remove("hidden");
              // Add fade in animation
              card.style.opacity = "0";
              setTimeout(() => {
                card.style.opacity = "1";
              }, 50);
            } else {
              card.style.opacity = "0";
              setTimeout(() => {
                card.style.display = "none";
                card.classList.add("hidden");
              }, 200);
            }
          });
        });
      });

      // Set 'All' as active by default
      document.addEventListener("DOMContentLoaded", () => {
        filterBtns[0].classList.remove("font-normal");
        filterBtns[0].classList.add("font-bold");
      });

      // Store button functionality with improved feedback
      document.querySelectorAll(".product-card button").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const productCard = e.target.closest(".product-card");
          const productName = productCard
            .querySelector("h3")
            .textContent.trim();
          const productPrice = productCard
            .querySelector(".font-bold")
            .textContent.trim();

          // Visual feedback
          btn.style.transform = "scale(0.95)";
          setTimeout(() => {
            btn.style.transform = "scale(1)";
          }, 150);
        });
      });

      // Add smooth transitions for opacity changes
      productCards.forEach((card) => {
        card.style.transition =
          "opacity 0.3s ease-in-out, transform 0.3s ease-in-out";
      });

      // Category filter functionality
      const categoryBtns = document.querySelectorAll(".category-btn");

      categoryBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active state from all buttons
          categoryBtns.forEach((b) => {
            b.classList.remove("bg-navy", "text-white");
            b.classList.add("border", "border-gray-300", "text-gray-600");
          });

          // Add active state to clicked button
          btn.classList.remove("border", "border-gray-300", "text-gray-600");
          btn.classList.add("bg-navy", "text-white");
        });
      });


      // Product carousel functionality for Last Section
let lastSectionCurrentPage = 0;
const lastSectionProductsContainer = document.getElementById("lastSectionProductsContainer");
const lastSectionProductCards = document.querySelectorAll(".last-section-product-card");
const productsPerPage = 4;
const totalPages = Math.ceil(lastSectionProductCards.length / productsPerPage);

function updateLastSectionCarousel() {
    const translateX = lastSectionCurrentPage * -100;
    lastSectionProductsContainer.style.transform = `translateX(${translateX}%)`;

}

// Initialize carousel
updateLastSectionCarousel();

// Add to cart functionality for Last Section
const lastSectionAddToBtns = document.querySelectorAll(".last-section-product-card button");

lastSectionAddToBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const productName = btn
            .closest(".last-section-product-card")
            .querySelector("h3").textContent;

        // Add visual feedback
        btn.textContent = "Added!";
        btn.classList.add("bg-green-500", "text-white");
        btn.classList.remove("bg-[#D4DCFB]", "text-black");

        setTimeout(() => {
            btn.textContent = "Add to";
            btn.classList.remove("bg-green-500", "text-white");
            btn.classList.add("bg-[#D4DCFB]", "text-black");
        }, 1500);

        console.log(`Added ${productName} to cart`);
    });
});

// Recommended For You section filtering
if (document.querySelectorAll('.last-section-category-btn').length) {
  document.querySelectorAll('.last-section-category-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      // Remove active styles from all buttons
      document.querySelectorAll('.last-section-category-btn').forEach(b => {
        b.classList.remove('bg-[#202A6C]', 'text-white');
        b.classList.add('border', 'border-gray-300', 'text-[#8A8A8A]');
      });
      // Add active style to clicked button
      this.classList.add('bg-[#202A6C]', 'text-white');
      this.classList.remove('border', 'border-gray-300', 'text-[#8A8A8A]');
      const selectedCategory = this.getAttribute('data-category');
      document.querySelectorAll('.last-section-product-card').forEach(card => {
        if (selectedCategory === 'all' || card.getAttribute('data-category') === selectedCategory) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// New Products Swiper
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, checking for new products swiper...');
  
  // Wait for Swiper to be available
  function initNewProductsSwiper() {
    if (typeof Swiper === 'undefined') {
      console.log('Swiper not loaded yet, retrying...');
      setTimeout(initNewProductsSwiper, 200);
      return;
    }
    
    const newProductsContainer = document.querySelector('.new-products-swiper');
    const nextBtn = document.querySelector('#newProductsNextBtn');
    const prevBtn = document.querySelector('#newProductsPrevBtn');
    
    if (!newProductsContainer) {
      console.log('New products container not found');
      return;
    }
    
    if (!nextBtn || !prevBtn) {
      console.log('Navigation buttons not found');
      return;
    }
    
    console.log('Initializing new products swiper...');
    
    try {
      // Initialize new products swiper
      const newProductsSwiper = new Swiper('.new-products-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: '#newProductsNextBtn',
          prevEl: '#newProductsPrevBtn',
        },
      });

      // Add manual event listeners as backup
      nextBtn.addEventListener('click', function(e) {
        console.log('New products next button clicked manually');
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
        newProductsSwiper.slideNext();
      });
      
      prevBtn.addEventListener('click', function(e) {
        console.log('New products prev button clicked manually');
        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
        newProductsSwiper.slidePrev();
      });

      // Category filter functionality for New Products
      const filterBtns = document.querySelectorAll('.filter-btn');
      
      // Save original swiper structure and all cards
      let originalSwiperStructure = null;
      let allOriginalCards = [];
      let originalCardsData = []; // Store card data for restoration
      
      filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          const category = this.getAttribute('data-category');
          console.log('Filtering by category:', category);
          
          // Remove active state from all filter buttons
          filterBtns.forEach(b => {
            b.classList.remove('font-bold', 'border-b-2', 'border-[#202A6C]');
            b.classList.add('font-normal');
          });
          
          // Add active state to clicked button
          this.classList.remove('font-normal');
          this.classList.add('font-bold', 'border-b-2', 'border-[#202A6C]');
          
          const swiperContainer = document.querySelector('.new-products-swiper .swiper-wrapper');
          
          if (category === 'all') {
            // Restore original structure if saved
            if (originalSwiperStructure && originalCardsData.length > 0) {
              // Rebuild the original structure from saved data
              swiperContainer.innerHTML = '';
              
              // Recreate slides with original cards (4 per slide)
              for (let i = 0; i < originalCardsData.length; i += 4) {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                
                const grid = document.createElement('div');
                grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
                
                // Add up to 4 cards to this slide
                for (let j = i; j < Math.min(i + 4, originalCardsData.length); j++) {
                  const cardData = originalCardsData[j];
                  const cardClone = cardData.cloneNode(true);
                  cardClone.style.display = '';
                  cardClone.style.opacity = '1';
                  
                  // Reattach add to cart functionality
                  const addToCartBtn = cardClone.querySelector('button');
                  if (addToCartBtn) {
                    addToCartBtn.addEventListener('click', function(e) {
                      e.preventDefault();
                      
                      const card = this.closest('.product-card');
                      // const productName = card.querySelector('h3').textContent.trim();
                      // const productPrice = card.querySelector('.text-sm.font-bold').textContent.trim();
                      
                      // Add visual feedback
                      this.style.transform = 'scale(0.95)';
                      setTimeout(() => {
                        this.style.transform = 'scale(1)';
                      }, 150);
                    });
                  }
                  
                  grid.appendChild(cardClone);
                }
                
                slide.appendChild(grid);
                swiperContainer.appendChild(slide);
              }
              
              newProductsSwiper.update();
              newProductsSwiper.slideTo(0);
              console.log('Restored original structure for "all" category');
              
              // Force swiper to recalculate after restoration
              setTimeout(() => {
                try {
                  newProductsSwiper.update();
                  console.log('Swiper recalculated after restoration');
                } catch (error) {
                  console.error('Error updating swiper after restoration:', error);
                }
              }, 200);
            }
          } else {
            // Save original structure and cards if not saved yet
            if (!originalSwiperStructure) {
              originalSwiperStructure = swiperContainer.innerHTML;
              allOriginalCards = Array.from(document.querySelectorAll('.new-products-swiper .product-card'));
              
              // Store deep clones of original cards for restoration
              originalCardsData = allOriginalCards.map(card => card.cloneNode(true));
              
              console.log('Saved original structure with', allOriginalCards.length, 'cards');
            }
            
            // Filter cards by category from the original cards
            const filteredCards = allOriginalCards.filter(card => {
              const cardCategory = card.getAttribute('data-category');
              return cardCategory === category;
            });
            
            console.log(`Found ${filteredCards.length} cards for category: ${category}`);
            
            // Restructure swiper to show filtered cards in new slides
            // Clear existing slides
            swiperContainer.innerHTML = '';
            
            // Create new slides with filtered cards (4 per slide)
            for (let i = 0; i < filteredCards.length; i += 4) {
              const slide = document.createElement('div');
              slide.className = 'swiper-slide';
              
              const grid = document.createElement('div');
              grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8';
              
              // Add up to 4 cards to this slide
              for (let j = i; j < Math.min(i + 4, filteredCards.length); j++) {
                const cardClone = filteredCards[j].cloneNode(true);
                cardClone.style.display = '';
                cardClone.style.opacity = '1';
                
                // Reattach add to cart functionality to cloned cards
                const addToCartBtn = cardClone.querySelector('button');
                if (addToCartBtn) {
                  addToCartBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const card = this.closest('.product-card');
                    // const productName = card.querySelector('h3').textContent.trim();
                    // const productPrice = card.querySelector('.text-sm.font-bold').textContent.trim();
                    
                    // Add visual feedback
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                      this.style.transform = 'scale(1)';
                    }, 150);
                  });
                }
                
                grid.appendChild(cardClone);
              }
              
              slide.appendChild(grid);
              swiperContainer.appendChild(slide);
            }
            
            // Update swiper
            newProductsSwiper.update();
            newProductsSwiper.slideTo(0);
          }
          
          // Update swiper after filtering with better timing
          setTimeout(() => {
            try {
              newProductsSwiper.update();
              console.log('Swiper updated successfully for category:', category);
            } catch (error) {
              console.error('Error updating swiper:', error);
            }
          }, 150);
        });
      });

      console.log('New products swiper setup completed');

    } catch (error) {
      console.error('Error initializing new products swiper:', error);
    }
  }
  
  // Start initialization with a small delay to ensure everything is loaded
  setTimeout(initNewProductsSwiper, 100);
});

// Testimonial Swiper
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, checking for testimonial swiper...');
  
  // Wait for Swiper to be available
  function initTestimonialSwiper() {
    if (typeof Swiper === 'undefined') {
      console.log('Swiper not loaded yet, retrying...');
      setTimeout(initTestimonialSwiper, 100);
      return;
    }
    
    const testimonialContainer = document.querySelector('.testimonial-swiper');
    const imageContainer = document.querySelector('.testimonial-image-swiper');
    
    try {
      // Initialize testimonial text swiper
      const testimonialSwiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        allowTouchMove: true,
        touchRatio: 1,
        speed: 300,
        navigation: {
          nextEl: '.testimonial-next-btn',
          prevEl: '.testimonial-prev-btn',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
            allowTouchMove: true,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
            allowTouchMove: true,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
            allowTouchMove: true,
          }
        }
      });

      // Initialize image swiper
      const imageSwiper = new Swiper('.testimonial-image-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          }
        }
      });

      // Synchronize swipers
      testimonialSwiper.on('slideChange', function () {
        console.log('Testimonial slide changed to:', testimonialSwiper.realIndex);
        imageSwiper.slideTo(testimonialSwiper.realIndex);
      });

      imageSwiper.on('slideChange', function () {
        console.log('Image slide changed to:', imageSwiper.realIndex);
        testimonialSwiper.slideTo(imageSwiper.realIndex);
      });

      // Remove manual event listeners since Swiper handles navigation automatically
      // The navigation buttons are already configured in the Swiper options
      console.log('Testimonial swiper navigation configured automatically');

      // Add touch/swipe support for mobile
      testimonialSwiper.on('touchStart', function() {
        console.log('Touch started');
      });

      testimonialSwiper.on('touchEnd', function() {
        console.log('Touch ended, current slide:', testimonialSwiper.activeIndex);
      });

      // Log initial state
      console.log('Testimonial swiper initialized with', testimonialSwiper.slides.length, 'slides');
      console.log('Current active slide:', testimonialSwiper.activeIndex);

      // Force swiper to update on window resize
      window.addEventListener('resize', function() {
        testimonialSwiper.update();
        imageSwiper.update();
      });

      // Force initial update after a short delay
      setTimeout(() => {
        testimonialSwiper.update();
        imageSwiper.update();
        console.log('Swiper updated after delay');
      }, 500);

    } catch (error) {
      console.error('Error initializing testimonial swiper:', error);
    }
  }
  
  // Start initialization
  initTestimonialSwiper();
});