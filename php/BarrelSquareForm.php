<?
$adminemail="stolyar_art@mail.ru";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://бочкарёф.рф/index.html";  // На какую страничку переходит после отправки письма 
 
// Принимаем данные с формы 
 
$name=$_POST['name'];
 
$tel=$_POST['tel'];

$length=$_POST['length'];

$circle_20=$_POST['circle-20'];

$visor=$_POST['visor'];

$entrance=$_POST['entrance'];

$foundation=$_POST['foundation'];

$step=$_POST['step'];

$price = 129000;

// Проверяем валидность e-mail 
 
// if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", 
// strtolower($tel))) 
 
//  { 
 
//   echo 
// "<center>Вернитесь <a 
// href='javascript:history.back(1)'><B>назад</B></a>. Вы 
// указали неверные данные!"; 
 
//   } 
 
//  else 
 
//  { 
 
 
$msg=" 
 
Заказ Бани-бочки Квадро 
 
 
Имя заказчика: $name
Телефон: $tel
 
Длина: $length

Комплект:
"; 

if($circle_20){
  $msg.="
  Увеличение круга на 20см";

  $price+=14900;
}

if($visor){
  $msg.="
  Козырек";

  $price+=7000;
}

if($entrance){
  $msg.="
  Боковой вход";

  $price+=14000;
}

if($foundation){
  $msg.="
  Фундамент на длину: $length";

  switch ($length) {
    case '2м':
      $price+=9000;
        break;
    case '3м':
      $price+=20000 + 9000;
        break;
    case '3.5м':
      $price+=30000 + 9000;
        break;
    case '4м':
      $price+=50000 + 12000;
        break;
    case '4.5м':
      $price+=60000 + 12000;
        break;
    case '5м':
      $price+=80000 + 15000;
        break;
    case '5.5м':
      $price+=90000 + 15000;
        break;
    case '6м':
      $price+=100000 + 18000;
        break;
  }
}

if($step){
  $msg.="
  Лестница";

  $price+=2900;
}

$msg.="
  Цена: $price р";

 
 // Отправляем письмо админу
 
mail("$adminemail", "Заказ бани-бочки Квадро $date $time", "$msg");
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 6000); 
//--></script> 
 
$msg 
 
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
exit; 

?>