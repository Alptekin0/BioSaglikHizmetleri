document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobileMenu");
  const mobileMenuPanel = document.querySelector(".mobileMenuPanel");
  const xMarkButton = document.querySelector(".x-markButton");
  const scrollIndicator = document.getElementById("scrollIndicator");


  /* menu açma tusu */
  mobileMenuButton.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenuPanel.classList.toggle("hidden");  //hidden varsa çıkar, yoksa ekle.
  });

  /* menu kapatma tusu */
  xMarkButton.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenuPanel.classList.toggle("hidden");
  });

  /* menudeki ogelerden birine tıklayınca menuyu kapat */
  document.querySelectorAll(".mobileMenuPanel .pages a").forEach((link) =>
    link.addEventListener("click", () => {
      mobileMenuPanel.classList.toggle("hidden");

    })
  );


  // Menü dışına tıklanınca kapatma
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = mobileMenuPanel.contains(e.target);
    const isClickOnButton = mobileMenuButton.contains(e.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      mobileMenuPanel.classList.add('hidden');
    }
  });

  /* scroll indicator uyarısı çıkış zamanları */
  setTimeout(() => {
    scrollIndicator.classList.toggle("hidden");
  }, 4000);

  setTimeout(() => {
    scrollIndicator.classList.toggle("hidden");
  }, 5000);

});


/* scroll aşağı kaydıkça navbarı gizle */

let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Aşağı kaydırıyor → header gizle
    header.style.transform = "translateY(-100%)";
  } else {
    // Yukarı kaydırıyor → header göster
    header.style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});




/* ÜRÜNLER SAYFASI GEÇİŞLERİ*/

const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalSlides = slider.children.length;

function updateSlider() {
  const slideWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener('resize', updateSlider);