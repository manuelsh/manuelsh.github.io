// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Materials for courses you taught. Replace this text with your description.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-people",
          title: "people",
          description: "members of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-fin-de-la-transmisión",
      
        title: 'FIN DE LA TRANSMISIÓN <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Con este corto mensaje me despido de mi pequeña pero fiel audiencia. El motivo: no puedo dedicarme a este blog como él se merece. Es posible que, muy esporádicamente, escriba algo que piense que merezca la pena publicar; pero os aviso: será muy esporádicamente. Ahora no puedo asumir un nivel de compromiso mayor. Como dice [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/07/20/fin-de-la-transmision/", "_blank");
        
      },
    },{id: "post-creatividad",
      
        title: 'Creatividad <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "«La generosidad y la piedad pueden ser un gran combustible de la creatividad.» &amp;#8212; Florian Henckel von Donnersmarck, director y guionista de La Vida de los Otros.",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/06/28/creatividad/", "_blank");
        
      },
    },{id: "post-verdad-psicoanalítica",
      
        title: 'Verdad psicoanalítica <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "«La verdadera patria del hombre es su infancia.» &amp;#8212; Rainer Maria Rilke",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/06/04/verdad-psicoanalitica/", "_blank");
        
      },
    },{id: "post-demostración-de-fuerza",
      
        title: 'Demostración de fuerza <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Según un antiguo manual de política internacional, hay tres tipos de acciones políticas: movimientos para cambiar el status quo, movimientos para mantenerlo y por último, demostraciones de fuerza, tales como ensayos o exhibiciones militares, que suelen provocar el recelo de los países rivales. El desfile militar ruso del 9 de Mayo puede sin duda englobarse dentro [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/05/10/demostracion-de-fuerza/", "_blank");
        
      },
    },{id: "post-caja-autoconsciente",
      
        title: 'Caja autoconsciente <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Vía: The Smoke Sellers.",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/05/03/caja-autoconsciente/", "_blank");
        
      },
    },{id: "post-viejas-glorias",
      
        title: 'Viejas glorias <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Mi viejo Commodore 64, ¡cuántas horas de diversión que me diste! Aquellos que se sientan nostálgicos podrán leer sobre la historia de los videojuegos en esta completa anotación: Historia de los Videojuegos.",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/04/30/viejas-glorias/", "_blank");
        
      },
    },{id: "post-polifacético-dalí",
      
        title: 'Polifacético Dalí <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Para muchos un artista genial, para algunos un vende humos: él es Salvador Dalí, uno de los primeros artistas que explotó su extravagante personalidad en los medios de masas. En el siguiente vídeo lo vemos en un programa de entretenimiento americano, en el que un grupo de personas con los ojos tapados tienen que adivinar [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/04/21/polifacetico-dali/", "_blank");
        
      },
    },{id: "post-la-materia-al-descubierto",
      
        title: 'La materia al descubierto <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "En los primeros años del siglo XX se produjo una revolución extraordinaria en la física con el nacimiento de la mecánica cuántica, pero también se abrió un campo plagado de grandes interrogantes que mantienen intrigados a muchos físicos. Uno de los descubrimientos más sorprendentes fue que la luz, además de ser una onda, también se [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/04/13/la-materia-al-descubierto/", "_blank");
        
      },
    },{id: "post-está-lleno-de-estrellas",
      
        title: 'Está lleno de estrellas <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "«Tras cada hombre viviente se encuentran treinta fantasmas, pues tal es la proporción numérica en que los muertos superan a los vivos. Desde el alba de los tiempos aproximadamente cien mil millones de seres humanos han transitado por el planeta Tierra. Y es en verdad un número interesante, pues por curiosa coincidencia hay aproximadamente cien [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/04/01/esta-lleno-de-estrellas/", "_blank");
        
      },
    },{id: "post-por-qué-son-tan-pequeños-los-átomos",
      
        title: '¿Por qué son tan pequeños los átomos? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "«Se han imaginado muchos ejemplos para familliarizar al público con esta idea, pero ninguno es más sorprendente que el empleado por Lord Kelvin: supongamos que pudiéramos marcar las moléculas de un vaso de agua; vertamos entonces el contenido del vaso en el océano y agitemos de forma que las moléculas marcadas se distribuyan uniformemente por [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/03/27/%c2%bfpor-que-son-tan-pequenos-los-atomos/", "_blank");
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
