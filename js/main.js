
const swiper1 = new Swiper('.swiper1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 80,
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    dynamicMainBullets: 1,
   
    breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
       
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
			},
			
		}
    
  });
const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 80,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    dynamicMainBullets: 1,
   
    breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
       
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
			},
		}
});
const swiperComputers1 = new Swiper('.swiper__computers1', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 80,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    dynamicMainBullets: 1,
   
    breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
       
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
			},
		}
});
const swiperComputers2 = new Swiper('.feedback__swiper-computers', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 80,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    dynamicMainBullets: 1,
   
    breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
       
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
			},
		}
});
const swiperComputers3 = new Swiper('.feedback__swiper-computers1', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 80,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  dynamicMainBullets: 1,
 
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }, 
     
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }, 
    },
  }
});
const swiperComputers4 = new Swiper('.feedback__swiper-computers3', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 80,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    dynamicMainBullets: 1,
   
    breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
       
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
			},
		}
});
const swiperComputers5 = new Swiper('.feedback__swiper-computers4', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    spaceBetween: 80,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    dynamicMainBullets: 1,
   
    breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
       
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, 
			},
		}
});




let accordionClick = document.querySelectorAll('.support__item');
accordionClick.forEach(elem => {
    elem.addEventListener('click', function(e) {
      e.preventDefault();
      if(elem.querySelector('.support__item-text')) {
        let text = elem.querySelector('.support__item-text');
        text.classList.toggle('active');
      }
      if(elem.querySelector('.support__item-textblock')) {
        let textBox = elem.querySelector('.support__item-textblock');
        let text1 = textBox.querySelector('.support__item-text');
        textBox.classList.toggle('active');
        text1.classList.toggle('active');
      }
      
      elem.classList.toggle('active');
      
    
      if(document.querySelector('.support__item-arrow')) {
        let arrow = elem.querySelector('.support__item-arrow');
        arrow.classList.toggle('active')
      }
     
      if(document.querySelector('.faqs__item-title')) {
        let faqTitle = elem.querySelector('.faqs__item-title');
        faqTitle.classList.toggle('active')
      }
    })
})


// todo ============================= Открытие меню ================================
const nav__linkBtn = document.querySelector('.burger');
const menu = document.querySelector('.burger__menu');
if (nav__linkBtn) {
	nav__linkBtn.addEventListener('click', function (e) {
		e.preventDefault();
		
		nav__linkBtn.classList.toggle('active');
		menu.classList.toggle('active');
		
	})
	document.querySelector('body').addEventListener('click', function (event) { 
		
		if (!event.target.closest('.burger__menu') && (!event.target.closest('.burger'))) {
			closeMenu();
     
		}
	});
	function closeMenu() {	
    // nav__linkBtn.nextElementSibling.classList.remove('active');	
		menu.classList.remove('active')
		nav__linkBtn.classList.remove('active');
	}
}
// todo ============================= Открытие меню ================================

