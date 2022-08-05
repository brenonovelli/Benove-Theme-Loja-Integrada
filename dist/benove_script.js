(function () {
  const body = document.querySelector("body");

  const iconMenu = document.querySelector(".atalho-menu.icon-th");
  const newIconMenu = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  iconMenu && iconMenu.insertAdjacentHTML("afterBegin", newIconMenu);

  const iconSearch = document.querySelector(".busca .icon-search");
  const newIconSearch = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
  iconSearch && iconSearch.insertAdjacentHTML("afterBegin", newIconSearch);

  const iconContact = document.querySelector(".barra-inicial .icon-comment");
  const newIconContact = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`;
  iconContact && iconContact.insertAdjacentHTML("afterBegin", newIconContact);

  const iconPhone = document.querySelector(".barra-inicial .icon-phone");
  const newIconPhone = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
  iconPhone && iconPhone.insertAdjacentHTML("afterBegin", newIconPhone);

  const newIconCart = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`;

  const iconCart = document.querySelector(".carrinho .icon-shopping-cart");
  iconCart && iconCart.insertAdjacentHTML("afterBegin", newIconCart);

  const iconButtonCart = document.querySelectorAll(
    ".botao .icon-shopping-cart"
  );
  iconButtonCart &&
    iconButtonCart.forEach((item) =>
      item.insertAdjacentHTML("afterBegin", newIconCart)
    );

  const iconHome = document.querySelector(".atalhos-mobile .icon-home");
  const newIconHome = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
  iconHome && iconHome.insertAdjacentHTML("afterBegin", newIconHome);

  const iconUser = document.querySelector(".atalhos-mobile .icon-user");
  const newIconUser = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
  iconUser && iconUser.insertAdjacentHTML("afterBegin", newIconUser);

  const iconCartAtMobile = document.querySelector(
    ".atalhos-mobile .icon-shopping-cart"
  );
  const newIconCartAtMobile = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`;
  iconCartAtMobile &&
    iconCartAtMobile.insertAdjacentHTML("afterBegin", newIconCartAtMobile);

  const iconSearchBarraTopo = document.querySelector("#barraTopo .icon-search");
  const newIconSearchBarraTopo = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
  iconSearchBarraTopo &&
    iconSearchBarraTopo.insertAdjacentHTML(
      "afterBegin",
      newIconSearchBarraTopo
    );

  const iconCartBarraTopo = document.querySelector(
    "#barraTopo .icon-shopping-cart"
  );
  const newIconCartBarraTopo = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`;
  iconCartBarraTopo &&
    iconCartBarraTopo.insertAdjacentHTML("afterBegin", newIconCartBarraTopo);

  const iconContactBarraTopo = document.querySelector(
    "#barraTopo .icon-comment"
  );
  const newIconContactBarraTopo = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`;
  iconContactBarraTopo &&
    iconContactBarraTopo.insertAdjacentHTML(
      "afterBegin",
      newIconContactBarraTopo
    );

  const iconPhoneBarraTopo = document.querySelector("#barraTopo .icon-phone");
  const newIconPhoneBarraTopo = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
  if (iconPhoneBarraTopo) {
    iconPhoneBarraTopo.insertAdjacentHTML("afterBegin", newIconPhoneBarraTopo);
  }

  /**
   * #00001
   * Hide and show sticky header
   */

  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll === 0) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });

  /**
   * #00002
   * Ajustando para o carrossel voltar a entender que tem 4 elementos por página.
   * Alterei para 2 produtos no painel da loja para ter thumbs com melhor qualidade.
   */

  const productCarousels =
    document.getElementsByClassName("produtos-carrossel");

  if (productCarousels) {
    for (let item of productCarousels) {
      item.setAttribute("data-produtos-linha", "4");
    }
  }

  /**
   * #00003
   * Inserir subtítulos na home
   */

  const titleOnHome = [
    {
      title: "vitrine-lancamento",
      active: true,
      message: "Subtítulo lançamento entra aqui.",
    },
    {
      title: "vitrine-mas-vendido",
      active: true,
      message: "Subtítulo mais vendidos entra aqui.",
    },
    {
      title: "vitrine-destaque",
      active: true,
      message: "Subtítulo mais vendidos entra aqui.",
    },
  ];

  titleOnHome.forEach((item) => {
    if (item.active) {
      const vitrine = document.getElementsByClassName(item.title);
      if (!!vitrine[0]) {
        const element = document.createElement("div");
        element.classList.add("subtitle_listagem");
        const textElement = document.createTextNode(item.message);
        element.appendChild(textElement);
        vitrine[0].appendChild(element);
      }
    }
  });

  /**
   * #00004
   * Alterar mensagem de boas vindas
   */

  // $(document).ready(function () {
  //   $("a.bem-vindo.Cor--secundaria").html("Coloque aqui sua frase.");
  // });

  /**
   * #00005
   * Nova chamada dos sliders
   * para mudar as options
   */

  if ($(".listagem .produtos-carrossel").length) {
    $(".listagem .produtos-carrossel").each(function () {
      var o = Number($(this).data("produtos-linha"));

      if (window.innerWidth < 770) {
        o = 1;
      }
      var n = $(this).width() / o - 10;
      $(this)
        .find(".listagem-linha")
        .flexslider({
          animation: "slide",
          slideshow: false,
          selector: "ul > li",
          animationLoop: true,
          controlNav: true,
          smoothHeight: false,
          useCSS: false,
          touch: true,
          prevText: "",
          nextText: "",
          itemWidth: n,
          itemMargin: 0,
          minItems: 2,
          maxItems: o,
          start: function (p) {
            if (p.pagingCount === 1) {
              p.directionNav.hide();
            }
          },
        });
    });
  }

  if ($(".thumbs-horizontal #carouselImagem").length) {
    $(".thumbs-horizontal #carouselImagem").flexslider({
      animation: "slide",
      direction: "horizontal",
      slideshow: false,
      controlNav: false,
      itemWidth: 96,
      touch: false,
      start: function (c) {
        if (c.pagingCount === 1) {
          c.addClass("flex-centered");
        }
        $(".thumbs-horizontal #carouselImagem .flex-viewport").addClass(
          "elastislide-carousel"
        );
        $(".thumbs-horizontal #carouselImagem li").removeClass(
          "active flex-active-slide"
        );
        $(".thumbs-horizontal #carouselImagem li:eq(0)").addClass("active");
        $("#imagemProduto").ImageZoom({ bigImageSrc: imagem_grande });
      },
    });
  }

  /**
   * #00006
   * Increase images product
   */

  jQuery(document).ready(increaseProductImageOnLoad);

  function increaseProductImageOnLoad() {
    $("#imagemProduto").on("load", function () {
      const currentSrc = this.currentSrc;

      const urlArray = currentSrc.split("/");
      const shouldFormat = urlArray[3] !== "1920x1080";
      const urlEnd = urlArray.slice(4);
      const formatUrlEnd = urlEnd.reduce((acc, item) => `${acc}/${item}`, "");
      const newUrl = `https://cdn.awsli.com.br/1920x1080${formatUrlEnd}`;

      if (shouldFormat) {
        $(this).attr("src", newUrl);
      }
    });
  }

  function increaseProductImage() {
    const allImages = document.querySelectorAll("#imagemProduto");

    allImages.forEach((element) => {
      const urlArray = element.src.split("/");
      const shouldFormat = urlArray[3] !== "1920x1080";
      const urlEnd = urlArray.slice(4);
      const formatUrlEnd = urlEnd.reduce((acc, item) => `${acc}/${item}`, "");
      const newUrl = `https://cdn.awsli.com.br/1920x1080${formatUrlEnd}`;

      if (shouldFormat) {
        element.src = newUrl;
      }
    });
  }

  window.onload = increaseProductImage();

  /**
   * #00007
   * Increase product images
   */

  function checkThumbProductImages() {
    if (
      $("#carouselImagem .elastislide-carousel ul li a span img").is(":visible")
    ) {
      $("#carouselImagem .elastislide-carousel ul li a span img").each(
        function () {
          currentSrc = this.currentSrc;

          if (currentSrc.indexOf("64x50") >= 0) {
            const newUrl = this.currentSrc.replace("64x50", "300x300");
            $(this).attr("src", newUrl);
          }
        }
      );
    } else {
      setTimeout(checkThumbProductImages, 1000);
    }
  }

  window.onload = checkThumbProductImages();
  /**
   * #00008
   * Increase cart thumbs images product
   */

  function increaseProductCartImage() {
    const allImages = document.querySelectorAll(".conteiner-imagem img");

    let lengthImages64 = 0;

    allImages.forEach((element) => {
      if (element.src.indexOf("64x64") >= 0) {
        lengthImages64 = +1;
      }

      element.src = element.src.replace("64x64", "300x300");
    });

    if (lengthImages64 === 0) {
      return;
    } else {
      setTimeout(increaseProductCartImage, 50);
    }
  }

  window.onload = increaseProductCartImage();

  /**
   * #00009 - Imagem banner
   */

  function increaseBannerImage() {
    const allImages = document.querySelectorAll(".banner.cheio .slides li img");

    let lengthImages = 0;

    allImages.forEach((element) => {
      if (element.src.indexOf("1140x1140") >= 0) {
        lengthImages = +1;
      }

      element.src = element.src.replace("1140x1140", "3840x1200");
    });

    if (lengthImages === 0) {
      return;
    } else {
      setTimeout(increaseBannerImage, 50);
    }
  }

  window.onload = increaseBannerImage();

  // Dev

  $("#rodape div div div div:not(.sobre-loja-rodape) > p").append(
    "<span class='devname'>Loja customizada por <a href='https://www.breno.com.br' target='_blank' title='Acessar site do desenvolvedor'>Breno Novelli</a></span>"
  );
})();
