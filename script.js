const links = [...document.querySelectorAll(".nav a")];
const page = document.body.dataset.page;
const menuToggle = document.querySelector(".menu-toggle");
const navModal = document.querySelector("#site-menu");
const closeMenuButtons = document.querySelectorAll("[data-close-menu]");

links.forEach((link) => {
  link.classList.toggle("active", link.dataset.page === page);
});

const closeMenu = () => {
  if (!navModal || navModal.hidden) return;

  navModal.classList.add("is-closing");
  navModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
  menuToggle?.setAttribute("aria-expanded", "false");

  setTimeout(() => {
    navModal.hidden = true;
    navModal.classList.remove("is-closing");
  }, 240);
};

const openMenu = () => {
  if (!navModal) return;

  navModal.hidden = false;
  document.body.classList.add("modal-open");
  menuToggle?.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => navModal.classList.add("is-open"));
};

menuToggle?.addEventListener("click", openMenu);
closeMenuButtons.forEach((button) => button.addEventListener("click", closeMenu));

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.hash;

    if (targetId && document.querySelector(targetId)) {
      event.preventDefault();
      closeMenu();
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
      return;
    }

    closeMenu();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

// Edite esta data para mudar o início do contador.
const DATA_INICIAL = "2026-05-09T18:07:00";

// Edite esta lista para trocar os dias marcantes.
const DIAS_MARCANTES = [
  {
    data: "09/05/2026",
    titulo: "Cantadinha idiota",
    descricao: "Incrivelmente vc respondeu isso",
    foto: "cantada.png",
  },
  {
    data: "17/05/2026",
    titulo: "Princípe cruel",
    descricao: "A gente passou a noite inteira lendo esse livro juntos",
    foto: "livro.png",
  },

];

// Edite esta lista para adicionar fotos na galeria.
const FOTOS = [
  {
    imagem: "sorriso.png",
    legenda: "minha vista favorita no mundo",
  },
  {
    imagem: "gostosa.png",
    legenda: "PQPTFNEJUBGFBAGFVYUEEBGFVURA",
  },
  {
    imagem: "facecard.png",
    legenda: "o rosto mais bonito da história tlgd",
  },
  {
    imagem: "biquini.png",
    legenda: "absurdamente gostosa gata top 1 historia",
  },
  {
    imagem: "rio.png",
    legenda: "olha q sorriso gostoso linda",
  },
  {
    imagem: "costas.png",
    legenda: "*comentário censurado*",
  },
  {
    imagem: "corpo.png",
    legenda: "não tenho nem talher",
  },
  {
    imagem: "deusa.png",
    legenda: "se a biblia tivesse foto do céu",
  },
];

// Edite esta lista para trocar as cartas.
const CARTAS = [
  {
    titulo: "A primeira",
    mensagem: "Hoje eu fiquei aqui fazendo essa bobeira sem saber se amanhã vou acordar com uma foto sua sorrindo ou com um 'que brega, mateus', mas a verdade é que eu ficaria muito mais dias sem dormir pra ter a chance de um dia acordar vendo teu sorriso de perto lavínia, você é apaixonante garota, você é muito mais do que jamais sonhei. Tua beleza tá em cada mensagem boba que me manda durante o dia, tá em cada piadinha boba que faz pra me fazer rir (funcionam até demais), tá no jeito que mostra carinho genuíno, sem se esforçar. Você foi uma baita sorte lavínia, te conhecer foi um presente que nunca esperei merecer, você fica cada dia mais linda mesmo sem te ver. beijos e bom dia, idiota.",
  },
  {
    titulo: "Tuas qualidades",
    mensagem: "Cara, as coisas mais fáceis nas nossas noites foram enxergar todas as qualidades que você mostra sem saber Lavínia, você é uma vitrine de cuidado, humor, carinho e doçura atrás de um vidro intimidador de tão lindo. Foi atraente demais te ouvir falar do seu irmão e perceber o quão boa você consegue ser com uma criança; Foi apaixonante te ver rir comigo, dividir piadas e proferir insultos bobos que mostram o quão divertida você consegue tornar as minhas noites; Foi o que me prendeu, quando eu percebi que você tem muito carinho pra dar, nas suas mínimas ações, quando dividiu seu livro comigo, guardou minhas flores na sua mesa, me mandou fotos com o olho brilhando depois de a gente se elogiar por horas. Te viver é a coisa mais fácil e mais bonita que me ocorreu esse ano. Honestamente, preciso discordar da sua lista de defeitos que me mandou hoje, eu não consigo te achar egoísta, vc divide comigo o melhor presente que poderia me dar que é sua presença. Obrigado por estar aqui, te quero.",
  },
];

// Edite esta lista para trocar as coisas que voce admira.
const ADMIRACOES = [
  {
    titulo: "seu jeito.",
  },
  {
    titulo: "suas piadinhas (sem graça)",
  },
  {
    titulo: "seu carinho",
  },
  {
    titulo: "sua atenção",
  },
  {
    titulo: "seu sorriso dnv pq que delicia",
  },
  {
    titulo: "sua risadinha",
  },
  {
    titulo: "sua voz",
  },
  {
    titulo: "seu corpo",
  },
  {
    titulo: "suas idiotices",
  },
  {
    titulo: "sua boca (!!!!)",
  },
  {
    titulo: "seu nariz",
  },
  {
    titulo: "sua notificação",
  },
  {
    titulo: "vc de pijama",
  },
  {
    titulo: "seu estilo",
  },
  {
    titulo: "seu dom com arte",
  },
  {
    titulo: "seu jeito genuíno de mostrar que gosta",
  },
];

const counter = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

const updateCounter = () => {
  if (!counter.days) return;

  const start = new Date(DATA_INICIAL);
  const now = new Date();
  const elapsed = Math.max(0, now - start);
  const totalSeconds = Math.floor(elapsed / 1000);

  counter.days.textContent = Math.floor(totalSeconds / 86400);
  counter.hours.textContent = Math.floor((totalSeconds % 86400) / 3600);
  counter.minutes.textContent = Math.floor((totalSeconds % 3600) / 60);
  counter.seconds.textContent = totalSeconds % 60;
};

updateCounter();
setInterval(updateCounter, 1000);

const timelineList = document.querySelector("#timeline-list");

if (timelineList) {
  timelineList.innerHTML = DIAS_MARCANTES.map((item, index) => `
    <article class="timeline-item color-${index % 3}">
      ${
        item.foto
          ? `<button class="timeline-photo-button" type="button" data-timeline-index="${index}">
              <img class="timeline-photo" src="${item.foto}" alt="Foto de ${item.titulo}">
            </button>`
          : `<div class="timeline-photo empty" aria-hidden="true">Foto</div>`
      }
      <time>${item.data}</time>
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    </article>
  `).join("");

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".timeline-item").forEach((item) => item.classList.add("visible"));
  } else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".timeline-item").forEach((item) => observer.observe(item));
  }

  const timelineLightbox = document.querySelector("#timeline-lightbox");
  const timelineLightboxImage = document.querySelector("#timeline-lightbox-image");
  const timelineLightboxCaption = document.querySelector("#timeline-lightbox-caption");
  const timelineCloseButtons = document.querySelectorAll("[data-close-timeline-lightbox]");

  const closeTimelineLightbox = () => {
    if (!timelineLightbox || timelineLightbox.hidden) return;

    timelineLightbox.classList.add("is-closing");
    timelineLightbox.classList.remove("is-open");
    document.body.classList.remove("modal-open");

    setTimeout(() => {
      timelineLightbox.hidden = true;
      timelineLightbox.classList.remove("is-closing");
      timelineLightboxImage.src = "";
      timelineLightboxImage.alt = "";
    }, 220);
  };

  const openTimelineLightbox = (item) => {
    if (!timelineLightbox || !item.foto) return;

    timelineLightbox.hidden = false;
    document.body.classList.add("modal-open");
    timelineLightboxImage.src = item.foto;
    timelineLightboxImage.alt = `Foto de ${item.titulo}`;
    timelineLightboxCaption.textContent = `${item.titulo} - ${item.descricao}`;

    requestAnimationFrame(() => timelineLightbox.classList.add("is-open"));
  };

  document.querySelectorAll(".timeline-photo-button").forEach((button) => {
    button.addEventListener("click", () => {
      openTimelineLightbox(DIAS_MARCANTES[Number(button.dataset.timelineIndex)]);
    });
  });

  timelineCloseButtons.forEach((button) => {
    button.addEventListener("click", closeTimelineLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeTimelineLightbox();
  });
}

const photoGallery = document.querySelector("#photo-gallery");

if (photoGallery) {
  photoGallery.innerHTML = FOTOS.map((foto, index) => `
    <button class="gallery-card color-${index % 3}" type="button" data-photo-index="${index}">
      ${
        foto.imagem
          ? `<img src="${foto.imagem}" alt="${foto.legenda || "Foto especial"}">`
          : `<div class="gallery-placeholder" aria-hidden="true">Foto ${index + 1}</div>`
      }
      ${foto.legenda ? `<p>${foto.legenda}</p>` : ""}
    </button>
  `).join("");

  const showPhoto = (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      photoObserver.unobserve(entry.target);
    }
  };

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".gallery-card").forEach((card) => card.classList.add("visible"));
  } else {
    var photoObserver = new IntersectionObserver((entries) => {
      entries.forEach(showPhoto);
    }, { threshold: 0.15 });

    document.querySelectorAll(".gallery-card").forEach((card) => photoObserver.observe(card));
  }

  const lightbox = document.querySelector("#photo-lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const lightboxPlaceholder = document.querySelector("#lightbox-placeholder");
  const lightboxCaption = document.querySelector("#lightbox-caption");
  const closeButtons = document.querySelectorAll("[data-close-lightbox]");

  const closeLightbox = () => {
    if (!lightbox || lightbox.hidden) return;

    lightbox.classList.add("is-closing");
    lightbox.classList.remove("is-open");
    document.body.classList.remove("modal-open");

    setTimeout(() => {
      lightbox.hidden = true;
      lightbox.classList.remove("is-closing");
      lightboxImage.src = "";
      lightboxImage.alt = "";
    }, 220);
  };

  const openLightbox = (foto, index) => {
    if (!lightbox) return;

    lightbox.hidden = false;
    document.body.classList.add("modal-open");
    lightboxCaption.textContent = foto.legenda || "";
    lightboxPlaceholder.textContent = `Foto ${index + 1}`;

    if (foto.imagem) {
      lightboxImage.hidden = false;
      lightboxPlaceholder.hidden = true;
      lightboxImage.src = foto.imagem;
      lightboxImage.alt = foto.legenda || "Foto especial";
    } else {
      lightboxImage.hidden = true;
      lightboxPlaceholder.hidden = false;
    }

    requestAnimationFrame(() => lightbox.classList.add("is-open"));
  };

  document.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => {
      openLightbox(FOTOS[Number(card.dataset.photoIndex)], Number(card.dataset.photoIndex));
    });
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeLightbox));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

const lettersList = document.querySelector("#letters-list");

if (lettersList) {
  lettersList.innerHTML = CARTAS.map((carta, index) => `
    <article class="letter-card color-${index % 3}">
      <button class="letter-cover" type="button" aria-expanded="false">
        <span class="letter-stamp">&hearts;</span>
        <span class="letter-title">${carta.titulo}</span>
        <span class="letter-hint">Carta fechada</span>
      </button>
      <div class="letter-message">
        <p>${carta.mensagem}</p>
        <button class="letter-close" type="button">Fechar carta</button>
      </div>
    </article>
  `).join("");

  const revealLetter = (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      letterObserver.unobserve(entry.target);
    }
  };

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".letter-card").forEach((card) => card.classList.add("visible"));
  } else {
    var letterObserver = new IntersectionObserver((entries) => {
      entries.forEach(revealLetter);
    }, { threshold: 0.18 });

    document.querySelectorAll(".letter-card").forEach((card) => letterObserver.observe(card));
  }

  const closeAllLetters = () => {
    document.querySelectorAll(".letter-card.open").forEach((card) => {
      card.classList.remove("open");
      card.querySelector(".letter-cover").setAttribute("aria-expanded", "false");
      card.querySelector(".letter-hint").textContent = "Carta fechada";
    });
  };

  document.querySelectorAll(".letter-cover").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".letter-card");
      const wasOpen = card.classList.contains("open");

      closeAllLetters();

      if (!wasOpen) {
        card.classList.add("open");
        button.setAttribute("aria-expanded", "true");
        card.querySelector(".letter-hint").textContent = "Toque para fechar";
      }
    });
  });

  document.querySelectorAll(".letter-close").forEach((button) => {
    button.addEventListener("click", closeAllLetters);
  });
}

const admireButton = document.querySelector("#admire-button");
const admireCard = document.querySelector("#admire-card");
const admireTitle = document.querySelector("#admire-title");

if (admireButton && admireCard && admireTitle) {
  let currentAdmiration = 0;
  let admirationQueue = [];

  const shuffleAdmirationQueue = () => {
    admirationQueue = ADMIRACOES.map((_, index) => index)
      .filter((index) => index !== currentAdmiration)
      .sort(() => Math.random() - 0.5);
  };

  const showAdmiration = (index) => {
    const item = ADMIRACOES[index];
    currentAdmiration = index;

    admireCard.classList.remove("show");

    setTimeout(() => {
      admireTitle.textContent = item.titulo;
      admireCard.className = `admire-card color-${index % 3} show`;
    }, 140);
  };

  admireCard.classList.add("color-0", "show");
  shuffleAdmirationQueue();

  admireButton.addEventListener("click", () => {
    if (ADMIRACOES.length < 2) {
      showAdmiration(0);
      return;
    }

    if (!admirationQueue.length) shuffleAdmirationQueue();

    showAdmiration(admirationQueue.shift());
  });
}
