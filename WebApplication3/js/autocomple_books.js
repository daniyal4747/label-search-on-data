$(function () {
   
    var book1 = readTextFile("Life of Harriet Beecher Stowe Compiled from Her Letters and Journals.txt");
    var book2 = readTextFile("George Du Maurier, the Satirist of the Victorians.txt");
    //alert(book1);
    //alert(book2);
    //
    var bookInformation = [
        { value: book1, data: 'Life of Harriet Beecher Stowe Compiled from Her Letters and Journals.txt' },
        { value: book2, data: 'George Du Maurier, the Satirist of the Victorians.txt' },
    ];


    $('#autocomplete').autocomplete({
        lookup: bookInformation,
        onSelect: function (suggestion) {
            var thehtml = '<strong>Book Name:</strong> ' + suggestion.data +'<br><strong>Book Text:</strong> ' + suggestion.value;
            $('#outputcontent').html(thehtml);
            var heading = $('#autocomplete').val();
            var str = heading.split(' ');
            $('#autocomplete').val(str[0]+" "+str[1]+" "+str[2]);
        }
    });

});
function readTextFile(file) {
    var data;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
                var allText = rawFile.responseText;
                data = allText;
            
        }
    }
    rawFile.send(null);
    return data;
}