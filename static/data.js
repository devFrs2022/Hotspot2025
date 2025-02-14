const data = [
  {
    vista: "index",
    seccion: [
      {
        seccion: "servicios",
        imgfondo: "/static/img/bg/bg_servicios.jpg",
        titulo: "Nuestros Servicios",
        dataseccion: [
          {
            titulo: "Internet Inalámbrico",
            descripcion:
              "Conexión estable y rápida con planes diseñados para adaptarse a tus necesidades.",
            boton: [
              {
                text: "Ver Planes",
                url: "#planes",
                icon: "fad fas fa-list-tree"
              }
            ],
            imgSrc: "/static/img/service-internet.jpg"
          },
          {
            titulo: "Streaming-TV (IPTV)",
            descripcion:
              "Accede a contenido exclusivo en alta definición con nuestros paquetes de <b>Streaming-TV (IPTV)</b>.",
            boton: [
              {
                text: "Ir a IPTV",
                url: "https://media.mstr-network.com",
                icon: "fad fas fa-clapperboard-play"
              }
            ],
            imgSrc: "/static/img/service-streaming.jpg"
          }
        ]
      },
      {
        seccion: "planes",
        imgfondo: "/static/img/bg/bg_planes.jpg",
        titulo: "Nuestros Planes de Internet",
        subtitle:
          "Encuentra el plan perfecto para ti. Conéctate con nosotros y disfruta de la mejor experiencia online.",
        dataseccion: [
          {
            titulo: "Plan Básico",
            subtitulo: "$350 / Mes",
            descripcion: [
              {
                icon: "fad fas fa-globe-pointer text-primary",
                title: "3 Mbps de velocidad: <br/>",
                text: "Perfecto para redes sociales y navegación.",
                url: ""
              },

              {
                icon: "fad fas fa-clapperboard-play text-danger",
                title: "Incluye: <br/>",
                text: "1 cuenta básica de <a href='#servicios-mstr'>Streaming-TV</a> <br/><i>para tus series favoritas.</i>",
                url: ""
              }
            ],
            boton: [
              {
                text: "Contratar Ahora",
                url: "#",
                icon: "fad fas fa-cart-shopping-fast"
              }
            ],
            imgSrc: "/static/img/plan-basico.jpg"
          },
          {
            titulo: "Plan Estándar",
            subtitulo: "$450 / Mes",
            descripcion: [
              {
                icon: "fad fas fa-globe-pointer text-primary",
                title: "5 Mbps de velocidad: <br/>",
                text: "Disfruta de streaming en HD y videollamadas grupales.",
                url: ""
              },
              {
                icon: "fad fas fa-clapperboard-play text-danger",
                title: "Incluye: <br/>",
                text: "1 cuenta estándar de <a href='#servicios-mstr'>Streaming-TV</a> <br/><i>con series y películas.</i>",
                url: ""
              }
            ],
            boton: [
              {
                text: "Contratar Ahora",
                url: "#",
                icon: "fad fas fa-cart-shopping-fast"
              }
            ],
            imgSrc: "/static/img/plan-estandar.jpg"
          },
          {
            titulo: "Plan Premium",
            subtitulo: "$550 / Mes",
            descripcion: [
              {
                icon: "fad fas fa-globe-pointer text-primary",
                title: "7 Mbps de velocidad: <br/>",
                text: "Perfecto para gaming, streaming en HD y descargas rápidas.",
                url: ""
              },
              {
                icon: "fad fas fa-clapperboard-play text-danger",
                title: "Incluye: <br/>",
                text: "1 cuenta premium de <a href='#servicios-mstr'>Streaming-TV</a> <br/><i>con acceso a estrenos exclusivos.</i>",
                url: ""
              }
            ],
            boton: [
              {
                text: "Contratar Ahora",
                url: "#",
                icon: "fad fas fa-cart-shopping-fast"
              }
            ],
            imgSrc: "/static/img/plan-premium.jpg"
          }
        ]
      },
      {
        seccion: "productos",
        imgfondo: "/static/img/bg/bg_productos.jpg",
        titulo: "Productos",
        dataseccion: [
          {
            titulo: "Equipos y Accesorios de Cómputo",
            descripcion:
              "Encuentra PCs, laptops, y accesorios que se adapten a tu entorno de trabajo o entretenimiento.",
            boton: [
              {
                text: "Ver Catálogo",
                url: "#",
                icon: "fad fas fa-bags-shopping"
              }
            ],
            imgSrc: "/static/img/producto-computo.jpg"
          },
          {
            titulo: "Antenas y Dispositivos WiFi",
            descripcion:
              "Mejora la conectividad con nuestras antenas y dispositivos de alta gama.",
            boton: [
              {
                text: "Ver Catálogo",
                url: "#",
                icon: "fad fas fa-bags-shopping"
              }
            ],
            imgSrc: "/static/img/producto-antenas.jpg"
          },
          {
            titulo: "Soluciones de Videovigilancia",
            descripcion:
              "Monitorea tu hogar o empresa con nuestras soluciones avanzadas de videovigilancia.",
            boton: [
              {
                text: "Ver Catálogo",
                url: "#",
                icon: "fad fas fa-bags-shopping"
              }
            ],
            imgSrc: "/static/img/producto-videovigilancia.jpg"
          }
        ]
      },
      {
        seccion: "otros-servicios",
        imgfondo: "/static/img/bg/bg_otros_servicios.jpg",
        titulo: "Otros Servicios",
        dataseccion: [
          {
            titulo: "Venta de Fichas WiFi",
            descripcion:
              "Accede a internet desde nuestras zonas WiFi habilitadas con fichas de diferentes denominaciones.",
            boton: [
              {
                text: "Ver más",
                url: "#",
                icon: "fad fas fa-angles-right"
              }
            ],
            imgSrc: "/static/img/service-wifi.png"
          },
          {
            titulo: "Recargas Electrónicas y Pines",
            descripcion:
              "Recargas para teléfonos y servicios digitales con cobertura nacional e internacional.",
            boton: [
              {
                text: "Ver más",
                url: "#",
                icon: "fad fas fa-angles-right"
              }
            ],
            imgSrc: "/static/img/service-recargas.jpg"
          },
          {
            titulo: "Pagos de Servicios",
            descripcion:
              "Realiza tus pagos de servicios como luz, agua, internet y más con total seguridad y facilidad.",
            boton: [
              {
                text: "Ver más",
                url: "#",
                icon: "fad fas fa-angles-right"
              }
            ],
            imgSrc: "/static/img/service-pagos.png"
          }
        ]
      },

      {
        seccion: "blog",
        imgfondo: "/static/img/bg/bg_blog.jpg",
        titulo: "Blog",
        dataseccion: [
          {
            titulo: "5 Tendencias Tecnológicas para el Futuro",
            descripcion:
              "Descubre las tecnologías emergentes que están revolucionando el sector y cómo pueden impactar tu vida.",
            boton: [
              {
                text: "Leer más",
                url: "/blog/tendencias-tecnologicas",
                icon: "fas fa-book-open"
              }
            ],
            imgSrc: "/static/img/blog-tendencias.jpg"
          },
          {
            titulo:
              "Cómo la Conectividad Está Transformando las Comunidades Rurales",
            descripcion:
              "Un análisis profundo sobre el papel de Internet en el desarrollo social y económico de las zonas rurales.",
            boton: [
              {
                text: "Leer más",
                url: "/blog/conectividad-rural",
                icon: "fas fa-globe"
              }
            ],
            imgSrc: "/static/img/blog-conectividad.jpg"
          },
          {
            titulo: "Beneficios de la Videovigilancia en el Hogar",
            descripcion:
              "Exploramos cómo la videovigilancia puede mejorar la seguridad en tu hogar y qué tecnologías destacan en el mercado.",
            boton: [
              {
                text: "Leer más",
                url: "/blog/videovigilancia-hogar",
                icon: "fas fa-video"
              }
            ],
            imgSrc: "/static/img/blog-videovigilancia.jpg"
          }
        ]
      }
    ]
  },
  {
    vista: "nosotros",
    seccion: [
      {
        seccion: "quienes-somos",
        imgfondo: "/static/img/bg/bg_nosotros.jpg",
        titulo: "Quiénes somos",
        dataseccion: [
          {
            titulo: "Somos Mstr Network",
            descripcion: `
                  Somos una empresa naciente que comenzó operaciones en 2024, con un enfoque renovado en ofrecer soluciones tecnológicas de vanguardia. 
                  Nos caracterizamos por ser confiables y tener un gran potencial para transformar la conectividad en las zonas que más lo necesitan. 
                  Nuestra misión es conectar a las personas de forma eficiente y segura, asegurando una experiencia de calidad para todos nuestros clientes.
                `,
            imgSrc: "/static/img/n_nosotros.jpg"
          }
        ]
      },
      {
        seccion: "historia",
        imgfondo: "/static/img/bg/bg_historia.jpg",
        titulo: "Nuestra Historia",
        dataseccion: [
          {
            titulo: "Una Historia Reciente con Grandes Metas",
            descripcion: `
                  Mstr Network inició sus operaciones en 2024. Somos una organización renovada y con una visión clara de expansión, 
                  comprometidos con la transformación digital en comunidades urbanas y rurales. Nuestro enfoque es ofrecer servicios confiables de conectividad 
                  que impulsen el desarrollo y el bienestar social.
                `,
            imgSrc: "/static/img/n_historia.jpg"
          }
        ]
      },

      {
        seccion: "filosofia",
        imgfondo: "/static/img/bg/bg_mision.jpg",
        titulo: "Nuestra Filosofía",
        dataseccion: [
          {
            titulo: "Nuestra Misión",
            descripcion: `
                Conectar a las personas a través de soluciones tecnológicas avanzadas, accesibles y confiables.
                Creemos que la conectividad es un derecho básico y estamos comprometidos a reducir la brecha digital.
                `,
            imgSrc: "/static/img/n_mision.jpg"
          },
          {
            titulo: "Nuestra Visión",
            descripcion: `
                Ser líderes en telecomunicaciones, proporcionando servicios de conectividad en todo el país.
                Aspiramos a conectar comunidades urbanas y rurales mediante innovaciones constantes.
                `,
            imgSrc: "/static/img/n_vision.jpg"
          },
          {
            titulo: "Nuestros Valores",
            descripcion: [
              {
                icon: "fad fa-lightbulb text-warning",
                title: "Innovación:",
                text: "Vanguardia en tecnologías.",
                url: ""
              },
              {
                icon: "fad fa-balance-scale text-success",
                title: "Integridad:",
                text: "Transparencia y ética.",
                url: ""
              },
              {
                icon: "fad fa-hands-helping text-primary",
                title: "Compromiso:",
                text: "Entender y superar las expectativas de nuestros clientes.",
                url: ""
              },
              {
                icon: "fad fa-certificate text-warning",
                title: "Calidad:",
                text: "Productos y servicios de alta calidad.",
                url: ""
              },
              {
                icon: "fad fa-leaf text-success",
                title: "Responsabilidad Social:",
                text: "Contribuimos al desarrollo sostenible.",
                url: ""
              }
            ],
            imgSrc: "/static/img/n_valores.jpg"
          }
        ]
      },
      {
        seccion: "equipo",
        imgfondo: "/static/img/bg/bg_equipo.jpeg",
        titulo: "Nuestro Equipo",
        dataseccion: [
          {
            titulo: "Nuestro Equipo",
            descripcion: [
              "Contamos con un equipo multidisciplinario de profesionales altamente calificados en telecomunicaciones y tecnología.",
              "Cada miembro comparte el compromiso de la innovación y la excelencia."
            ],
            imgSrc: "/static/img/n_equipo.jpg"
          }
          /* {
                         titulo: "Equipo de Dirección",
                         descripcion: [
                            {
                                icon: 'fad fa-user-tie',  // Icono representativo de un líder empresarial
                                title: 'Juan Pérez - CEO:',
                                text: 'Líder estratégico con 20 años de experiencia.',
                                url: ''
                            },
                            {
                                icon: 'fad fa-network-wired',  // Icono relacionado con tecnología y redes
                                title: 'María González - CTO:',
                                text: 'Encargada de la infraestructura tecnológica.',
                                url: ''
                            },
                            {
                                icon: 'fad fa-chart-line',  // Icono relacionado con finanzas y crecimiento
                                title: 'Carlos López - CFO:',
                                text: 'Gestor de las finanzas e inversiones.',
                                url: ''
                            },
                            {
                                icon: 'fad fa-headset',  // Icono relacionado con servicio al cliente
                                title: 'Laura Ramírez - Directora de Atención al Cliente:',
                                text: 'Supervisa las operaciones de servicio al cliente.',
                                url: ''
                            }
                        ],
                         imgSrc: "/static/img/n_equipo-direccion.jpg"
                     }*/
        ]
      },
      {
        seccion: "testimonios",
        imgfondo: "/static/img/bg/bg_testimonios.jpg",
        titulo: "Testimonios",
        dataseccion: [
          {
            titulo: "",
            descripcion: `
                <blockquote class="blockquote">
                  <p class="mb-0">"Gracias a Mstr Network, nuestra comunidad tiene acceso a Internet de alta velocidad por primera vez."</p>
                  <footer class="blockquote-footer">Carlos Martínez, Cliente Satisfecho</footer>
                </blockquote>                
                `,
            imgSrc: "/static/img/n_testimonios.jpg"
          },
          {
            titulo: "",
            descripcion: `                  
                  <blockquote class="blockquote">
                    <p class="mb-0">"Mstr Network es un proveedor confiable y comprometido."</p>
                    <footer class="blockquote-footer">Ana López, Empresa Asociada</footer>
                  </blockquote>
                  `,
            imgSrc: "/static/img/n_testimonios2.jpg"
          }
        ]
      }
    ]
  },
  {
    vista: "contacto",
    seccion: [
      {
        seccion: "contacto",
        imgfondo: "/static/img/bg/bg_contacto.jpg",
        titulo: "Contáctanos",
        dataseccion: [
          {
            titulo: "Contacto",
            descripcion: [
              {
                icon: "fad fa-phone-volume text-success",
                title: "Tel:",
                text: "+52 720 251 8137",
                url: "tel:+527202518137"
              },
              {
                icon: "fad fa-envelope text-danger",
                title: "Email:",
                text: "info@mstr-network.com",
                url: "mailto:info@mstr-network.com?Subject=Informacion%20de%20servicios"
              },
              {
                icon: "fab fa-whatsapp text-success",
                title: "WhatsApp:",
                text: "Envíanos un mensaje",
                url: "https://wa.me/527202518137"
              }
            ],
            imgSrc: "/static/img/contacto-secretaria.jpg"
          },
          {
            titulo: "Redes Sociales",
            descripcion: [
              {
                icon: "fab fa-facebook-f text-primary",
                text: "Facebook",
                url: "https://www.facebook.com"
              },
              {
                icon: "fab fa-x-twitter",
                text: "X-Twitter",
                url: "https://www.twitter.com"
              },
              {
                icon: "fab fa-instagram instagram-icon",
                text: "Instagram",
                url: "https://www.instagram.com"
              },
              {
                icon: "fab fa-youtube text-danger",
                text: "YouTube",
                url: "https://www.youtube.com"
              }
            ],
            imgSrc: "/static/img/contacto-redes-sociales.jpg"
          },
          {
            titulo: "Información",
            descripcion: [
              {
                icon: "fad fa-book",
                text: "Quiénes somos",
                url: "quienes-somos.html"
              },
              {
                icon: "fad fas fa-file",
                text: "Aviso de privacidad",
                url: "#"
              },
              {
                icon: "fad fas fa-file-check",
                text: "Términos y Condiciones",
                url: "#"
              }
            ],
            imgSrc: "/static/img/contacto-info.jpg"
          }
        ]
      }
    ]
  }
];
