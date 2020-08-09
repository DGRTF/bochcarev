<? 
 
$adminemail="stolyar_art@mail.ru";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://бочкарёф.рф/index.html";  // На какую страничку переходит после отправки письма 
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
 
$tel=$_POST['tel']; 
 
// $msg=$_POST['message']; 
 
  
 
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
 
 
Заказан обратный звонок с сайта Бани-бочки
 
Имя: $name
Телефон: $tel
 
"; 
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$date $time Сообщение 
от $name", "$msg"); 
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 1); 
//--></script> 
 
$msg 
 
<p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
exit; 
 
?>