# QA Page Analyzer

Fiz um script em JavaScript para análise a qualidade de páginas web, executado diretamente no console do navegador


---

## O que o script verifica

| Verificação | Classificação |
| Formulários enviando dados | 
| Links sem href ou com href vazio | 
| Inputs sem label | 
| Botões sem texto | 
| Meta description ausente ou genérica | 
| Imagens sem atributo alt | 

---

## Como usar

1. Abra a página que deseja analisar no navegador
2. Pressione **F12** para abrir o DevTools
3. Vá na aba **Console**
4. Cole o conteúdo do arquivo `analyzer.js` no console
5. Pressione **Enter**
6. O relatório será exibido diretamente no console

---

## Por que automatizar parte da análise?

A análise manual é essencial para identificar problemas visuais, de fluxo e de experiência do usuário — coisas que só aparecem quando alguém realmente usa a página. Mas alguns tipos de problemas são mais eficientemente identificados de forma automatizada, como atributos ausentes, configurações incorretas de formulários e meta tags.

A combinação das duas abordagens permite uma cobertura mais completa e reproduzível da análise de qualidade.

---

## Autor

**Thiago Ribeiro**  
[github.com/Ribeirotmr](https://github.com/Ribeirotmr)
