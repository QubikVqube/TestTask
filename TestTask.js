
function GroupClic(el){
  var table = document.getElementById('SortTabel');

  group = [];
  values= [];
  
  for (var i= 0; i<5;i++){ //Цикл считывания заголовков таблицы в массив
     var row = table.getElementsByTagName('td')[i].innerHTML;
     group.push(row)
  }
  group.splice(2,1);
  for (var i= 0; i<50;i++){ //Цикл считывания значений ячеек таблицы
     var cell = table.getElementsByTagName('input')[i].value;
     values.push(cell);
  }
  console.log(values);
   for (var c=47;c>=0;c=c-5){
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
   }

   function SortClic(){
     
     var sort1 = [];
     var count1 = 0;
     for (var i = 0; i<=9;i++){ //Цикл записи значений первого столба таблицы для дальнейшней сортировки
        sort1.push(values[count1]);
        count1 = count1 + 4;
     }
     console.log(sort1);
     var sortnumbers  = sort1.map(Number);//Перевод строковых значений массива в числа

     swap=0; //Сориторвка методом пузырёк 
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
     console.log(sortnumbers);
     
      var groupedTable = document.getElementById('groupedTable');
      var total = groupedTable.rows.length;
      for(var i=0; i<total; i++){ //Перезапись элементов первого столбца таблицы
          if(i > 0){
           groupedTable.rows[i].cells[0].innerHTML = sortnumbers[i-1];
          }
      }
  }
   
   
