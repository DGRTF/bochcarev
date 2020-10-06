<?  
$adminemail="stolyar_art@mail.ru";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="http://бочкарёф.рф/index.html";  // На какую страничку переходит после отправки письма 
 
// Принимаем данные с формы 
 
$id=$_POST['id']; 

$name=$_POST['name']; 
 
$tel=$_POST['tel']; 

$length=$_POST['length'];

$circle_20=$_POST['circle-20'];

$visor=$_POST['visor'];

$entrance=$_POST['entrance'];

$foundation=$_POST['foundation'];

$step=$_POST['step'];

$street_light=$_POST['street-light'];

$firebox_outside=$_POST['firebox-outside'];

$window=$_POST['window'];

$backs=$_POST['backs'];

$step_polog=$_POST['step-polog'];

$shelf=$_POST['shelf'];

$woodshed=$_POST['woodshed'];
 
$price;

$type;



if($id==1){
  $type = 'круглая';
  $price = 119000;
}else{
  $type = 'квадро';
  $price = 129000;
}
 
 
$msg=" 
 
Заказ Бани-бочки (круглая) 
 
 
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

if($street_light){
  $msg.="
  Уличный светильник";

  $price+=990;
}

if($firebox_outside){
  $msg.="
  Вынос топки наружу";

  $price+=11900;
}

if($window){
  $msg.="
  Доп. окно 30х30/40х40";

  $price+=3900;
}

if($backs){
  $msg.="
  Спинки в парную(осина)";

  $price+=4900;
}

if($step_polog){
  $msg.="
  Ступенька для полога";

  $price+=2500;
}

if($shelf){
  $msg.="
  Полочка для банных средств";

  $price+=990;
}

if($woodshed){
  $msg.="
  Дровяник";

  $price+=3900;
}

$msg.="
  Цена: $price р";

 
 // Отправляем письмо админу  
 

mail("$adminemail", "Заказ бани-бочки ($type) $date $time", "$msg");
 
// Выводим сообщение пользователю 
 
// print "<script language='Javascript'><!-- 
// function reload() {location = \"$backurl\"}; 
// //--></script> 
 
// $msg 
 
// <p>Сообщение отправлено! Подождите, сейчас вы будете перенаправлены на главную страницу...</p>";  
// exit; 

?>