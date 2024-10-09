

function GroupClic(el){
  var table = document.getElementById('SortTabel');

  group = [];
  values= [];
  
  for (var i= 0; i<5;i++){ //Цикл считывания заголовков таблицы в массив
     var row = table.getElementsByTagName('td')[i].innerHTML;
     group.push(row)
  }
  group.splice(2,1);//Удаление столбца С

  for (var i= 0; i<50;i++){ //Цикл считывания значений ячеек таблицы
     var cell = table.getElementsByTagName('input')[i].value;
     values.push(cell);
  }
  console.log(values);
   for (var c=47;c>=0;c=c-5){//Удаление значений столбца С (попытки сделать критерии значений)
     values.splice(c,1)
   }

     var body = document.getElementsByTagName("body")[0];
   
     var tbl = document.createElement("table");
     var tblBody = document.createElement("tbody");
   

     var count = 0;
     for (var j = 0; j <= 0; j++) { //Цикл создания и заполнения заголовков таблицы
        var row = document.createElement("tr");
        
        for (var i = 0; i < group.length; i++) {
          var cell = document.createElement("td");
          var cellText = document.createTextNode(group[i]);
          
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        tblBody.appendChild(row);
      }
    
     for (var j = 0; j <= 9; j++) { //Цикл создания и заполнения ячеек таблицы
       var row = document.createElement("tr");
       
       for (var i = 0; i < group.length; i++) {
         var cell = document.createElement("td");
         var cellText = document.createTextNode(values[count]);
         
         cell.appendChild(cellText);
         row.appendChild(cell);
         count++;
       }
       tblBody.appendChild(row);
       
     }

     tbl.appendChild(tblBody);
     body.appendChild(tbl);//Помещение <tabel> в <body>
     tbl.setAttribute("border", "2");//Установка атрибутов новой таблицы 
     tbl.id = 'groupedTable';//Добавление созданной таблице id 
     el.disabled = true; //Блокирование кнопки от повторного нажатия

     var myParent = document.body;//Создание выпадающего списка для выбора сортировки 
      var array = ["Пузырьком","Перемещением"];
      var selectList = document.createElement("select");
      selectList.id = "Selects";
      myParent.appendChild(selectList);

      for (var i = 0; i < array.length; i++) {
          var option = document.createElement("option");
          option.value = array[i];
          option.text = array[i];
          selectList.appendChild(option);
    }
    return values;
   }

   var count1 = 0;//Глобальные переменный для 
   var cell1 = 0;//Соритровки и перезаписи столбцов

   const SortA = document.querySelector(".SortA");//Сортировка столбца А по нажатию кнопки
   function Sort_A(){

    let selectElement = document.getElementById('Selects');
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;//Считывание значение select
    console.log(selectedValue);
    count1 = 0;
    cell1 = 0;

    if (selectedValue == "Пузырьком"){
      SortBubbls();
    }
    else{
      SortMoving();
    }
   }
   //console.log(selectedValue);
   const SortB = document.querySelector(".SortB");
   function Sort_B(){//Сортировка столбца В по нажатию кнопки
       let selectElement = document.getElementById('Selects');
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;//Считывание значение select
    console.log(selectedValue);
    count1 = 1;
    cell1 = 1;

    if (selectedValue == "Пузырьком"){//Проверка метода сортировки 
      SortBubbls();
    }
    else{
      SortMoving();
    }
   }
   const SortD = document.querySelector(".SortD");
   function Sort_D(){//Сортировка столбца D по нажатию кнопки
    let selectElement = document.getElementById('Selects');
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedValue);
    count1 = 2;
    cell1 = 2;

    if (selectedValue == "Пузырьком"){
      SortBubbls();
    }
    else{
      SortMoving();
    }
   }
   const SortE = document.querySelector(".SortE");
   function Sort_E(){//Сортировка столбца E по нажатию кнопки
    let selectElement = document.getElementById('Selects');
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedValue);
    count1 = 3;
    cell1 = 3;

    if (selectedValue == "Пузырьком"){
      SortBubbls();
    }
    else{
      SortMoving();
    }
   }

   function SortBubbls(){//Сортировка пузырьком
     
      sort1= [];
      sortString = [];
 
     for (var i = 0; i<=9;i++){ //Цикл записи значений столбца таблицы для дальнейшней сортировки
      if (!isNaN(values[count1])){
        sort1.push(values[count1]);
      }
      if (isNaN (values[count1])){
        sortString.push(values[count1]);
        console.log(sortString);
      }
      count1 = count1 + 4;
     }

     sort1 = sort1.filter(function(entry){return entry.trim() != '';})//Функция удаления пустых ячеек столбца

     console.log(sort1);
     var sortnumbers  = sort1.map(Number);//Перевод строковых значений массива в числа

     swap1=0; //Сориторвка методом пузырёк строк в ячейках
     for (var k = 0; k < sortString.length; k++) { 
         for (var i = 0; i < sortString.length - k - 1; i++) {
             if (sortString [i] > sortString [i + 1]) { 
                 temp = sortString [i + 1]; 
                 sortString [i + 1] = sortString [i]; 
                 sortString [i] = temp; 
                 swap1++;
             }
            }
     }
     console.log(sortString);
     swap=0; //Сориторвка методом пузырёк чисел в ячейках
     for (var k = 0; k < sortnumbers.length; k++) { 
         for (var i = 0; i < sortnumbers.length - k - 1; i++) {
             if (sortnumbers [i] > sortnumbers [i + 1]) { 
                 temp = sortnumbers [i + 1]; 
                 sortnumbers [i + 1] = sortnumbers [i]; 
                 sortnumbers [i] = temp; 
                 swap++;
             }
            }
     }
      
     sort1 = sortnumbers.map(String);
     sortString = sortString.concat(sort1);
     console.log(sortString);
      var groupedTable = document.getElementById('groupedTable');
      var total = sortString.length+1;
      for(var i=0; i<total; i++){ //Перезапись элементов столбца таблицы
          if(i > 0){
           groupedTable.rows[i].cells[cell1].innerHTML = sortString[i-1];
          }
      }
  }

  function SortMoving() //Соритровка Перемещением 
  {
    sort2 = [];
    sortString1 = [];

   for (var i = 0; i<=9;i++){ //Цикл записи значений столбца таблицы для дальнейшней сортировки
    if (!isNaN(values[count1])){
      sort2.push(values[count1]);
    }
    if (isNaN (values[count1])){
      sortString1.push(values[count1]);
      console.log(sortString1);
    }
    count1 = count1 + 4;
   }

   sort2 = sort2.filter(function(entry){return entry.trim() != '';})
   sort2 = sort2.map(Number);

      let swapped = true;
      let start = 0;
      let end = sort2.length;

      while (swapped == true) {
          swapped = false;
          for (let i = start; i < end - 1; ++i) {
              if (sort2[i] > sort2[i + 1]) {
                  let temp = sort2[i];
                  sort2[i] = sort2[i + 1];
                  sort2[i + 1] = temp;
                  swapped = true;
              }
          }
          if (swapped == false)
              break;
          swapped = false;
          end = end - 1;
          for (let i = end - 1; i >= start; i--) {
              if (sort2[i] > sort2[i + 1]) {
                  let temp = sort2[i];
                  sort2[i] = sort2[i + 1];
                  sort2[i + 1] = temp;
                  swapped = true;
              }
          }
          start = start + 1;
      }
      console.log(sort2);

      let swapped1 = true;
      let start1 = 0;
      let end1 = sortString1.length;

      while (swapped1 == true) {
        swapped = false;

        for (let i = start1; i < end1 - 1; ++i) {
            if (sortString1[i] > sortString1[i + 1]) {
                let temp = sortString1[i];
                sortString1[i] = sortString1[i + 1];
                sortString1[i + 1] = temp;
                swapped1 = true;
            }
        }

        if (swapped1 == false)
            break;
        swapped1 = false;
        end1 = end1 - 1;
        for (let i = end1 - 1; i >= start1; i--) {
            if (sortString1[i] > sortString1[i + 1]) {
                let temp = sortString1[i];
                sortString1[i] = sortString1[i + 1];
                sortString1[i + 1] = temp;
                swapped1 = true;
            }
        }
        start1 = start1 + 1;
    }
    console.log(sortString1);

    sort2 = sort2.map(String);
     sortString1 = sortString1.concat(sort2);
     console.log(sortString1);
      var groupedTable = document.getElementById('groupedTable');
      var total = sortString1.length+1;
      for(var i=0; i<total; i++){ //Перезапись элементов столбца таблицы
          if(i > 0){
           groupedTable.rows[i].cells[cell1].innerHTML = sortString1[i-1];
          }
      }
  }