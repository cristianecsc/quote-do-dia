# ✦ Trecho do Dia — Dark Academy Widget

Um widget minimalista de frases inspiradoras para Notion, com estética Dark Academy.

Criado para dashboards pessoais com foco em estudos, leitura, organização e desenvolvimento pessoal.

---

## ✦ Características

- Fundo transparente para integração com Notion.
- Fonte Cormorant Garamond.
- Estética Dark Academy.
- Texto dourado elegante.
- Troca automática de frase a cada 60 segundos.
- Frases carregadas através de arquivo JSON.
- Compatível com GitHub Pages.
- Responsivo para desktop e celular.

---

## ✦ Estrutura do projeto


Trecho-do-Dia/

│── index.html
│── style.css
│── script.js
│── quotes.json
└── README.md


---

## ✦ Como publicar no GitHub Pages

1. Crie um novo repositório no GitHub.

2. Envie todos os arquivos do projeto.

3. Acesse:


Settings
→ Pages
→ Deploy from branch
→ Selecionar main
→ Save


4. Aguarde a geração do link.

Seu widget estará disponível em:


https://seusuario.github.io/Trecho-do-Dia/


---

## ✦ Como colocar no Notion

1. Abra sua página no Notion.

2. Digite:


/embed


3. Cole o link do GitHub Pages.

4. Ajuste o tamanho do bloco.

---

## ✦ Como adicionar novos trechos

Abra o arquivo:


quotes.json


Adicione novos objetos seguindo este formato:

```json
{
  "text": "Seu novo trecho aqui",
  "author": "Autor"
}

Salve e envie novamente para o GitHub.

---

✦ Personalização

Alterar cor do texto

No arquivo:

style.css

Procure:

color: #D4AF37;

Substitua pelo tom desejado.

---

Alterar intervalo de troca

No arquivo:

script.js

Procure:

60000

O valor está em milissegundos.

Exemplo:

30000 = 30 segundos
60000 = 60 segundos

---

✦ Créditos

Widget desenvolvido para uso pessoal em dashboards Notion.

Estilo: Dark Academy
Fonte: Cormorant Garamond
