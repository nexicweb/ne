/* =============================================
   WebVault — Premium Website Marketplace
   app.js — Frontend Logic
   ============================================= */

'use strict';

// ============================================================
// 👉 ADD NEW WEBSITE HERE — Just add a new object to this array
// Each card is AUTO GENERATED from this data — no HTML needed
// ============================================================
const WEBSITES = [
  

{
    id: "w18",
    title: "AETHER. ",
    image: "image/land4.png",
    description: "A bold design agency showcase with animated transitions, project grid, and contact flow.",
    link: "https://bank-wealth.netlify.app/",
    category: "agency",
   prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },

 
  {
    id: "w2",
    title: "Ride Light",
    image: "image/cyclex.png",
    description: "Precision-engineered bicycles for riders who refuse to compromise. Where aerospace materials meet uncompromising design.",
    link: "https://cycle-x-xcycle.netlify.app/",
    category: "ecommerce",
    

    prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]



  },
  {
    id: "w3",
    title: "CELLO",
    image: "cello.png",
    description: "Experience crystal clear sound with our premium noise-canceling headphones. Limited stock available..",
    link: "https://splendorous-malasada-f57728.netlify.app/",
    category: "ecommerce",
   prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]


  },
  {
    id: "w4",
    title: "Architectural Nature",
    image: "image/aethel.png",
    description: "Curating rare botanical specimens housed in museum-grade frosted glass domes. Where high-end design meets organic life..",
    link: "https://aethel-plant.netlify.app/",
    category: "ecommerce",
prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },
  {
    id: "w5",
    title: "SKYFORGE",
    image: "image/land1.png",
    description: "Advanced AI-powered drone systems engineered for cinematic aerial precision, military-grade stability, and absolute dominance.",
    link: "https://fancy-quokka-86f604.netlify.app/",
    category: "landing",
   prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },

{
    id: "w6",
    title: "CYBERELITE",
    image: "image/land2.png",
    description: "Deploy the exact $50M cyberpunk architecture used by top 1% agencies.",
    link: "https://moonlit-cupcake-a44c3e.netlify.app/",
    category: "landing",
  prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },


{
    id: "w7",
    title: "MAX CAR",
    image: "image/land3.png",
    description: "We offer elite-level custom automotive painting with futuristic precision and cinematic quality.",
    link: "https://guileless-biscotti-ecadd4.netlify.app/",
    category: "landing",
    prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },


  {
    id: "w8",
    title: "Lumière",
    image: "image/lumiere.png",
    description: "A premium digital agency website with case studies, service pages, and client testimonials.",
    link: "https://lumiere-fashion.netlify.app/",
    category: "ecommerce",
     prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },
  
 {
    id: "w9",
    title: "Visual Architecture",
    image: "image/saas1.png",
    description: "A crypto dashboard with live price feeds, portfolio tracker, and wallet management UI.",
    link: "https://art-demo-saas.netlify.app/",
    category: "free",
    prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },
{
    id: "w10",
    title: "Educational site",
    image: "image/rajsahischool.png",
    description: "Rajshahi Model Academy | Excellence in Education",
    link: "https://rajsahi-model.netlify.app/ ",
    category: "agency",
    prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },
{
    id: "w11",
    title: "NEX US SAAS",
    image: "image/saas2.png",
    description: "Explore deep structural insights framing technology, design systems, next-generation engineering, and modern creative workflows.",
    link: "https://reliable-paletas-393245.netlify.app/ ",
    category: "free",
     prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },



  {
    id: "w12",
    title: "GRAPHIC DESIGNER",
    image: "image/gra[hic.png",
    description: "A freelancer portfolio + booking platform with integrated scheduling and client dashboard.",
    link: "https://benjam-photo.netlify.app/",
    category: "portfolio",
   prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },
  

  {
    id: "w13",
    title: "DESIGNER ",
    image: "image/designer.png",
    description: "A freelancer portfolio + booking platform with integrated scheduling and client dashboard.",
    link: "https://unrivaled-cajeta-e836e7.netlify.app/",
    category: "portfolio",
 prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },




  
   {
    id: "w14",
    title: "FASHION DESIGNER",
    image: "image/fashiondesigner.png",
    description: "Designing digital ecosystems that merge luxury aesthetics with relentless functional precision..",
    link: "https://cheerful-yeot-50cc89.netlify.app/",
    category: "portfolio",
 prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },


 {
    id: "w15",
    title: "PORTFOLIO ",
    image: "image/portfolio.png",
    description: "A freelancer portfolio + booking platform with integrated scheduling and client dashboard.",
    link: "https://radiant-narwhal-7ea9f7.netlify.app/",
    category: "portfolio",
 prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },


 {
    id: "w16",
    title: "K. VANCE.",
    image: "image/editor.png",
    description: "Crafting high-end visual narratives for luxury brands, major music labels.",
    link: "https://delightful-cuchufli-49fd02.netlify.app/",
    category: "portfolio",
 prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },

  {
    id: "w17",
    title: "Agency",
    image: "image/indonisia.png",
    description: "A cloud storage SaaS UI with file manager, team sharing, usage stats, and subscription tiers.",
    link: "https://indonisiya-travel.netlify.app/",
    category: "agency",
   prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },
 
  



  {
    id: "w22",
    title: "  NIKE STORE",
    image: "image/aura.png",
    description: "A wellness editorial blog with beautiful typography, dark mode, and newsletter subscription.",
    link: "https://developertahmid.github.io/website2/",
    category: "Free",
    prices: [
     "ecomerce"
]
  },

 
  {
    id: "w19",
    title: "farera.",
    image: "image/blog.png",
    description: "A wellness editorial blog with beautiful typography, dark mode, and newsletter subscription.",
    link: "https://cool-mooncake-7ee852.netlify.app/",
    category: "Free",
   prices: [
      
]
  },
  
 {
    id: "w20",
    title: "Aura SAAS",
    image: "image/blog2.png",
    description: "A wellness editorial blog with beautiful typography, dark mode, and newsletter subscription.",
    link: "https://deluxe-liger-45bfdb.netlify.app/",
    category: "Free",
    prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },

{
    id: "w21",
    title: "NEXUS. SAAS",
    image: "image/saas4.png",
    description: "A wellness editorial blog with beautiful typography, dark mode, and newsletter subscription.",
    link: "https://courageous-smakager-3a40f4.netlify.app/",
    category: "Free",
    prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },



  
{
    id: "w23",
    title: "AURA. SAAS",
    image: "image/blog5.png",
    description: "A wellness editorial blog with beautiful typography, dark mode, and newsletter subscription.",
    link: "https://classy-starship-5e2570.netlify.app/",
    category: "free",
    prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },

  {
    id: "w24",
    title: "NEXIC.SAAS",
    image: "image/service.png",
    description: "An online learning platform with course catalog, video player, progress tracking, and quizzes.",
    link: "https://service-slass.netlify.app/",
    category: "Free",
    prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },

  {
    id: "w25",
    title: "NEXUS SAAS",
    image: "image/saas3.png",
    description: "An online learning platform with course catalog, video player, progress tracking, and quizzes.",
    link: "https://harmonious-zuccutto-d2736b.netlify.app/",
    category: "Free",
  prices: [
      "Basic - ৳2000",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },

  {
    id: "w26",
    title: "DIGITAL SAAS",
    image: "image/blog4.png",
    description: "An online learning platform with course catalog, video player, progress tracking, and quizzes.",
    link: "https://stalwart-puppy-eb0c3d.netlify.app/",
    category: "Free",
     prices: [
      "Basic - 100",
      "Pro - ৳5000",
      "Elite - ৳9000"
]
  },
  

  


  // 👉 ADD NEW WEBSITE HERE — Copy this object and fill in the details:
  // {
  //   id: "w16",
  //   title: "Your Website Name",
  //   image: "path/to/your/image.jpg",  // 👉 CHANGE IMAGE HERE
  //   description: "Short description of the website.",
  //   link: "https://yourwebsite.com",  // 👉 ADD WEBSITE LINK HERE
  //   category: "ecommerce", // options: ecommerce, saas, portfolio, blog, landing, agency
  //   price: "৳X,XXX"
  // },
];

// ============================================================
// CONFIG
// ============================================================
const PER_PAGE = 9; // 👉 CHANGE cards per page here
const WHATSAPP_NUMBER = "01783199814"; // 👉 CHANGE WhatsApp number here

// ============================================================
// STATE
// ============================================================
let currentPage = 1;
let activeFilter = "all";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("webvault_cart") || "[]");

// ============================================================
// UTILITY FUNCTIONS
// ============================================================
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => { toast.className = "toast"; }, 3000);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (badge) badge.textContent = cart.length;
}

function saveCart() {
  localStorage.setItem("webvault_cart", JSON.stringify(cart));
  updateCartBadge();
}

// ============================================================
// FILTER LOGIC
// ============================================================
function getFilteredWebsites() {
  return WEBSITES.filter(w => {
    const matchesFilter = activeFilter === "all" || w.category === activeFilter;
    const matchesSearch = w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          w.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
}

// ============================================================
// CARD RENDERER — Auto generates cards from WEBSITES array
// ============================================================
function createCard(website, index) {
  const isInCart = cart.some(c => c.id === website.id);
  const card = document.createElement("div");
  card.className = "website-card";
  card.style.animationDelay = `${index * 0.06}s`;

  card.innerHTML = `
    <div class="card-img-wrapper">
      ${website.image
        ? `<img class="card-img" src="${website.image}" alt="${website.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
        : ''}
      <div class="card-img-placeholder" style="${website.image ? 'display:none' : ''}">🌐</div>
      <span class="card-category">${website.category}</span>
      <div class="card-overlay">
        <!-- 👉 ADD WEBSITE LINK HERE — controlled by website.link in the data array above -->
        <a href="${website.link}" target="_blank" rel="noopener noreferrer" class="overlay-preview-btn">
          <i class="fas fa-eye"></i> Preview
        </a>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${website.title}</h3>
      <p class="card-desc">${website.description}</p>
      <div class="card-actions">


<div class="price-slider">

  ${website.prices?.map(price => `
  
    <div class="price-item">
      ${price}
    </div>

  `).join("") || ""}

</div>


        <!-- 👉 CHANGE LINK HERE — change website.link in data array -->
        <a href="${website.link}" target="_blank" rel="noopener noreferrer" class="card-overview-btn">
          Overview <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
        <button class="card-cart-btn ${isInCart ? 'added' : ''}" data-id="${website.id}" title="${isInCart ? 'In cart' : 'Add to cart'}">
          <i class="fas ${isInCart ? 'fa-check' : 'fa-bag-shopping'}"></i>
        </button>
      </div>
    </div>
  `;

  // Cart button event
  card.querySelector(".card-cart-btn").addEventListener("click", () => addToCart(website.id));
  return card;
}

// ============================================================
// RENDER WEBSITES + PAGINATION
// ============================================================
function renderWebsites() {
  const grid = document.getElementById("websites-grid");
  const filtered = getFilteredWebsites();
  const totalPages = Math.ceil(filtered.length / PER_PAGE);

  // Clamp page
  if (currentPage > totalPages) currentPage = Math.max(1, totalPages);

  const start = (currentPage - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  grid.innerHTML = "";

  if (pageItems.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>No websites found</h3>
        <p>Try a different search term or category filter.</p>
      </div>`;
  } else {
    pageItems.forEach((w, i) => grid.appendChild(createCard(w, i)));
  }

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const pag = document.getElementById("pagination");
  pag.innerHTML = "";
  if (totalPages <= 1) return;

  const createBtn = (label, page, disabled = false, active = false) => {
    const btn = document.createElement("button");
    btn.className = `page-btn${active ? " active" : ""}`;
    btn.innerHTML = label;
    btn.disabled = disabled;
    if (!disabled && !active) btn.addEventListener("click", () => {
      currentPage = page;
      renderWebsites();
      document.getElementById("websites").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    return btn;
  };

  pag.appendChild(createBtn('<i class="fas fa-chevron-left"></i>', currentPage - 1, currentPage === 1));

  for (let i = 1; i <= totalPages; i++) {
    if (totalPages > 7 && (i > 2 && i < totalPages - 1 && Math.abs(i - currentPage) > 1)) {
      if (i === 3 || i === totalPages - 2) {
        const dots = document.createElement("span");
        dots.textContent = "…";
        dots.style.cssText = "color:var(--text3);padding:0 0.3rem;align-self:center;";
        pag.appendChild(dots);
      }
      continue;
    }
    pag.appendChild(createBtn(i, i, false, i === currentPage));
  }

  pag.appendChild(createBtn('<i class="fas fa-chevron-right"></i>', currentPage + 1, currentPage === totalPages));
}

// ============================================================
// CART SYSTEM
// ============================================================
function addToCart(id) {
  const website = WEBSITES.find(w => w.id === id);
  if (!website) return;

  if (cart.some(c => c.id === id)) {
    showToast(`"${website.title}" is already in your cart`, "error");
    return;
  }

  cart.push({ id: website.id, title: website.title, image: website.image, link: website.link, category: website.category });
  saveCart();
  renderWebsites(); // refresh cards to show added state
  renderCartItems();
  showToast(`✓ "${website.title}" added to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  renderCartItems();
  renderWebsites();
  showToast("Item removed from cart");
}

function renderCartItems() {
  const container = document.getElementById("cart-items");
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <i class="fas fa-bag-shopping"></i>
        <p>Your cart is empty.<br/>Add some websites to get started.</p>
      </div>`;
    return;
  }

  container.innerHTML = "";
  cart.forEach(item => {
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      ${item.image
        ? `<img class="cart-item-img" src="${item.image}" alt="${item.title}" onerror="this.style.display='none'">`
        : `<div class="cart-item-img" style="display:flex;align-items:center;justify-content:center;font-size:1.4rem;">🌐</div>`}
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <span>${item.category}</span>
      </div>
      <button class="remove-item" data-id="${item.id}" title="Remove"><i class="fas fa-trash-can"></i></button>
    `;
    el.querySelector(".remove-item").addEventListener("click", () => removeFromCart(item.id));
    container.appendChild(el);
  });
}

function openCart() {
  renderCartItems();
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

// WhatsApp checkout
function checkout() {
  if (cart.length === 0) { showToast("Your cart is empty!", "error"); return; }
  const itemList = cart.map(c => `• ${c.title} → ${c.link}`).join("%0A");
  const msg = `I want to buy:%0A%0A${itemList}%0A%0APlease assist me with the purchase.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  window.open(url, "_blank");
}

// Membership buy
function buyMembership(plan) {
  const msg = `I want to subscribe to the WebVault ${plan}. Please provide payment details.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}
window.buyMembership = buyMembership;

// ============================================================
// SEARCH
// ============================================================
function initSearch() {
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search");

  input.addEventListener("input", () => {
    searchQuery = input.value.trim();
    clearBtn.classList.toggle("visible", searchQuery.length > 0);
    currentPage = 1;
    renderWebsites();
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    searchQuery = "";
    clearBtn.classList.remove("visible");
    currentPage = 1;
    renderWebsites();
    input.focus();
  });
}

// ============================================================
// FILTER TABS
// ============================================================
function initFilters() {
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeFilter = tab.dataset.filter;
      currentPage = 1;
      renderWebsites();
    });
  });
}

// ============================================================
// AUTH MODAL
// ============================================================
function initAuth() {
  const overlay = document.getElementById("auth-overlay");
  const openBtn = document.getElementById("open-auth");
  const closeBtn = document.getElementById("close-auth");
  const tabLogin = document.getElementById("tab-login");
  const tabSignup = document.getElementById("tab-signup");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const goSignup = document.getElementById("go-signup");
  const goLogin = document.getElementById("go-login");

  const openModal = () => { overlay.classList.add("open"); document.body.style.overflow = "hidden"; };
  const closeModal = () => { overlay.classList.remove("open"); document.body.style.overflow = ""; };

  openBtn.addEventListener("click", (e) => { e.preventDefault(); openModal(); });
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });

  function switchTab(tab) {
    tabLogin.classList.toggle("active", tab === "login");
    tabSignup.classList.toggle("active", tab === "signup");
    loginForm.classList.toggle("hidden", tab !== "login");
    signupForm.classList.toggle("hidden", tab !== "signup");
  }

  tabLogin.addEventListener("click", () => switchTab("login"));
  tabSignup.addEventListener("click", () => switchTab("signup"));
  if (goSignup) goSignup.addEventListener("click", (e) => { e.preventDefault(); switchTab("signup"); });
  if (goLogin) goLogin.addEventListener("click", (e) => { e.preventDefault(); switchTab("login"); });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // 👉 CONNECT TO BACKEND AUTH — replace with real API call
    // Example: POST /api/auth/login { email, password }
    const btn = loginForm.querySelector(".auth-submit");
    btn.textContent = "Logging in...";
    setTimeout(() => {
      showToast("✓ Logged in successfully!");
      closeModal();
      document.getElementById("open-auth").textContent = "My Account";
      btn.textContent = "Login to WebVault";
    }, 1200);
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // 👉 CONNECT TO BACKEND AUTH — replace with real API call
    // Example: POST /api/auth/signup { name, email, password }
    const btn = signupForm.querySelector(".auth-submit");
    btn.textContent = "Creating account...";
    setTimeout(() => {
      showToast("✓ Account created! Welcome to WebVault!");
      closeModal();
      document.getElementById("open-auth").textContent = "My Account";
      btn.textContent = "Create Account";
    }, 1200);
  });
}

// ============================================================
// NAVBAR — Scroll effect + hamburger
// ============================================================
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 60);
  });

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.innerHTML = navLinks.classList.contains("open")
      ? '<i class="fas fa-xmark"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Close on link click
  document.querySelectorAll(".nav-link:not(.btn-login):not(.cart-btn)").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
    });
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }, { passive: true });
}

// ============================================================
// COUNTER ANIMATION (hero stats)
// ============================================================
function animateCounters() {
  const counters = document.querySelectorAll(".stat-num");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const duration = 1500;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current.toLocaleString();
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ============================================================
// CART EVENTS
// ============================================================
function initCartEvents() {
  document.getElementById("nav-cart-btn").addEventListener("click", (e) => { e.preventDefault(); openCart(); });
  document.getElementById("close-cart").addEventListener("click", closeCart);
  document.getElementById("cart-overlay").addEventListener("click", closeCart);
  document.getElementById("checkout-btn").addEventListener("click", checkout);
  document.getElementById("clear-cart-btn").addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCartItems();
    renderWebsites();
    showToast("Cart cleared");
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderWebsites();
  initSearch();
  initFilters();
  initAuth();
  initNavbar();
  initCartEvents();
  animateCounters();
  updateCartBadge();
});






///


document.querySelectorAll(".price-item").forEach(item => {
  item.addEventListener("click", () => {

    item.parentElement
      .querySelectorAll(".price-item")
      .forEach(el => el.classList.remove("active"));

    item.classList.add("active");

  });
});


//// 




