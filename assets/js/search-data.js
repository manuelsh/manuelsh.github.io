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
        },{id: "nav-cv",
          title: "cv",
          description: "Exported from my [LinkedIn profile](https://www.linkedin.com/in/manuelsh/)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-the-path-to-agi-quantifying-bottlenecks",
      
        title: 'The path to AGI: quantifying bottlenecks <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Scaling artificial intelligence to new heights comes with significant challenges, particularly in hardware, energy, and data availability. As we strive towards Artificial General Intelligence (AGI), the hurdles grow—from the immense GPU requirements to the daunting energy consumption and even the scarcity of high-quality training data. These obstacles are demanding, yet they are not insurmountable, paving the way for ambitious innovations and new solutions.",
      section: "Posts",
      handler: () => {
        
          window.open("https://realmindovermatters.wordpress.com/2024/10/06/the-path-to-agi-quantifying-bottlenecks/", "_blank");
        
      },
    },{id: "post-normalization-in-tensorflow-speed-is-an-issue",
      
        title: 'Normalization in TensorFlow: speed is an issue <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@mansanher/normalization-in-tensorflow-speed-is-an-issue-b8ae14336685?source=rss-45dc57f14df6------2", "_blank");
        
      },
    },{id: "post-setting-up-your-gpu-tensorflow-platform",
      
        title: 'Setting up your GPU TensorFlow platform <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@mansanher/setting-up-your-gpu-tensorflow-platform-1ba2c8b533a?source=rss-45dc57f14df6------2", "_blank");
        
      },
    },{id: "post-fin-de-la-transmisión",
      
        title: 'FIN DE LA TRANSMISIÓN <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Con este corto mensaje me despido de mi pequeña pero fiel audiencia. El motivo: no puedo dedicarme a este blog como él se merece. Es posible que, muy esporádicamente, escriba algo que piense que merezca la pena publicar; pero os aviso: será muy esporádicamente. Ahora no puedo asumir un nivel de compromiso mayor. Como dice [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/07/20/fin-de-la-transmision/", "_blank");
        
      },
    },{id: "post-la-materia-al-descubierto",
      
        title: 'La materia al descubierto <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "En los primeros años del siglo XX se produjo una revolución extraordinaria en la física con el nacimiento de la mecánica cuántica, pero también se abrió un campo plagado de grandes interrogantes que mantienen intrigados a muchos físicos. Uno de los descubrimientos más sorprendentes fue que la luz, además de ser una onda, también se [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/04/13/la-materia-al-descubierto/", "_blank");
        
      },
    },{id: "post-el-nacimiento-de-la-mecánica-cuántica",
      
        title: 'El nacimiento de la mecánica cuántica <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Cuando una teoría que intenta explicar la naturaleza comienza a dar resultados que no concuerdan con lo que medimos, ¡es un buen momento para cambiarla por otra nueva! Esta es la historia de cómo un truco matemático significó en realidad una nueva interpretación de la realidad: el nacimiento de la mecánica cuántica. Y ocurrió a [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/02/23/el-nacimiento-de-la-mecanica-cuantica/", "_blank");
        
      },
    },{id: "post-entendiendo-la-entropía",
      
        title: 'Entendiendo la entropía <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "La entropía puede parecer un concepto misterioso y difícil de entender, que comúnmente se relaciona con el desorden. Sin embargo, si nos adentramos en el significado de éste, no sólo veremos que se entiende fácilmente, sino que además encierra una serie de sutilezas que lo hacen muy interesante. Antes de comenzar a explicar la entropía [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/01/27/entendiendo-la-entropia/", "_blank");
        
      },
    },{id: "post-tautología",
      
        title: 'Tautología <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Es insulso no ser creativo. De hecho, lo es, por definición.",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2008/01/07/tautologia/", "_blank");
        
      },
    },{id: "post-distribución-de-visitas-de-inquietudes",
      
        title: 'Distribución de visitas de Inquietudes <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "En el post sobre el record de visitas de Agosto, mi hermano Dani me hizo un inspirador comentario que me llevó a la siguiente pregunta: ¿cómo se distribuyen las visitas a lo largo de los posts de Inquietudes? Con un poco de Excel y paciencia, obtuve la respuesta: ¿Qué significa esta gráfica? Aquí se representa [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2007/09/21/distribucion-de-visitas-de-inquietudes/", "_blank");
        
      },
    },{id: "post-dulce-retorno",
      
        title: 'Dulce retorno <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Tras dos semanas de periplo centroeuropeo por la elegante Viena, la enigmática Praga y la robusta y nueva Berlín, aterrizo con fuerzas renovadas. No sabría decir qué ciudad me gustó más. Creo que lo mejor sería aprovechar cada una con su configuración de historias, personas y lugares: podría vivir y trabajar en Berlín, escribir una [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2007/08/22/retornando/", "_blank");
        
      },
    },{id: "post-es-más-rentable-comprar-o-alquilar-un-piso",
      
        title: '¿Es más rentable comprar o alquilar un piso? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Desde hace un tiempo, y ante el panorama que se presenta, me hago la siguiente pregunta: ¿es más rentable comprar o alquilar un piso? Para darle respuesta he construido una pequeña tabla con el Excel en la que comparo, año a año, los costes que se van acumulando por alquilar un piso, frente a los [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2007/06/24/%c2%bfes-mas-rentable-comprar-o-alquilar-un-piso/", "_blank");
        
      },
    },{id: "post-inteligencia-artificial-con-google",
      
        title: '¿Inteligencia Artificial con Google? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Imagínate un programa capaz de ordenar una serie de palabras en una frase con sentido. Por ejemplo; tú le introduces: «ti, pensando, en, estoy» y él es capaz de ordenarlas y decirte: «estoy pensando en ti». Llevo varios días aprendiendo a programar en Java, .NET y a utilizar API&amp;#8216;s para intentar hacer precisamente esto. Y [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2007/05/16/%c2%a1ordena-las-palabras/", "_blank");
        
      },
    },{id: "post-el-paño-de-la-cocina",
      
        title: 'El paño de la cocina <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Inquietud doméstica, pero no banal. Veamos las siguientes opciones: 1. Escurrir el paño de la cocina con una mano. 2. Escurrir el paño con dos manos. ¿Cuál de estas dos es más efectiva? La respuesta, no evidente, es la 2: cada mano escurre medio paño, pues con el doble de esfuerzo que el anterior se [&amp;#8230;]",
      section: "Posts",
      handler: () => {
        
          window.open("https://inquietudes.wordpress.com/2007/04/19/el-pano-de-la-cocina/", "_blank");
        
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
          window.open("mailto:%6D%61%6E%73%61%6E%68%65%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/manuelsh", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/manuelsh", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/manuelsh", "_blank");
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
