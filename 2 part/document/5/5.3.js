//Тег в комментарии
//Что выведет этот код?

// BODY

<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script>