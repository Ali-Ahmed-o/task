function BookStore(name ,title ,author) {
    this.Name = name;
    this.Title = title;
    this.Author = author;

}

window.onload = function () {
    var AnotherFieldBtn = document.getElementById('AnotherFieldBtn');
    var inputs = document.getElementsByTagName('input');
    var InputsSide = document.getElementById('InputsSide');
    var TableSide = document.getElementById('TableSide');
    var ADDbtn = document.getElementById('ADDbtn');
    var myTable = document.getElementById('myTable');

    // make the first input focused
    inputs[0].focus();
    // the array which will stores book objects
    var BookObjects = [];
    

    // appear a new input field when clicking on 'another field' button 
    AnotherFieldBtn.onclick = function () {
        var ISBNHead = document.createElement('h4');
        ISBNHead.innerText = "ISBN :";
        var ISBNInput = document.createElement('input');
        ISBNInput.setAttribute('type', 'text');
        ISBNInput.setAttribute('placeholder', 'Enter ISBN');
        ISBNInput.className = 'form-control';
        InputsSide.insertBefore(ISBNInput, ADDbtn);
        InputsSide.insertBefore(ISBNHead, ISBNInput);
        inputs[0].focus();
    }
    //***************************************************************
    
    // Add button 
    ADDbtn.onclick = function () {

        var InputValues = [];
  
        // get user values 
        for( var index = 0 ; index < inputs.length ; index++)
        {
            InputValues.push(inputs[index].value);
        }

        //create a new book object 
        if (InputValues[3] || InputValues[3] != ''){
            var newBook = new BookStore(InputValues[0], InputValues[1], InputValues[2]);
            newBook.ISBN = InputValues[3];
        }else
            var newBook = new BookStore(InputValues[0], InputValues[1], InputValues[2]);

       
      
        //Create new row
        var newRow = document.createElement('tr');

        // create Name column
        var NameCol = document.createElement('td');
        NameCol.innerText = newBook.Name;
        newRow.appendChild(NameCol);

        // create Title column
        var TitleCol = document.createElement('td');
        TitleCol.innerText = newBook.Title;
        newRow.appendChild(TitleCol);

        // create Author column
        var AuthorCol = document.createElement('td');
        AuthorCol.innerText = newBook.Author;
        newRow.appendChild(AuthorCol);

        // create ISBN column
        var ISBNCol = document.createElement('td');
        if (newBook.ISBN)
            ISBNCol.innerText = newBook.ISBN;
        else
            ISBNCol.innerText = '';

        newRow.appendChild(ISBNCol);

        // create Edit column
        var EditCol = document.createElement('td');
        var EditBtn = document.createElement('button');
        EditBtn.innerText = 'Edit';
        EditBtn.className = 'btn btn-primary NewWidth';
        // Edit Button onclick function 
        EditBtn.onclick = function () {
            EditBtn.style.display = 'none';

            //create update button
            var UpdateBtn = document.createElement('button');
            UpdateBtn.innerText = 'Update';
            UpdateBtn.className = 'btn btn-success MarginRight';
            // update button onclick function 
            UpdateBtn.onclick = function () {
                NameCol.innerHTML = "<input type='text' class='form-control' value = " + NameCol.innerText + " >";
                TitleCol.innerHTML = "<input type='text' class='form-control' value = " + TitleCol.innerText + "  >";
                AuthorCol.innerHTML = "<input type='text' class='form-control' value = " + AuthorCol.innerText + "  >";
                ISBNCol.innerHTML = "<input type='text' class='form-control' value = " + ISBNCol.innerText + "  >";

                NameCol.childNodes[0].style.display = 'block';
                TitleCol.childNodes[0].style.display = 'block';
                AuthorCol.childNodes[0].style.display = 'block';
                ISBNCol.childNodes[0].style.display = 'block';

                UpdateBtn.onclick = function () {
                    NameInputValue = NameCol.childNodes[0].value;
                    NameCol.childNodes[0].style.display = 'none';
                    NameCol.innerText = NameInputValue;
                    newBook.Name = NameInputValue;

                    TitleInputValue = TitleCol.childNodes[0].value;
                    TitleCol.childNodes[0].style.display = 'none';
                    TitleCol.innerText = TitleInputValue;
                    newBook.Title = TitleInputValue;

                    AuthorInputValue = AuthorCol.childNodes[0].value;
                    AuthorCol.childNodes[0].style.display = 'none';
                    AuthorCol.innerText = AuthorInputValue;
                    newBook.Author = AuthorInputValue;

                    ISBNInputValue = ISBNCol.childNodes[0].value;
                    ISBNCol.childNodes[0].style.display = 'none';
                    ISBNCol.innerText = ISBNInputValue;
                    newBook.ISBN = ISBNInputValue;


                    UpdateBtn.style.display = 'none';
                    DeleteBtn.style.display = 'none';
                    EditBtn.style.display = 'block';
                    
                }
            }
            EditCol.appendChild(UpdateBtn);

            //create delete button
            var DeleteBtn = document.createElement('button');
            DeleteBtn.innerText = 'Delete';
            DeleteBtn.className = 'btn btn-danger';
            // update button onclick function 
            DeleteBtn.onclick = function () {
                newRow.remove();
            }
            EditCol.appendChild(DeleteBtn);
        }

        EditCol.appendChild(EditBtn);
        newRow.appendChild(EditCol);


        // append the new row un table
        myTable.appendChild(newRow);

        // make the input fields Empty after adding a new book in table 
        for(var index = 0 ; index < inputs.length ; index++)
        {
            inputs[index].value = '';
        }

        BookObjects.push(newBook);

        ////// to print ISBN values for every object
        //for (var i = 0 ; i < BookObjects.length ; i++)
        //{
        //    console.log('object => ' + BookObjects[i].Name)
        //}
        

    }

}



