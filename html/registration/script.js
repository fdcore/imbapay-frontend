//после загрузки веб-страницы
$(function () {
  // при отправке формы messageForm на сервер (id="messageForm")
  $('#messageForm').submit(function () {})

  //проверяем элемент, содержащий код капчи
  //1. Получаем капчу
  var captcha = grecaptcha.getResponse()
  //2. Если длина кода капчи, которой ввёл пользователь не равно 6,
  //   то сразу отмечаем капчу как невалидную (без отправки на сервер)
  if (!captcha.length) {
    // Выводим сообщение об ошибке
    $('#recaptchaError').text('* Вы не прошли проверку "Я не робот"')
  } else {
    // получаем элемент, содержащий капчу
    $('#recaptchaError').text('')
  }

  // если форма валидна и длина капчи не равно пустой строке, то отправляем форму на сервер (AJAX)
  if (formValid && captcha.length) {
    // получаем имя, которое ввёл пользователь
    var name = $('#name').val()
    // получаем email, который ввёл пользователь
    var email = $('#email').val()
    // получаем сообщение, которое ввёл пользователь
    var message = $('#message').val()

    // объект, посредством которого будем кодировать форму перед отправкой её на сервер
    var formData = new FormData()
    // добавить в formData значение 'name'=значение_поля_name
    formData.append('name', name)
    // добавить в formData значение 'email'=значение_поля_email
    formData.append('email', email)
    // добавить в formData значение 'message'=значение_поля_message
    formData.append('message', message)
    // добавить в formData файлы
    // получить все элементы с атрибутом name="images[]"
    var images = document.getElementsByName('images[]')
    // перебрать все элементы images с помощью цикла
    for (var i = 0; i < images.length; i++) {
      // получить список файлов элемента input с type="file"
      var fileList = images[i].files
      // если элемент не содержит файлов, то перейти к следующей
      if (fileList.length > 0) {
        // получить первый файл из списка
        var file = fileList[0]
        // проверить тип файла и размер
        if (file.type.match('image.*') && file.size < 524288) {
          // добавить его (файл (file) с именем file.name) в formData
          formData.append('images[]', file, file.name)
        }
      }
    }

    // добавить в formData значение 'g-recaptcha-response'=значение_recaptcha
    formData.append('g-recaptcha-response', captcha)

    // технология AJAX
    $.ajax({
      //метод передачи запроса - POST
      type: 'POST',
      //URL-адрес запроса
      url: '/feedback/process.php',
      //передаваемые данные - formData
      data: formData,
      // не устанавливать тип контента, т.к. используется FormData
      contentType: false,
      // не обрабатывать данные formData
      processData: false,
      // отключить кэширование результатов в браузере
      cache: false,
      //при успешном выполнении запроса
      success: function (data) {
        // разбираем строку JSON, полученную от сервера
        var $data = JSON.parse(data)
        // устанавливаем элементу, содержащему текст ошибки, пустую строку
        $('#error').text('')

        // если сервер вернул ответ success, то значит двнные отправлены
        if ($data.result == 'success') {
          // скрываем форму обратной связи
          $('#messageForm').hide()
          // удаляем у элемента, имеющего id=msgSubmit, класс hidden
          $('#msgSubmit').removeClass('hidden')
        } else {
          // Если сервер вернул ответ error, то делаем следующее...
          $('#error').text('Произошла ошибка при отправке формы на сервер.')
          // Сбрасываем виджет reCaptcha
          grecaptcha.reset()
          // Если существует свойство msg у объекта $data, то...
          if ($data.msg) {
            // вывести её в элемент у которого id=recaptchaError
            $('#msg').text($data.msg)
          }
          if ($data.files) {
            $('#error').html($('#error').text() + '<br>' + $data.files)
          }
        }
      },
      error: function (request) {
        $('#error').text('Произошла ошибка ' + request.responseText + ' при отправке данных.')
      }
    })
  }
})
