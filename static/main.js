var mstr = {
  _init: function (viewName) {
    $("#loading-screen").show();

    // Recorrer la data y generar secciones dinámicamente de acuerdo a la vista (index o nosotros)
    data.forEach((view) => {
      if (view.vista === viewName) {
        view.seccion.forEach((section) => {
          this._generarSeccion(section);
        });
      }
    });

    // Generar sección de contacto dinámicamente
    const contactoData = data.find((view) => view.vista === "contacto")
      .seccion[0];
    this._generarSeccion(contactoData);

    $(window).on("load", () => {
      // Ocultar la pantalla de carga con animación
      $("#loading-screen").fadeOut("slow", function () {
        $(this).addClass("hidden");
      });

      $("body").removeClass("loading");

      // Configuración de anchors y tooltips condicional según la vista
      const anchors = (
        viewName === "index" || viewName === "status" ? ["inicio-mstr"] : []
      )
        .concat(
          data && Array.isArray(data) // Verifica si data es un array
            ? (
                data.find((view) => view.vista === viewName) || { seccion: [] }
              ).seccion.map((sec) => sec.seccion + "-mstr")
            : [] // Si data es inválido, devuelve un array vacío
        )
        .concat(["contacto-mstr"]);

      const navigationTooltips = (
        viewName === "index" || viewName === "status" ? ["Inicio"] : []
      )
        .concat(
          data && Array.isArray(data) // Verifica si data es un array
            ? (
                data.find((view) => view.vista === viewName) || { seccion: [] }
              ).seccion.map((sec) => sec.titulo)
            : [] // Si data es inválido, devuelve un array vacío
        )
        .concat(["Contacto"]);

      // Inicializar fullPage.js con anclas y tooltips dinámicos
      new fullpage("#fullpage", {
        licenseKey: "kDnq5yVJ-fE4URtmD-xzQne1RF-IYxCutxv",
        autoScrolling: true,
        navigation: false,
        scrollOverflow: true,
        css3: true,
        easingcss3: "ease-in-out",
        scrollingSpeed: 700,
        anchors: anchors,
        navigationTooltips: navigationTooltips,
        showActiveTooltip: false,
        menu: "#navbarNav",
        onLeave: function (origin, destination, direction) {
          // Remover la clase 'active-link' de todos los enlaces
          $(".navbar-nav a")
            .removeClass("active-link")
            .removeClass("border-bottom")
            .removeClass("border-orange");

          // Identificar la sección activa
          const activeSection = destination.anchor;
          const selectedLink = $(`a[href="#${activeSection}"]`);

          // Agregar la clase 'active-link' al enlace correspondiente a la sección activa
          selectedLink.addClass("active-link border-bottom border-orange");

          // Verificar si el enlace pertenece a un submenú
          if (selectedLink.closest(".dropdown-menu").length) {
            // Seleccionar el enlace padre (dropdown toggle)
            selectedLink
              .closest(".dropdown")
              .find(".nav-link.dropdown-toggle")
              .addClass("active-link border-bottom border-orange");
          }
        }
      });

      // Función para cerrar el navbar cuando se selecciona un enlace en vista responsiva
      $(".navbar-nav a").on("click", function () {
        // $('.navbar-collapse').collapse('hide');
      });

      // Solo habilitar el desplazamiento en pantallas pequeñas
      if (window.innerWidth < 768) {
        if (Array.isArray(data)) {
          data.forEach((view) => {
            if (view.vista === viewName) {
              view.seccion.forEach((section) => {
                mstr._scroll_section(`#${section.seccion}`);
              });
            }
          });
        }
        this._scroll_section("#contacto");
      }
    });
  },

  _generarSeccion: function (sectionData) {
    const footer =
      sectionData.seccion === "contacto"
        ? `
    <!-- Footer -->
    <footer class="footer-section bg-dark text-white w-100 py-3">
      <div class="container text-center">
        <b class="text-orange">© 2024 Mstr Network.</b>
        Todos los derechos reservados.
      </div>
    </footer>`
        : "";

    const sectionHTML = `
      <section id="${sectionData.seccion}" class="section d-flex align-items-center" data-anchor="${sectionData.seccion}-mstr" style="background: url('${sectionData.imgfondo}') center/cover no-repeat;">
        <div class="container text-center">
          <h2 class="text-center mb-md-5">${sectionData.titulo}</h2>
          <!-- Contenedor para pantallas grandes -->
          <div class="row justify-content-center d-none d-md-flex"></div>
          <!-- Contenedor con desplazamiento horizontal para pantallas pequeñas -->
          <div class="scroll-container d-md-none">
            <div class="scroll-content"></div>
            <!-- Flechas de navegación para pantallas pequeñas -->
            <a class="scroll-prev scrollPrev">&#10094;</a>
            <a class="scroll-next scrollNext">&#10095;</a>
          </div>
        </div>
        ${footer}
      </section>`;

    $("#fullpage").append(sectionHTML);

    // Generar tarjetas para la sección
    this._generarTarjetas(`#${sectionData.seccion}`, sectionData.dataseccion);
  },

  _generarTarjetas: function (sectionId, data) {
    const largeScreenContainer = document.querySelector(
      sectionId + " .row.justify-content-center.d-none.d-md-flex"
    );
    const smallScreenContainer = document.querySelector(
      sectionId + " .scroll-content"
    );

    data.forEach((item) => {
      const imgTag = !!item.imgSrc
        ? `<img src="${item.imgSrc}" alt="${item.titulo}" class="card-img-top">`
        : "";

      let descripcionTag = "";
      if (
        typeof item.descripcion === "string" ||
        (Array.isArray(item.descripcion) &&
          typeof item.descripcion[0] === "string")
      ) {
        const descripcionArray = Array.isArray(item.descripcion)
          ? item.descripcion
          : [item.descripcion];
        descripcionTag = descripcionArray
          .map((desc) => `<p>${desc}</p>`)
          .join("");
      } else if (
        Array.isArray(item.descripcion) &&
        typeof item.descripcion[0] === "object"
      ) {
        descripcionTag = item.descripcion
          .map(
            (desc) => `
                        <p>
                            <i class="fas fa-fw ${desc.icon}"></i>
                            <span class="text-bold text-black-60">${
                              desc.title || ""
                            }</span>
                            <small>${
                              desc.url
                                ? `<a href="${desc.url}" class="text-link">${desc.text}</a>`
                                : `${desc.text}`
                            }</small>
                        </p>`
          )
          .join("");
      }

      let pieTag = "";
      if (
        typeof item.pie === "string" ||
        (Array.isArray(item.pie) && typeof item.pie[0] === "string")
      ) {
        const pieArray = Array.isArray(item.pie) ? item.pie : [item.pie];
        pieTag = pieArray
          .map((desc) => `<p><small>${desc}</small></p>`)
          .join("");
      } else if (Array.isArray(item.pie) && typeof item.pie[0] === "object") {
        pieTag = item.pie
          .map(
            (desc) => `<p>
                        <small>
                            <i class="fas fa-fw ${desc.icon}"></i>
                            <span class="text-bold text-black-70">${
                              desc.title || ""
                            }</span>
                            ${
                              desc.url
                                ? `<a href="${desc.url}" class="text-link">${desc.text}</a>`
                                : `<span>${desc.text}</span>`
                            }
                        </small>
                      </p>`
          )
          .join("");
      }

      let botonTag = "";
      if (Array.isArray(item.boton)) {
        botonTag = item.boton
          .map(
            (btn) => `
          <a href="${btn.url}" class="btn btn-orange">
            ${btn.icon ? `<i class="${btn.icon}"></i>` : ""} ${btn.text}
          </a>
        `
          )
          .join("");
      }

      const cardLarge = `
        <div class="col text-center mb-4">
          <div class="card">
            ${imgTag}
            <div class="card-body p-5">
              <h4 class="card-title text-bold text-uppercase">${
                item.titulo
              }</h4>
              <p class="price">${item.subtitulo || ""}</p>
              ${descripcionTag}
              ${pieTag}
              ${botonTag}
            </div>
          </div>
        </div>`;
      largeScreenContainer.innerHTML += cardLarge;

      const cardSmall = `
        <div class="card">
          ${imgTag}
          <div class="card-body">
            <h4 class="card-title text-bold text-uppercase">${item.titulo}</h4>
            <p class="price">${item.subtitulo || ""}</p>
            ${descripcionTag}
            ${pieTag}
            ${botonTag}
          </div>
        </div>`;
      smallScreenContainer.innerHTML += cardSmall;
    });
  },

  _scroll_section: function (section) {
    const container = document.querySelector(section + " .scroll-container");
    if (!container) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    // Detectar el inicio del arrastre
    container.addEventListener(
      "touchstart",
      (e) => {
        isDragging = true;
        container.classList.add("dragging"); // Agregar clase de arrastre
        startX = e.touches[0].pageX;
        scrollLeft = container.scrollLeft;
      },
      {
        passive: true
      }
    );

    // Detectar el movimiento del arrastre
    container.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;

        const touch = e.touches[0];
        const walk = (touch.pageX - startX) * 1.5; // Aumenta el valor para un efecto de movimiento más notable
        container.scrollLeft = scrollLeft - walk;
      },
      {
        passive: true
      }
    );

    // Detectar el fin del arrastre
    container.addEventListener("touchend", () => {
      isDragging = false;
      container.classList.remove("dragging"); // Remover clase de arrastre
    });

    $(section + " .scrollNext").click(function () {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth"
      });
    });

    $(section + " .scrollPrev").click(function () {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth"
      });
    });
  }
};

// Obtén la URL actual del script cargado
const scriptUrl = document.currentScript.src;

// Usa URLSearchParams para obtener el valor de "view"
const urlParams = new URL(scriptUrl).searchParams;
const viewParam = urlParams.get("view");

// console.log(viewParam);  // Imprimirá "index"

// Usando un switch para manejar tipos de vista específicos
$(document).ready(function () {
  mstr._init(viewParam);
});
