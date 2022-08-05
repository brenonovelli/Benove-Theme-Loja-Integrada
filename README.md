# Teme Benove Loja Integrada
Este tema é desenvolvido para ser usado em lojas da Loja Integrada. Ele conta com ajustes de estilos CSS na sua maioria. Possíveis melhorias em JavaScript também estão disponíveis para uso.

Exemplo: https://benove.lojaintegrada.com.br/

# Todo
[ ] Vídeo sobre o tema      
[ ] Separar e detalhar cada script      
[ ] Escrever sobre opções de configurações

# Open source
O uso deste tema não tem custo algum. Faça bom uso. Seja lojista para alavancar sua loja ou desenvolvedor para aprender como manipular sistemas prontos usando manipulação do DOM.

O código está aberto para melhorias e tem muito para melhorar. Novos exemplos de tema são bem-vindos também.

# Como fazer? Trilha leigo e desenvolvedor
Todo código gerado aqui pode ser colado na seção de estilo CSS na Loja Integrada.

    Em breve teremos mais conteúdo por escrito e vídeo sobre como utilizar e editar o tema.

## 👶 Leigo - Não entendo nada de programação
1. Acesse a pasta `dist` copie o arquio `styles.css` e edite as variáveis css.
   1. Todas as várias tem esse formato: `--NOME-DA-VARIÁVEL: VALOR;` Por exemplo, com esta seguir setamos nossa cor primária: `--B9-Cor--Primaria: #011016;`
2. Acesse a pasta `dist` copie o conteúdo do arquivo `benove_script.js`. No painel da sua loja, inclua um novo HTML como JavaScript.

## 🥷 Dev - Entendo um pouco de programação
1. Acesse a pasta `dist` copie o conteúdo do arquivo `benove_script.js`. No painel da sua loja, inclua um novo HTML como JavaScript.
2. Editar CSS via SASS
> Você precisar do SASS para gerar o código final. Uma rápida busca no YouTube você achará como instalar.

Acesse a pasta `src/styles/sass/variables` e edite o arquivo `theme.scss`.   
**Quer editar ainda mais?** Acesse a pasta `styles/sass/theme` e edite o arquivo `theme.scss`.

# Comandos SASS

## Build final version
```shell
$ sass --watch src/styles/sass/styles.scss dist/styles.css
```

## Build examples version
```shell
$ sass --watch src/styles/sass/demo.scss dist/demo.css
```

# Quer contribuir com o trabalho?
PIX: breno+ajudas@breno.com.br


# Configurações no painel visual da loja
![](.github/img/img01.png)          
![](.github/img/img02.png)          
![](.github/img/img03.png)          
![](.github/img/img04.png)          
![](.github/img/img05.png)          
![](.github/img/img06.png)          
> Ao usar dois produtos por linha teremos uma qualidade melhor das imagens. O script junto com o css fazem o trabalhao de trazer 4 por linha novamente.  
![](.github/img/img07.png)          
![](.github/img/img08.png)          
![](.github/img/img09.png)          
![](.github/img/img10.png)          

# Como criar um banner que se adapte a qualquer tamanho de tela.
Usar o gabarito abaixo. Faça uma imagem com 1920x600, pode ser em 2k ou 4k, e ponha todo conteúdo crucial dentro de 800x600 no meio da imagem. Lembre-se de manter a imagem com no máximo 500kb.
![](.github/img/guia_banner.jpg)          
![](.github/img/GridBanner.png)          

## Alguns exemplos de banner:

![](.github/img/banners/00.blackNovember.png)
![](.github/img/banners/01.CariocadaGema.jpg)
![](.github/img/banners/02.CariocadaGema.jpg)
![](.github/img/banners/01.fullbanner_brisa.jpg)
![](.github/img/banners/02.fullbanner_brisa.jpg)
![](.github/img/banners/03.fullbanner_brisa.jpg)
![](.github/img/banners/04.fullbanner_brisa.jpg)
![](.github/img/banners/05.fullbanner_brisa.jpg)
![](.github/img/banners/06.fullbanner_brisa.jpg)
![](.github/img/banners/07.fullbanner_brisa.jpg)
![](.github/img/banners/08.fullbanner_brisa.jpg)
![](.github/img/banners/09.fullbanner_brisa.jpg)
![](.github/img/banners/10.fullbanner_brisa.jpg)
![](.github/img/banners/00FreeSpiritCapa.jpg)
![](.github/img/banners/01.FreeSpirit.jpg)
![](.github/img/banners/02.FreeSpirit.jpg)
![](.github/img/banners/03.FreeSpirit.jpg)
![](.github/img/banners/04.FreeSpirit.jpg)
![](.github/img/banners/05.FreeSpirit.jpg)
![](.github/img/banners/06.FreeSpirit.jpg)
![](.github/img/banners/07.FreeSpirit.jpg)
![](.github/img/banners/00.fullbanner_amazonia-capa.jpg)
![](.github/img/banners/04.fullbanner_amazonia-vestido_afeto.jpg)
![](.github/img/banners/05.fullbanner_amazonia-kimono_biodiversidade.jpg)
![](.github/img/banners/06.fullbanner_amazonia-saia_vestido_coqueiro.jpg)
![](.github/img/banners/07.fullbanner_amazonia-macacao_desmatamento.jpg)
![](.github/img/banners/08.fullbanner_amazonia-blusa_afeto.jpg)
![](.github/img/banners/01.fullbanner_amazonia-blusao_terra.jpg)
![](.github/img/banners/02.fullbanner_amazonia-blusa_sol.jpg)
![](.github/img/banners/03.fullbanner_amazonia-vestido_liberdade.jpg)